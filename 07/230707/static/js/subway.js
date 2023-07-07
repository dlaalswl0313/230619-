let station=new Array(40).fill(0);//40개의 공간을 0을 채운다.

const st_name=["까치산", "신정역", "양천구청", "신도림", "문래", "영등포역", "당산", "합정", "홍대입구", "신촌",
"이대", "아현", "충청로", "시청", "을지로역", "을지로3가", "을지로4가", "동대문역", "신당", "상왕십리",
"왕십리", "한양대", "뚝섬", "성수", "건대입구", "구의", "강변", "잠실나루", "잠실", "잠실시내",
"종합운동장역", "삼성", "선릉", "역삼", "강남", "교대", "서초", "방배", "사당", "낙성대"];

window.onload=function(){
    map_draw();//지도의 최대너비 1000px, 1-line : 100px    
}
function map_draw(){ //지도 그리기
    var map=document.querySelector("#map"); //$("map")::jquery
    var out=""; 
    //div=160개 필요 , 한 역당 3개씩 ->공간div 개수 포함, 40개의 역이니 40번 반복!
    for(var i=0; i<station.length; i++){
        out += "<div class='station'>";
        out += "<div class='train'><i class='fa-solid fa-train'></i></div>";//기차
        out += "<div class='mark'><div class='rail'></div>"+
        "<span class='stop'><i class='fa-regular fa-square'></i></span>"+
        "</div>";
        out += "<div class='name'></div>"+st_name[i]+"</div></div>";    
    }
    map.innerHTML=out;
}