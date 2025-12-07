# クレジット追加ガイド

このファイルでは、ゲームにクレジット情報を追加する手順を説明します。

## クレジット情報の追加方法

クレジット情報は `src/game/credits.ts` ファイルで管理されています。

### 1. ファイルの場所

```
src/game/credits.ts
```

### 2. ファイルの構造

このファイルには以下の内容が含まれています：

```typescript
export interface CreditItem {
    name: string;        // クレジット対象の名前
    url?: string;        // （オプション）リンク先URL
    description?: string // （オプション）説明文
}

export interface CreditSection {
    key: 'music' | 'sfx' | 'programming' | 'design' | 'specialThanks';
    items: CreditItem[];
}

export const CREDITS_DATA: CreditSection[] = [
    // ここにクレジット情報を追加
];
```

### 3. クレジットを追加する手順

#### ステップ 1: `src/game/credits.ts` を開く

エディタで `src/game/credits.ts` ファイルを開きます。

#### ステップ 2: 適切なセクションを見つけるか、新規作成する

既存のセクション：
- `music` - 音楽
- `sfx` - 効果音
- `programming` - プログラミング
- `design` - デザイン
- `specialThanks` - スペシャルサンクス

#### ステップ 3: クレジット情報を追加する

**例1: 既存のセクションにクレジットを追加**

```typescript
export const CREDITS_DATA: CreditSection[] = [
    {
        key: 'music',
        items: [
            { name: '魔王魂', url: 'https://maou.audio/' },
            // 新しいクレジットをここに追加
            { name: '新しいアーティスト', url: 'https://example.com' }
        ]
    },
    // ...
];
```

**例2: 新しいセクションを追加**

まず、`CreditSection` の `key` 型に新しいキーを追加：

```typescript
export interface CreditSection {
    key: 'music' | 'sfx' | 'programming' | 'design' | 'specialThanks' | 'newCategory';
    items: CreditItem[];
}
```

次に、`src/game/constants.ts` の言語リソースにセクション名を追加：

```typescript
// constants.ts の ja セクション
sections: {
    music: '音楽',
    sfx: '効果音',
    programming: 'プログラミング',
    design: 'デザイン',
    specialThanks: 'スペシャルサンクス',
    newCategory: '新しいカテゴリ', // 追加
},

// constants.ts の en セクション
sections: {
    music: 'MUSIC',
    sfx: 'SOUND EFFECTS',
    programming: 'PROGRAMMING',
    design: 'DESIGN',
    specialThanks: 'SPECIAL THANKS',
    newCategory: 'NEW CATEGORY', // 追加
},
```

最後に、`CREDITS_DATA` に新しいセクションを追加：

```typescript
export const CREDITS_DATA: CreditSection[] = [
    // 既存のセクション...
    {
        key: 'newCategory',
        items: [
            { name: 'クレジット名', url: 'https://example.com', description: '説明文（オプション）' }
        ]
    }
];
```

### 4. 注意事項

- **name**: 必須。クレジット対象の名前を記載してください。
- **url**: オプション。URLを指定すると、クレジット画面でリンクとして表示されます。
- **description**: オプション。追加の説明が必要な場合に使用します。

### 5. 確認

ファイルを保存後、ゲームのタイトル画面から「クレジット」ボタンをクリックして、追加した情報が正しく表示されるか確認してください。

## トラブルシューティング

### クレジットが表示されない

1. ファイルの保存を確認
2. ブラウザをリロード（Ctrl+R または Cmd+R）
3. TypeScriptのコンパイルエラーがないか確認

### リンクが機能しない

- `url` プロパティが正しく記載されているか確認
- URLが `https://` または `http://` で始まっているか確認

## 現在のクレジット情報

現在登録されているクレジット：

- **音楽・効果音**: 魔王魂 (https://maou.audio/)

---

以上がクレジット追加ガイドです。質問がある場合は、開発者に問い合わせてください。
