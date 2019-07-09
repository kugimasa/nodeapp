const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const index_page = fs.readFileSync('./index.ejs', 'utf-8');

//サーバーを立ち上げgetFromClientを実行
var server = http.createServer(getFromClient);

//ポート番号を指定
server.listen(3000);
console.log('Server start!');

//getFromClient関数
function getFromClient(request,response){
    var content = ejs.render(index_page, {
        title:"Index",
        content:"これはテンプレです。",
    });
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(content);
    response.end();
}