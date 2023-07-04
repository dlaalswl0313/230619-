/* 
 4개의 기차가 운영되야하고, 
 화면에 현재 지하철의 위치를 표시한다. 
 3초에 한번씩 현재 지하철 위치를 표시한다.
 지하철모양을 누르면 현재 위치 정보가 화면에 나와야한다. 
 역을 클릭하면 가장 가까운 지하철이 몇 정거장에 있는지 
*/

const station = ["까치산", "신정네거리", "양천구청", "신도림", "문래", "영등포구청", "당산", "합정", "홍대입구", "신촌",
  "이대", "아현", "충청로", "시청", "을지로입구", "을지로3가", "을지로4가", "동대문역사문화공원", "신당", "상왕십리",
  "왕십리", "한양대", "뚝섬", "성수", "건대입구", "구의", "강변", "잠실나루", "잠실", "잠실시내",
  "종합운동장", "삼성", "선릉", "역삼", "강남", "교대", "서초", "방배", "사당", "낙성대",
  "서울대입구", "봉천", "신림", "신대방", "구로디지털단지", "대림", "청량리", "회기", "광운대", "신내"];

const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
  "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40"];

// window.onload=function(){//디스플레이화면출력
//   var station = document.querySelectorAll(".info");
//   station[i].addEventListener("click",역이름); //td를 눌렀을때 역이름이 나오도록

//   var res=documnet.querySelector(".result");//결과창에 넣고싶다.
//   res.innerHTML=result();
// }
//지하철위치 3초마다 4개의 기차가 움직이는부분
var staystation=-1;
setInterval(function subwaylocation(){//지하철 위치
    var number=document.querySelectorAll(".info");
    staystation++;
    if (staystation>number.length) {
      staystation = 0;
    }
    for(var n=0; n<number.length; n++){
      if(n === staystation){
        number[n].style.background="red";
        number[n].style.color="white"; //여기만 남기고 실행하면 빨강색이 3번부터 40까지 3초씩색칠한다.
      }else if(){
        number[n].style.background="yellow";
        number[n].style.color="white";
      }
     }return;
},3000);//3초 뒤에 화면에 표시 되는데 ,4개의 색칸들을 움직이려면???

function 역이름(){
     //만약에 클릭했다면?->결과가 이게 나와야한다는 조건을 줘야겟지;;
     alert("수박주스");
}
function result(){
  var res1=document.getElementById("train1");
  res1.innerHTML="1호차의 현재위치는";
  var res2=document.getElementById("train2");
  res2.innerHTML="2호차의 현재위치는";
  var res3=document.getElementById("train3");
  res3.innerHTML="3호차의 현재위치는";
  var res4=document.getElementById("train4");
  res4.innerHTML="4호차의 현재위치는"; //여기에 위치정보를 넣는 함수이름넣으면 출력가능
}






