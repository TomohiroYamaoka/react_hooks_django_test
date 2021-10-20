# react_hooks_django_test

## バックエンド
$python3 -m venv .venv  
$source .venv/bin/activate  
$touch requirements.txt  
$pip install -r requirements.txt  
$django-admin startproject config .  
$django-admin startapp アプリ名  
$python3 manage.py createsuperuser  


## フロントエンド
$npx create-react-app {プロジェクト名}   
(--temlate typexcriptは無駄なファイル入るから微妙)  
  
## react-dom(これ入れないとnpm startでレンダリングされない)  


## Huskyの追加(commitした時にコードを整形してくれる)  
$npm add -D husky lint-staged prettier   


## コード整形設定
.vscode/settings.jsonの追加  
npm i -D prettier  
https://zenn.dev/sprout2000/articles/9f20902d394aa2
https://qiita.com/soarflat/items/06377f3b96964964a65d

## 環境構築参考にしたサイト
https://qiita.com/sunnyG/items/05c2e9381d6ba2d9fccf  

## DjangoとReactの作成のやり方
https://zenn.dev/piyopanman/articles/6ccf6404a82727  

## Djangoの設定のやり方
https://qiita.com/baby-degu/items/51ab5c14ed6af23190e3  