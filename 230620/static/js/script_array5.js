let num = new Array();
//랜덤숫자이지만 중복이 없는 4개의 숫자를 띄우고, 같은 숫자는 2군데
function init(){ //초기화
    //중복없이 랜덤값 넣기
    num.push(Math.floor(Math.random()*10)+1); //첫번째 숫자는 들어왔다치고, 두번째부터 따져야함
    for(var i=1; i<=3; i++){
        var temp = Math.floor(Math.random()*10)+1; //랜덤값10개
        if(num.indexOf(temp)==-1){//중복하는 값이 없으면 출력하라 
            num.push(temp);
        }else{//중복이나올경우작동
            i--;//4개의 숫자를 다 찾기전에 종료하지 않기 위해 -1빼면서 증가하면 찾을때까지 동작가능함                   
        } 
    }
}

let num2 = new Array();

function nothing(){
    num2.push(Math.floor(Math.random()*8));
    for(var i=1; i<=7; i++){
        var temp = Math.floor(Math.random()*8); 
        if(num2.indexOf(temp)==-1){
            num2.push(temp);
        }else{
            i--;                
        } 
    }
}
function start(){
   init();//초기화 함수 실행
   nothing();
   let pic = document.getElementById("picture");
   for(var i=0; i<pic.length;i++){ 
     pic[num2[i]].innerHTML=num[i%4]; 
  } 
}


