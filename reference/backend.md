### Backend 環境構築

```bash
# backendディレクトリを作る
$ mkdir backend

# Dockerコンテナをビルドする
$ docker compose build

# Dockerコンテナを立ち上げる
$ docker compose up -d

# APPコンテナに入る
$ docker compose exec app bash

# laravelをインストールする
# ここでバージョンを指定できる(今回はlaravel8)
$ composer create-project --prefer-dist "laravel/laravel=8.*" .

# ファイルの権限設定を変更
$ chmod -R 777 storage

```

## コマンドリファレンス

```bash
# dockerコンテナ作成
$ docker compose build
# dockerコンテナ起動
$ docker compose up -d
# dockerコンテナ終了
$ docker compose down
# appコンテナへのログイン(Laravelコマンドを入力するコンテナ)
$ docker compose exec app bash
# dbコンテナへのログイン(DBを確認するコンテナ)
$ docker compose exec db bash
# コンテナから抜ける
$ exit
```
