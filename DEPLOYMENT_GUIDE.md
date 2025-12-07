# Webアプリのデプロイ入門ガイド

## デプロイとは？

**デプロイ（Deploy）** = あなたの作ったゲームをインターネット上に公開すること

今は `localhost:5173` など、**あなたのパソコンでしか**見られません。
デプロイすると、世界中の誰でもブラウザで遊べるようになります！

### 例
- デプロイ前: `http://localhost:5173` （あなただけ）
- デプロイ後: `https://あなたの名前.vercel.app` （全世界）

---

## VercelとNetlifyの違い

どちらも**無料でWebアプリを公開できるサービス**です。初心者にとても優しいです。

### Vercel（ヴァーセル）
- **特徴**: Reactアプリに特化、超高速
- **企業**: Next.jsを作った会社
- **無料プラン**: 個人利用なら十分
- **おすすめ度**: ⭐⭐⭐⭐⭐

### Netlify（ネットリファイ）
- **特徴**: 汎用的、設定が簡単
- **企業**: 老舗のホスティングサービス
- **無料プラン**: 個人利用なら十分
- **おすすめ度**: ⭐⭐⭐⭐⭐

### どちらを選ぶ？

**結論: Vercelがおすすめです**

理由:
1. あなたのプロジェクトはVite + Reactなので相性抜群
2. 設定がほぼ自動で楽
3. デプロイが爆速（10秒くらい）

ただし、**どちらでも問題なく動きます**。好きな方を選んでOKです！

---

## 事前準備（共通）

デプロイする前に、以下を確認してください：

### 1. Gitリポジトリが必要
デプロイサービスは**GitHub**などからコードを読み込みます。

#### GitHubにアップロードする手順

