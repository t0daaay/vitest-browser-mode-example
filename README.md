# Vitest Browser Mode Example

このプロジェクトは、Vitest のブラウザモードを使用した Vue.js コンポーネントのテスト実装例です。実際のブラウザ環境でのテストと Happy DOM を使用したテストの両方の実装例を提供しています。

## 機能

- Vue 3 + TypeScript のプロジェクト構成
- Vitest を使用したコンポーネントテスト
  - ブラウザモード（Playwright）によるテスト
  - Happy DOM を使用したテスト
- スクロール操作を含む UI インタラクションのテスト実装例

## セットアップ

```bash
# 依存パッケージのインストール
pnpm install

# 開発サーバーの起動
pnpm dev
```

## テストの実行

```bash
# 全てのテストを実行
pnpm test

# Happy DOMを使用したテストのみ実行
pnpm test:happydom

# ヘッドレスブラウザでのテストを実行
pnpm test:headless-browser
```

## プロジェクト構成

- `src/App.vue` - メインの Vue コンポーネント
- `src/App.browser.spec.ts` - ブラウザモードでのテスト実装
- `src/App.happydom.spec.ts` - Happy DOM を使用したテスト実装
- `vitest.workspace.ts` - Vitest の設定ファイル

## 使用している主な技術

- Vue 3
- TypeScript
- Vite
- Vitest
- Playwright
- Happy DOM
- vitest-browser-vue
