/**
 * AudioManager - ゲーム内のBGMと効果音を管理するシングルトンクラス
 */
class AudioManager {
    private static instance: AudioManager;
    private bgm: HTMLAudioElement | null = null;
    private currentBgm: string | null = null;
    private bgmVolume: number = 0.5;
    private sfxVolume: number = 0.7;

    private constructor() { }

    static getInstance(): AudioManager {
        if (!AudioManager.instance) {
            AudioManager.instance = new AudioManager();
        }
        return AudioManager.instance;
    }

    /**
     * BGMを再生する
     * @param name BGMファイル名 ('title', 'game', 'result')
     */
    playBGM(name: string): void {
        // 既に同じBGMが再生中なら何もしない
        if (this.currentBgm === name && this.bgm && !this.bgm.paused) {
            return;
        }

        // 現在のBGMを停止
        this.stopBGM();

        try {
            this.bgm = new Audio(`/audio/bgm/${name}.mp3`);
            this.bgm.loop = true;
            this.bgm.volume = this.bgmVolume;
            this.currentBgm = name;

            // 音源が見つからない場合はサイレント動作
            this.bgm.addEventListener('error', () => {
                console.warn(`BGM file not found: ${name}.mp3`);
            });

            this.bgm.play().catch((error) => {
                console.warn('BGM playback failed:', error);
            });
        } catch (error) {
            console.warn('Failed to load BGM:', error);
        }
    }

    /**
     * BGMを停止する
     */
    stopBGM(): void {
        if (this.bgm) {
            this.bgm.pause();
            this.bgm.currentTime = 0;
            this.bgm = null;
            this.currentBgm = null;
        }
    }

    /**
     * 効果音を再生する
     * @param name 効果音ファイル名 ('correct', 'wrong')
     */
    playSFX(name: string): void {
        try {
            const sfx = new Audio(`/audio/sfx/${name}.mp3`);
            sfx.volume = this.sfxVolume;

            sfx.addEventListener('error', () => {
                console.warn(`SFX file not found: ${name}.mp3`);
            });

            sfx.play().catch((error) => {
                console.warn('SFX playback failed:', error);
            });
        } catch (error) {
            console.warn('Failed to load SFX:', error);
        }
    }

    /**
     * BGMの音量を設定する
     * @param volume 0.0 ~ 1.0
     */
    setBGMVolume(volume: number): void {
        this.bgmVolume = Math.max(0, Math.min(1, volume));
        if (this.bgm) {
            this.bgm.volume = this.bgmVolume;
        }
    }

    /**
     * 効果音の音量を設定する
     * @param volume 0.0 ~ 1.0
     */
    setSFXVolume(volume: number): void {
        this.sfxVolume = Math.max(0, Math.min(1, volume));
    }
}

export const audioManager = AudioManager.getInstance();