**GitHubアカウントがない場合:**
1. [GitHub](https://github.com) にアクセス
2. 「Sign up」でアカウント作成（無料）
3. メールアドレスとパスワードを登録

**リポジトリを作成:**
1. GitHubにログイン
2. 右上の「+」→「New repository」
3. リポジトリ名: `number-judge-speedrun`
4. Public（公開）またはPrivate（非公開）を選択
5. 「Create repository」をクリック

**ローカルコードをアップロード:**

プロジェクトフォルダで以下のコマンドを実行：

```bash
# Gitの初期化（まだの場合）
git init

# 全ファイルを追加
git add .

# コミット
git commit -m "v1.0.0 release"

# GitHubと連携（URLはGitHubで表示されるものに置き換え）
git remote add origin https://github.com/あなたのユーザー名/number-judge-speedrun.git
git branch -M main
git push -u origin main
```

これでGitHub上にコードがアップロードされます！

---

## 🚀 Vercelでのデプロイ手順（おすすめ）

### ステップ1: Vercelアカウント作成

1. [Vercel](https://vercel.com) にアクセス
2. 「Sign Up」をクリック
3. **「Continue with GitHub」を選択**（GitHubアカウントで登録）
4. GitHubの認証を許可

### ステップ2: コマンドラインからデプロイ

#### 方法A: コマンド1つで完了（簡単）

プロジェクトフォルダで以下を実行：

```bash
npx vercel --prod
```

**初回実行時に聞かれること:**

```
? Set up and deploy "C:\Users\...\Next"? [Y/n]
→ Y を入力

? Which scope do you want to deploy to?
→ あなたのアカウント名を選択（Enterキー）

? Link to existing project? [y/N]
→ N を入力（新規プロジェクトなので）

? What's your project's name?
→ number-judge-speedrun（そのままEnter）

? In which directory is your code located?
→ ./（そのままEnter）

? Want to override the settings? [y/N]
→ N を入力（自動設定でOK）
```

これだけで完了！🎉

#### 方法B: Vercel Webサイトから（ビジュアル派）

1. [Vercel Dashboard](https://vercel.com/new) にログイン
2. 「Import Project」をクリック
3. 「Import Git Repository」を選択
4. GitHubのリポジトリ `number-judge-speedrun` を選択
5. 「Import」をクリック
6. **設定はそのままでOK**（Viteを自動検出してくれます）
7. 「Deploy」をクリック

### ステップ3: 公開完了！

デプロイが完了すると、URLが表示されます：

```
https://number-judge-speedrun-あなたのID.vercel.app
```

このURLをブラウザで開くと、**世界中からアクセスできるゲーム**が完成！

### 更新する方法

コードを修正したら：

```bash
git add .
git commit -m "更新内容"
git push
```

→ **自動的にVercelが再デプロイしてくれます！**（超便利）

---

## 🌐 Netlifyでのデプロイ手順（代替案）

### ステップ1: Netlifyアカウント作成

1. [Netlify](https://www.netlify.com) にアクセス
2. 「Sign Up」をクリック
3. **「GitHub」を選択**（GitHubアカウントで登録）
4. GitHubの認証を許可

### ステップ2: コマンドラインからデプロイ

```bash
# Netlify CLIをインストール
npm install -g netlify-cli

# ログイン
netlify login

# デプロイ
netlify deploy --prod
```

**初回実行時に聞かれること:**

```
? Create & configure a new site
→ 選択してEnter

? Team:
→ あなたのアカウント名を選択

? Site name:
→ number-judge-speedrun（任意の名前）

? Publish directory:
→ dist（そのままEnter）
```

### ステップ3: 公開完了！

URLが表示されます：

```
https://number-judge-speedrun.netlify.app
```

---

## よくある質問（FAQ）

### Q1: お金はかかりますか？
**A:** いいえ、無料です！ただし：
- Vercel: 月100GBまでの帯域幅（個人利用なら十分）
- Netlify: 月100GBまでの帯域幅（個人利用なら十分）

超えない限り無料です。普通の個人プロジェクトなら心配無用です。

### Q2: 独自ドメイン（例: mygame.com）を使えますか？
**A:** はい、使えます！
- ドメイン購入（例: お名前.com、Google Domains）
- VercelまたはNetlifyの設定でドメインを追加
- DNS設定を変更

ただし、ドメイン購入は有料です（年間1000円〜）。

### Q3: デプロイに失敗しました
**A:** 以下を確認してください：
1. `npm run build` がローカルで成功するか
2. `package.json` にビルドスクリプトがあるか
3. GitHub にコードがプッシュされているか

エラーメッセージをよく読んで、不明な場合は調べてください。

### Q4: 音声ファイルが再生されません
**A:** `public/audio/` フォルダに音声ファイルを配置し、GitHubにプッシュしてください。
ファイルが大きい場合は、Git LFS（Large File Storage）の使用を検討してください。

### Q5: 更新したのに反映されません
**A:** 以下を試してください：
1. ブラウザのキャッシュをクリア（Ctrl + Shift + R）
2. デプロイログを確認（VercelまたはNetlifyのダッシュボード）
3. GitHubにプッシュできているか確認

---

## デプロイ後のチェックリスト

デプロイが完了したら、以下を確認しましょう：

- [ ] ゲームが正常に起動する
- [ ] すべての難易度が選択できる
- [ ] オプション設定が動作する
- [ ] クレジット画面が表示される
- [ ] 言語切り替えが機能する
- [ ] スマホでも表示されるか確認
- [ ] URLを友達に共有してテスト

---

## まとめ

### 推奨手順（Vercel）

```bash
# 1. GitHubにコードをアップロード
git init
git add .
git commit -m "v1.0.0"
git remote add origin https://github.com/あなた/リポジトリ名.git
git push -u origin main

# 2. Vercelでデプロイ
npx vercel --prod
```

たったこれだけで、世界中に公開完了！🎉

### 参考リンク

- [Vercel公式ドキュメント](https://vercel.com/docs)
- [Netlify公式ドキュメント](https://docs.netlify.com/)
- [GitHub入門ガイド](https://docs.github.com/ja/get-started)

---

**質問があれば、いつでも聞いてください！**
