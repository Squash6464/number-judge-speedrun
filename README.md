# Number Judge Speedrun

**バージョン**: 1.0.0

高速数値判断ゲーム。出題される条件に合う数字を素早く選択してスコアを競います。

## ゲーム概要

「Number Judge Speedrun」は、画面に表示される数字の中から、指定された条件に合うものを素早く選択するゲームです。
4つの難易度があり、難易度が上がるにつれて問題が複雑になります。

### 難易度

- **初級 (Beginner)**: 3枚のカード、60秒、基本的な条件
- **中級 (Intermediate)**: 4枚のカード、60秒、倍数や桁の和など
- **上級 (Advanced)**: 5枚のカード、50秒、2番目の大小や複合条件
- **超級 (Master)**: 6枚のカード、45秒、素数や前回の記憶など高度な条件

## 機能

- ✅ 4段階の難易度選択
- ✅ スコアとタイマーシステム
- ✅ カウントダウン演出
- ✅ ポーズ機能
- ✅ オプション設定
  - BGM/SFX音量調整（5段階 + ミュート）
  - 画面揺れ・フラッシュ効果のON/OFF
  - 言語切り替え（日本語/英語）
- ✅ クレジット表示

## 技術スタック

- **フレームワーク**: React + TypeScript + Vite
- **状態管理**: Zustand
- **スタイリング**: CSS Modules
- **ビルドツール**: Vite

## 開発

### 必要要件

- Node.js (推奨: v18以上)
- npm または yarn

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで `http://localhost:5173` を開くとゲームが起動します。

### ビルド

```bash
# プロダクションビルド
npm run build

# ビルドのプレビュー
npm run preview
```

ビルド成果物は `dist/` ディレクトリに出力されます。

### Lintチェック

```bash
npm run lint
```

## プロジェクト構造

```
src/
├── components/       # Reactコンポーネント
│   ├── GameScreen.tsx
│   ├── OptionsModal.tsx
│   └── CreditsModal.tsx
├── game/            # ゲームロジック
│   ├── store.ts         # Zustandストア
│   ├── types.ts         # 型定義
│   ├── conditions.ts    # 問題条件定義
│   ├── generator.ts     # 数値生成ロジック
│   ├── audioManager.ts  # 音声管理
│   ├── constants.ts     # 定数・言語リソース
│   └── credits.ts       # クレジット情報
├── styles/          # CSSモジュール
└── ...
```

## 音声ファイルについて

ゲームで使用する音声ファイルは `public/audio/` ディレクトリに配置してください。

必要なファイル:
- `bgm/title.mp3` - タイトル画面
- `bgm/game.mp3` - ゲーム中
- `bgm/result.mp3` - リザルト画面
- `sfx/correct.mp3` - 正解時
- `sfx/wrong.mp3` - 不正解時
- `sfx/countdown.mp3` - カウントダウン
- `sfx/start.mp3` - スタート

詳細は `public/audio/README.md` を参照してください。

## クレジットの追加

クレジット情報を追加する場合は、`CREDITS_GUIDE.md` を参照してください。

## クレジット

### 音楽・効果音
- [魔王魂 様](https://maou.audio/)

## ライセンス

このプロジェクトはプライベート用です。

---

**Version 1.0.0** - 2025-12-01
