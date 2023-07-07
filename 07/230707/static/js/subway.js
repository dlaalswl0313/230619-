let station=new Array(40).fill(0);//40개의 공간을 0을 채운다.

const st_name=["까치산", "신정역", "양천구청", "신도림", "문래", "영등포역", "당산", "합정", "홍대입구", "신촌",
"이대", "아현", "충청로", "시청", "을지로역", "을지로3가", "을지로4가", "동대문역", "신당", "상왕십리",
"왕십리", "한양대", "뚝섬", "성수", "건대입구", "구의", "강변", "잠실나루", "잠실", "잠실시내",
"종합운동장역", "삼성", "선릉", "역삼", "강남", "교대", "서초", "방배", "사당", "낙성대"];

// const st_name=["상수역","은선역","예림역","향숙역","영주역","선양역",
// "상준역","승겹역","승겸역","수호역","민지역","태균역","길원역","철환역",
// "유성온천역","중앙로역","서대전역","대전역","판암역","용문역","시청역",
// "정부청사역","현충원역","탄방역","갈마역","용산역","오룡역","부산역",
// "대구역", "조치원역","세종역","청주역","신탄진역","중리동역","반석역",
// "월컵역","지족역","계림역","천안역","대동역"];

window.onload=function(){
    map_draw();//지도의 최대너비 1000px, 1-line : 100px    
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
function make(t){
    var w95="";
    if(t==0||t==10||1==19||t==20||t==29|t==30)
        w95='w95';
    var out="";
    out += "<div class='station'>";
    out += "<div class='train'><i class='fa-solid fa-train'></i></div>";//기차
    out += "<div class='mark'><div class='rail "+w95+"'></div>"+
           "<span class='stop'><i class='fa-regular fa-square'></i></span>";
    if(t%10==9 && t!=39)
        out+="<div class='rad"+(t==19?'right':'left')+"'></div>";     
    out +="</div>";
    out += "<div class='name'></div>"+st_name[t]+"</div></div>"; 
    return out;
}