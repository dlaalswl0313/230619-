const http= require('http');
const fs =require('fs');
const url=require('url');
const template = require('./lib/template.js');
const dataParse = JSON.parse(fs.readFileSync('./lib/page.json','utf8'));

const app = http.createServer(function(request, response){
    const pageURL=request.url;
    const query = url.parse(pageURL,true).query;// 쿼리 스트링
    const path = url.parse(pageURL,true).pathname; //루트도메인 뒤 주소
    if(path.indexOf(".")==-1){
        var html='';
        if( path ==="/"){
            html = template.homeHTML(dataParse.main, dataParse.login_before);
        }
        if(path==='/login'){
            html = template.loginHTML(dataParse.main);
        }
        if(path==='/sign'){
            html = template.signupHTML(dataParse.main, dataParse.sign);
        }
        if(path==='/qs'){
            var qdata = JSON.parse(fs.readFileSync('./lib/question.json','utf8'));
            html = template.questionHTML(dataParse.main,dataParse,login_before,qdata);
        }
        response.writeHead(200);
        response.write(html);
        response.end();
    }
    if( path ==="/"){ //루트 경로 처리 로직, page.json 파일을 읽어와서 템플릿생성하고 응답
        fs.readFile('./lib/page.json', 'utf8',function(err,data){
            const dataParse = JSON.parse(data);
            const html = template.mainHTML(dataParse.main,dataParse.login_before);
            //console.log(html);
            response.writeHead(200);
            response.write(html);
            response.end();
        });
    }
   
    if(path.indexOf('.css')>-1){//css 파일 처리 로직, 요청된 css 파일을 읽어와서 응답
        var css_name=path.slice('/lib/'.length);
        fs.readFile('./lib/'+css_name,function(err,data){
            response.writeHead(200);
            response.write(data);
            response.end();
        });
    }
    if(path.indexOf('/image')>-1){//이미지 파일 처리 로직, 요청된 이미지 파일을 읽어와서 응답
        var img_name = path.slice('/image/'.length);
        fs.readFile('./image/'+img_name,function(err,data){
            response.writeHead(200); 
            response.write(data);
            response.end();
        });
    }
});
app.listen(3000);
 


