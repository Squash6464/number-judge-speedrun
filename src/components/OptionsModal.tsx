import React from 'react';
import { useGameStore } from '../game/store';
import { TEXT_RESOURCES } from '../game/constants';
import styles from '../styles/OptionsModal.module.css';

interface OptionsModalProps {
    onClose: () => void;
}

export const OptionsModal: React.FC<OptionsModalProps> = ({ onClose }) => {
    const {
        options,
        setBgmVolume,
        setSfxVolume,
        toggleBgmMute,
        toggleSfxMute,
        setEnableShake,
        setEnableFlash,
        setLanguage,
    } = useGameStore();

    const t = TEXT_RESOURCES[options.language];

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2 className={styles.title}>{t.optionsTitle}</h2>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>{t.audio}</h3>

                    <div className={styles.row}>
                        <span className={styles.label}>{t.bgmVolume}</span>
                        <div className={styles.controls}>
                            <button
                                className={`${styles.muteBtn} ${options.isBgmMuted ? styles.active : ''}`}
                                onClick={toggleBgmMute}
                            >
                                {options.isBgmMuted ? t.muted : t.mute}
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="5"
                                value={options.bgmVolume}
                                onChange={(e) => setBgmVolume(Number(e.target.value))}
                                className={styles.slider}
                                disabled={options.isBgmMuted}
                            />
                            <span className={styles.value}>{options.bgmVolume}</span>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <span className={styles.label}>{t.sfxVolume}</span>
                        <div className={styles.controls}>
                            <button
                                className={`${styles.muteBtn} ${options.isSfxMuted ? styles.active : ''}`}
                                onClick={toggleSfxMute}
                            >
                                {options.isSfxMuted ? t.muted : t.mute}
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="5"
                                value={options.sfxVolume}
                                onChange={(e) => setSfxVolume(Number(e.target.value))}
                                className={styles.slider}
                                disabled={options.isSfxMuted}
                            />
                            <span className={styles.value}>{options.sfxVolume}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>{t.visual}</h3>

                    <div className={styles.row}>
                        <span className={styles.label}>{t.screenShake}</span>
                        <button
                            className={`${styles.toggleBtn} ${options.enableShake ? styles.on : styles.off}`}
                            onClick={() => setEnableShake(!options.enableShake)}
                        >
                            {options.enableShake ? t.on : t.off}
                        </button>
                    </div>

                    <div className={styles.row}>
                        <span className={styles.label}>{t.flashEffects}</span>
                        <button
                            className={`${styles.toggleBtn} ${options.enableFlash ? styles.on : styles.off}`}
                            onClick={() => setEnableFlash(!options.enableFlash)}
                        >
                            {options.enableFlash ? t.on : t.off}
                        </button>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>{t.language}</h3>

                    <div className={styles.row}>
                        <span className={styles.label}>{t.language}</span>
                        <div className={styles.toggleGroup}>
                            <button
                                className={`${styles.langBtn} ${options.language === 'ja' ? styles.active : ''}`}
                                onClick={() => setLanguage('ja')}
                            >
                                JP
                            </button>
                            <button
                                className={`${styles.langBtn} ${options.language === 'en' ? styles.active : ''}`}
                                onClick={() => setLanguage('en')}
                            >
                                EN
                            </button>
                        </div>
                    </div>
                </div>

                <button className={styles.closeBtn} onClick={onClose}>
                    {t.close}
                </button>
            </div>
        </div>
    );
};
