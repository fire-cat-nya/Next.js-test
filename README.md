# Amazon Clone - EC サイト

Next.js、TypeScript、Tailwind CSS を使用した Amazon クローン EC サイトです。

## 機能

- ✅ レスポンシブな UI/UX
- ✅ 商品一覧表示
- ✅ 商品詳細表示
- ✅ ショッピングカート
- ✅ ユーザー認証 (準備中)
- ✅ 決済システム (準備中)
- ✅ 注文履歴 (準備中)

## 技術スタック

- **フレームワーク**: Next.js 14
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アイコン**: Heroicons
- **UI コンポーネント**: Headless UI
- **認証**: NextAuth.js (準備中)
- **決済**: Stripe (準備中)
- **データベース**: Firebase (準備中)

## 開始方法

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認してください。

### 3. ビルド

```bash
npm run build
```

### 4. 本番サーバーの起動

```bash
npm start
```

## プロジェクト構成

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Banner.tsx
│   ├── Header.tsx
│   ├── Product.tsx
│   └── ProductFeed.tsx
```

## 今後の実装予定

- [ ] ユーザー認証システム
- [ ] ショッピングカート機能
- [ ] 商品検索機能
- [ ] Stripe 決済システム
- [ ] 注文履歴機能
- [ ] レビュー・評価システム
- [ ] 商品カテゴリフィルター
- [ ] モバイルアプリ対応

## ライセンス

MIT License
