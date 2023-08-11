//시간의 흐름에 따른 그래프는 산전도 그래프 (대전시 총 인구 != 대전시 인구 변화)
let data=[]; // json 데이터 저장할 배열 
let tmp_data=new Object(); // 월별 기온 데이터 저장학 객체
let year=[]; //년도 저장할 배열
let color=[]; //년도별 색상

async function getData(){
    var temp = await fetch("./static/js/csvjson.json").then((res) => res.json());
    return temp;
}

$(async function(){
    data = await getData();
    //일별 데이터 -> 월별 데이터 뽑기
    var y= new Set();

    //어떤 것을 가장 빨리 찾아내는 방법은 그것이 아닌 다른 것을 찾기 시작하는 것이다.
    var oldDay={y:0,m:1,d:0};//이전 월이 몇월 몇일 인지 기억

    $.each(data,function(i,item){
        var date = item.날짜.split("-"); // 각 데이터의 날짜를 기준으로 분리 배열
        y.add(date[0]); // 년도 만 저장 
        keyIn(date);
        if( oldDay.m != Number(date[1]) ){ //월이 변경 되었을 경우
            tmp_data[oldDay.y][oldDay.m].평균기온 = tmp_data[oldDay.y][oldDay.m].평균기온/oldDay.d;
            tmp_data[oldDay.y][oldDay.m].최저기온 = tmp_data[oldDay.y][oldDay.m].최저기온/oldDay.d;
            tmp_data[oldDay.y][oldDay.m].최고기온 = tmp_data[oldDay.y][oldDay.m].최고기온/oldDay.d;

        }
        tmp_data[date[0]][Number(date[1])].평균기온 += item.평균기온c;
        tmp_data[date[0]][Number(date[1])].최저기온 += item.최저기온c;
        tmp_data[date[0]][Number(date[1])].최고기온 += item.최고기온c;
        oldDay.y=date[0];
        oldDay.m=Number(date[1]);
        oldDay.d=Number(date[2]);
    });
    year = Array.from(y);
    //년도별 색상 생성
    $.each(year,function(i,y){
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        color.push("rgb("+r+","+g+","+b+")"); 
    });
        //console.log(Number(data[0].날짜.split("-")[1]) == 1); //1월달이냐아니냐 ,true 
        console.log(tmp_data);
        //그래프 그리기 
        draw("spring",[3,4,5]);
        draw("summer",[6,7,8]);
        draw("fall",[9,10,11]);
        draw("winter",[12,1,2]);
    });
    function draw(id,month){ // 각 계절 마다 월에 맞춰서 캔버스에 그리기 
       var ctx = $("#"+id)[0].getContext("2d");
       //범례
       make_legend(id,ctx);
       //월 출력
       print_Month(ctx,month);
       draw_axis(ctx,month[0]);
       draw_data(ctx,month);
    }
    function draw_data(ctx,month){
        
    }
    function draw_axis(ctx,month){
        ctx.moveTo(150,120);
        ctx.lineTo(800,120);
        ctx.stroke();
        var n = month==3? -1 :  month==6? 20 :month==9?20:-7;
        for(var i=0; i<13; i++){
            ctx.moveTo(150*50*i,120);
            ctx.lineTo(150*50*i,120);
            ctx.stroke();
            ctx.font="10px Airal";
            ctx.fillText(n,147+50*i,139);
            n++
        }
    }
    function print_Month(ctx,month){
        $.each(month,function(i,m){
            ctx.font="20px Airal";
            ctx.fillText(m+"월",50,150+100*i);
        });
    }
    function make_legend(id,ctx){
        //제목
        ctx.font="20px Arial";
        ctx.fillText(id,100,30);
        var yp=10, x=0;
        for(var i=0; i<year.length; i++){
            if(i == parseInt(year.length/2)){ yp=35; x=0; }
            ctx.beginPath();
            ctx.arc(200+50*x,yp, 3, 0, 2*Math.PI);
            ctx.fillStyle=color[i];
            ctx.fill();
            ctx.font="10px Airal";
            ctx.fillStyle="#000";
            ctx.fillText(year[i]+"년",210+50*x ,yp+3);
            x++;
        }
    }
    function keyIn(날짜){
            if( ! (날짜[0] in tmp_data) ) { // tmp_data 객체에 해당 년도가 키로 존재 하냐?
                tmp_data[날짜[0]]=new Object();
                for(var i=1; i<=12; i++){
                    tmp_data[날짜[0]][i]={
                        평균기온:0,
                        최저기온:0,
                        최고기온:0
                }
            } 
        }
    }


