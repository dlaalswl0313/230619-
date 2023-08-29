/* App.js 서버 실행하는 파일 

    page 구성 - 메인,회원가입,문의
        메인 - index.html
        회원가입 - signup.html
        문의 = question.html
        각 페이지의 내용은 간단하게만 작성(메인,회원가입,문의 페이지인지 구별되게만)
        
    url : 루트 도메인(루트 url) - http://localhost:3000 
        : 메인 - http://localhost:3000
        : 회원가입 - http://localhost:3000/sign
        : 문의 - http://localhost:3000/qs

       
*/
var http= require('http');
var fs = require('fs');
var tempUrl=require('url');

var app = http.createServer(function(request,response){
    var url = request.url;
    var query = tempUrl.parse(url,true).query;
    console.log(query.part);//로그인해야 query.part에 login_check가 뜬다, 아니면 undefined

    if(query.part ==undefined){
        if(request.url=='/')//url이 일치해야지만 열림
            url='/src/index.html';
        if(request.url=='/sign')
            url='/src/signup.html';
        if(request.url=='/qs')
            url='/src/question.html';
        if(request.url=='/login')
            url='/src/login.html';
    }else{
        var page=query.part;
        url='/src/'+page+'.html';
    }
        // if(request.url=='login_check')
        //     url='/src/login_check.html';

        if(request.url =='/favicon.ico'){
            return response.writeHead(404);
        }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname+url));
});
app.listen(3000);

