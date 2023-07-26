window.addEventListener("keypress",function(e){ //엔터 누르면 save함수 동작
    if(e.keyCode==13){
        save();
    }
});


function date_list(place, money, period, satisfaction){
    this.place=place;
    this.money=money;
    this.period=period;
    this.satisfaction=satisfaction;
}
date_list.prototype.view=function(){
    return"<li><span class='place_vw'>"+this.place+"</span>"+
    "<span class='money_vw'>"+this.money+"</span>"+
    "<span class='period_vw'>"+this.period+"</span>"+
    "<span class='stf_vw'>"+this.satisfaction+"</span>"+
    "<b class='update'><i class='bi bi-wrench'></i></b>"+
    "<b class='del'><i class='bi bi-trash3'></i></b></li>";
}
//datelist 객체를 저장할 배열 객체 생성
const list = new Array();  // date_list 객체를 저장할 배열 객체 생성
function save(){
    var place=document.querySelector("#place");
    var money=document.getElementById("money");
    var period = document.querySelector("#period");
    var stf = document.querySelector("#satisfaction");
    //input 태그 객체로 가져오기
    if(value_check( [place,money,period] )) return;
    list.push( new date_list(place.value, money.value, period.value, stf.options[stf.selectedIndex].value ) );
    init( [place,money,period,stf] ); //input 초기화
    console.log(list); //콘솔에 저장됐는지
    //화면 출력
    screen_show();
}
function screen_show(){
    var ul=document.querySelector("#list");
    //for(var i=0; i<list.length; i++)
    var out="";
    for(var i in list){
        out += list[i].view();
    }
    ul.innerHTML=out;
}
function init(input){ // input을 초기화
    for(var i=0; i<input.length-1; i++){
        input[i].value='';
    } //input 태그의 value 비우기

    input[3].options[4].selected=true;  // 만족도 기본값 5 설정
    input[0].focus(); // 데이트장소 input에 마우스커서 위치하기
}

function value_check(input){ // input  값의 유효 확인
    const msg=["데이트 장소를 입력하세요","데이트비용을 입력하세요",
"연애가 처음인가요"]; // input에 미입력시 알림 멘트

    for(var i=0; i<input.length; i++){  
        if( input[i].value==''){ // 장소, 비용, 기간 순으로 미입력 여부 확인
            alert(msg[i]);
            input[i].focus(); // 미입력한 곳에 커서 위치하기
            return true;
        }
    }
    return false;   
}

window.onload=function(){

};
