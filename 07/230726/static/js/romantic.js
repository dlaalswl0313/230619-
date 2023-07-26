window.addEventListener("keypress",function(){ 
    //enter 누르면 save 함수 동작
    if(e.keycode==13){
        save();
    }
});

function date_list(place, money, period, satisfaction){
    this.place=place;
    this.money=money;
    this.period=period;
    this.satisfaction=satisfaction;
}
//datelist 객체를 저장할 배열 객체 생성
const list = new Array();
function save(){
    var place=document.querySelector("#place");
    var money=document.getElementById("#money");
    var period=document.querySelector("#period");
    var sat=document.getElementById("#satisfaction");
    //input 태그 가져오기
}

window.onload=function(){

};

