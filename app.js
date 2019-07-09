const http = require('http');
const fs = require('fs');

//サーバーを立ち上げgetFromClientを実行
var server = http.createServer(getFromClient);

//ポート番号を指定
server.listen(3000);
console.log('Server start!');

//getFromClient関数
function getFromClient(req,res){
    request = req;
    response = res;
    fs.readFile('./index.html', 'UTF-8', 
        (error, data)=>{
            var content = data.
                replace(/dummy_title/g, 'タイトルです').
                replace(/dummy_content/g, 'これがコンテンツです。');

            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(content);
            response.end();
        }
    );
}