const http= require('http');
const fs =require('fs');
const url=require('url');
const template = require('./lib/template.js');

const app = http.createServer(function(request, response){
    const pageURL=request.url;
    const query = url.parse(pageURL,true).query;// 쿼리 스트링
    const path = url.parse(pageURL,true).pathname; //루트도메인 뒤 주소

    if( path ==="/"){
        fs.readFileSync('./lib/page.json', 'utf8',function(){
            const dataParse = JSON.parse(data);
            const html = template.homeHTML(dataParse.main);
            console.log(html);
            response.writeHead(200);
            response.write(html);
            response.end();
        });
    }
    if(path.indexOf('.css')>-1){
        var css_name=path.slice('/lib/'.length);
        fs.readFile('./lib/'+css_name,function(){
            response.writeHead(200);
            response.write(data);
            response.end();
        });
    }
    if(path.indexOf('/image')>-1){
        var img_name = path.slice('/image/'.length);
        fs.readFile('./image/'+img_name,function(){
            response.writeHead(200);
            response.write(data);
            response.end();
        });
    }
});
app.listen(3000);