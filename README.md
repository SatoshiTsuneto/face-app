### 実行環境: CentOS Linux release 7.5.1804

### このアプリケーションについて
- このアプリケーションは、ストリーミング映像とAmazon Rekognitionを用いて比較した画像をリアルタイムに表示することができます。
- 下記で準備したAPIに対して、S3上の画像名と比較結果の一致率を投げることで、APIが画像の取得と一致率の送信を行い、その結果サイト上に一致率と画像を表示してくれる。

### 使用するための準備
- Dockerのインストールをしておく。インストールの方法は、以下のコマンドで行える。   
`curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh`
- mjpg-streamerを起動しておく。無い場合は、[ここを参考](https://qiita.com/okaxaki/items/72226a0b0f5fab0ec9e9)に準備する。   
ポート番号、IDとパスワード等は、環境によって変わるので、その都度変更する。
- [このAPI](https://github.com/satotune/faceAPI)を起動しておく。無い場合は、クローンしてビルドする。   
APIのIPアドレスは、実行環境によって変わるので、その都度変更する。

### 起動方法
- docker build -t webserver .
- docker run -d -p 8080:80 webserver
