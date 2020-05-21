///////Expressの読み込み///////
const express = require('express');
///////MySQLの読み込み///////
const mysql = require('mysql');
///////？///////
const app = express();
///////フォームの値を受け取れるようにする///////
app.use(express.urlencoded({extended: false}));
///////publicフォルダのファイルを読み込めるようにする///////
app.use(express.static('public'));
///////MySQLの接続情報///////
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ぱすわーど',
  database: 'list_app'
});
///////MySQLと接続が失敗したときのエラーを表示///////
connection.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    }
    console.log('success');
});
///////他、サンプルを見よ。///////


///////本体///////
app.post('/create', (req, res) => {
    connection.query(
      'insert into テーブル名 (カラム名,カラム名) values (値,値)',
      (error, results) => {
        console.log("メッセージ");
        res.render('リダイレクト.ejs');
      }
    );
});
  
app.get('/top=dashboard?', (req, res) => {});
app.get('/practice', (req, res) => {});
app.get('/select', (req, res) => {});
app.get('/score', (req, res) => {});
app.get('/about', (req, res) => {});
app.get('/setting', (req, res) => {});

///////localhost:3000でアクセス可能なサーバーを起動する。///////
app.listen(3000);