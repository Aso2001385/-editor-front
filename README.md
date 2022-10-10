# NuxtVuetifyTemplate

## 環境構築

### 使用ツール

- [Volta](https://docs.volta.sh/guide/getting-started)を使用して Node.js と yarn をインストールする。

```bash
# インストール
$ curl https://get.volta.sh | bash
# Node.jsインストール
$ volta install node
# yarnインストール
$ volta install yarn
```

```bash
# 依存パッケージのインストール
$ yarn install

# ローカル起動
$ yarn dev
```

### コマンドリファレンス

```bash
# lintチェック コミット前に流してください
$ yarn run lint
# 上記でエラーになったら以下をながしてください
$ yarn run lintfix

# そのほかのコマンドはpackage.jsonのscriptを参照ください。
```
