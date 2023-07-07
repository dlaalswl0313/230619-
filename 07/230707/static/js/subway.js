let station=new Array(40).fill(0);
//40개의 공간을 0을 채운다. 
//몇번째기차가왔는지표시 , 1번 차량은 1, 2번은 2, 3번은 3, 4번은 4__station 배열에 표기한다.

const st_name=["상수역","은선역","예림역","향숙역","영주역","선양역",
"상준역","승겹역","승겸역","수호역","민지역","태균역","길원역","철환역",
"유성온천역","중앙로역","서대전역","대전역","판암역","용문역","시청역",
"정부청사역","현충원역","탄방역","갈마역","용산역","오룡역","부산역",
"대구역", "조치원역","세종역","청주역","신탄진역","중리동역","반석역",
"월컵역","지족역","계림역","천안역","대동역"];//이름출력배열

const train=[0,0,0,0];//기차 4대
const train_color=["","t-orange","t-red","t-blue","t-pink"];//css에서 사용한 기차4대 이름

function train_active(){//역의배치는 index 순서대로 이동하게만든다.
    station[0]=1;//1번기차
    map_draw();

    setInterval(function(){
        map_draw();
    },3000);

    setInterval(
        function(){//기차4대가 움직임, 점점 증가한다. 
            station[Math.abs(train[0]++)]=0; 
            station[Math.abs(train[0])]=1;
            //map_draw();
            if(train[0]==39){
                    station[Math.abs(train[0])]=0;
                    //map_draw();
                    setTimeout(function(){
                        train[0]=-40;//기차가 거꾸로 올라오도록
                    },400);
            }
        }
    ,400); 
    setTimeout(train2,1000);
    setTimeout(train3,2500);
    setTimeout(train4,3500);
} 
function train2(){
    station[0]=2;
    setInterval(
        function(){
            station[Math.abs(train[1]++)]=0;
            station[Math.abs(train[1])]=2;
            if(train[1]==39){ // 마지막역 도착
                station[Math.abs(train[1])]=0;
                setTimeout(function(){
                    train[1]=-40;
                },400);
            }
        }
    ,400);
}
function train3(){
    station[0]=3;
    setInterval(
        function(){
            station[Math.abs(train[2]++)]=0;
            station[Math.abs(train[2])]=3;
            if(train[2]==39){ // 마지막역 도착
                station[Math.abs(train[2])]=0;
                setTimeout(function(){
                    train[2]=-40;
                },400);
            }
        }
    ,400);
}
function train4(){
    station[0]=4;
    setInterval(
        function(){
            station[Math.abs(train[3]++)]=0;
            station[Math.abs(train[3])]=4;
            if(train[3]==39){ // 마지막역 도착
                station[Math.abs(train[3])]=0;
                setTimeout(function(){
                    train[3]=-40;
                },400);
            }
        }
    ,400);
}
window.onload=function(){
    //station[0]=1;1번차량 잘들어갔는지 실험용 station[인덱스숫자]넣으면 그자리에 아이콘나옴, 시간함수는 주석처리하고
    map_draw();//지도의 최대너비 1000px, 1-line : 100px    
    train_active();//지하철 차량 움직이기
}
function info(idx){
   // alert("idx");역 누르면 알림창 등장
   var id = document.getElementById("bg");
   bg.innerHTML="<div class='info'>"+
   "<div><b>의 역 명: "+st_name[idx]+"</b></div>"+
   "<div><b>진입차량 : "+idx+"번차량</b></div>"+
   "</div>"; 
    
 }
function map_draw(){ //지도 그리기
    var map=document.querySelector("#map"); //$("map")::jquery
    var out=""; 
    //div=160개 필요 , 한 역당 3개씩 ->공간div 개수 포함, 40개의 역이니 40번 반복! for(var i=0; i<station.length; i++)
    for(var line=0; line<4; line++){ 
        var t=line*10; //3번째 줄 시작 인덱스 20
        if(line%2!=0){ //t의 값이 마지막인덱스 기준, 1번째 줄(9) t<10 2번째 줄(10) t>9 3번째 줄(20) t<30 4번째 줄(30) t>20 
            t+=9; 
             while(t>=line*10) //1,2번 줄 , st_name[19]이 두번째줄 1번으로 
             out += make(t--);
        }else{
            while(t<=line*10+9) //3,4번 줄, st_name[29]가 세번째줄 1번으로 
                out += make(t++);
        }
    }
    map.innerHTML=out;
}
function make(t){//매개변수 t=0~39
    var w95="";
    if((t%10==9 || t%10==0) && t!=39)
        w95="w95";
    if(t==9 || t==29||t==19)
        w95+="w95-top";    
    if(t==10 || t==30||t==20)
        w95+="w95-bottom"; 
    if(t==19 || t==20)
        w95+="-right";  

        var out="";
        out += "<div class='station'>";
        out += "<div class='train "+(train_color[station[t]])+"'>  <i class='fa-solid fa-train'></i>  </div>";
        out += "<div class='mark' onclick='info("+t+")'><div class='rail "+w95+"'></div>"+
                "<span class='stop '><i class='fa-regular fa-square "+(train_color[station[t]])+"'></i></span>";
         out += "</div>";
        if(t%10==9 && t!=39)
            out+="<div class='rad "+(t==19?'right':'left')+"'></div>";
        out += "<div class='name'>" +st_name[t]+ "</div></div>";
        return out;
 }
 
