const image=["노르웨이숲.jpg","뱅갈.jpg","아숏.jpg","터앙.jpg","코숏.jpg",
"스코티시폴드.jpg","브리티시숏.jpg","샴.jpg","먼치킨.jpg","렉돌.jpg","러시안블루.jpg",
"리트리버.jpg","비숑.jpg","사모.jpg","진도.jpg","허스키.jpg"];//이미지배열, 모든이미지를가지고있는기본배열-->일단16개

const kind=["노르웨이숲","뱅갈","아숏","터앙","코숏",
"스코티시폴드.","브리티시숏","샴","먼치킨","렉돌","러시안블루",
"리트리버","비숑","사모","진도","허스키"];//품종에대한명칭,이미지배열순서대로넣기, 이미지 경로가 이상한거같아 ....

let 토너먼트1=new Array();
let 토너먼트2=new Array(); //선택()
let 순서=new Array(); 
let round = 32; //현재 n강 인지 시작은 32강
let count=1;//현재 순서 , 처음은 1번

function 순서섞기(){
    for(var i=1;i<=round;i++){//이미지 랜덤
        var tmp=Math.floor(Math.random()*round);//let round = 32 니까 32장씩 섞임,인덱스활용이어서*
        if( 순서.indexOf(tmp) == -1){
            순서.push(tmp);
        }else{
            --i;
        }
    }
}
function 태그선택(id){
    return document.getElementById(id);//id=title
}
window.onload=function(){ //게임을 처음시작할것들만 넣어주기 처음로딩하고나온화면
    var title =태그선택("title");//타이틀 설정
    title.innerHTML=round+"강 "+count+"/"+(round/2);

    토너먼트1 = Array(round).fill().map((arr,i) => i);
    //이미지 배열에 있는걸 똑같이 복사하라.
    //토너먼트1 = image; 참조 복사 , fill()채우다

    순서섞기();
    show();
    var left=태그선택("left");
    var right=태그선택("right");
    left.addEventListener("click",선택);
    right.addEventListener("click",선택);
}
function final(id ,nid){//결승전에서 선택 시 최종 선택한 한 장만 등장
    var n =태그선택(id,nid);
    n.style.display="none";
    var 최종 = 태그선택(id);
    최종.style.width="100%";
    최종.style.height="100vw";
    
}
function 선택(){
    if(this==태그선택("left")){
        토너먼트2.push(토너먼트1[순서[count*2-2]]);//왼쪽 이미지 선택함
         
    }else{
        토너먼트2.push(토너먼트1[순서[count*2-1]]);//오른쪽 이미지 선택함
    }
    if(round==2){
        final("left","right");
        var title =태그선택("title");
        title.innerHTML="최종선택  ";
    }else{
        if(count==round/2){
            round= round/2; //
            count=0;
            순서=new Array();
            순서섞기();
            토너먼트1 = 토너먼트2.map((i)=>i);
            토너먼트2=new Array();
        }
        count++;
        var title =태그선택("title");
        title.innerHTML=round+"강  "+count+"/"+(round/2);
    }
    show();
}
function show(){
    var left=태그선택("leftimg");//leftimg,rightimg에 띄어주기
    var right=태그선택("rightimg");
    var leftText=태그선택("leftText");//사진과맞는이름등장
    var rightText=태그선택("rightText");
    
    left.src="./static/image/"+image[토너먼트1[순서[count*2-2]]];
    right.src="./static/image/"+image[토너먼트1[순서[count*2-1]]];
    leftText.innerHTML=kind[토너먼트1[순서[count*2-2]]];
    rightText.innerHTML=kind[토너먼트1[순서[count*2-1]]];
}

