/**
 * *웹 서버에 html 파일 서비스하기
 */

var http = require("http");
var fs = require('fs'); //파일 읽기, 쓰기 등을 할 수 있는 모듈

// 404 error message: 페이지 오류가 발생했을 때,
function send404Message(response) {
    response.writeHead(404, { "content-Type": "text/plain" }); //글자 출력
    response.write("404 Error...");
    response.end();
}

// 200 Okay : 정상적인 요청
function onRequest(request, response) {
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, { "Content-Type": "text/html" }); //웹페이지 출력
        fs.createReadStream("./index.html").pipe(response); //같은 디렉토리에 있는 index.html를  response함
    } else {
        //파일이 존재하지 않을 때,
        send404Message(response);
    }
}

http.createServer(onRequest).listen(8080);
console.log("Server Created...");