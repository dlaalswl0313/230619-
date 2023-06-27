/*
 무한루프가 아닌 시간을 이용해서 할거임
 (*)setTimeout() / SetInterval()
  
    setTimeout(실행할 함수, 시간(밀리세컨드)) 
    -지정한 시간 이후에 소스를 동작시킴(1번만 실행) 1000 = 1초
    setInterval(실행할 함수, 시간(밀리세컨드))
    -지정한 시간을 주기로 소스를 동작시킴 (예)3초에 1번 
*/
let game=0; //interval을 사용하기 위해 전역변수 설정함
function start(){
    document.getElementById("출력").innerHTML=""; //start 버튼 누르면 전에 했던 결과값을 지움
    game = setInterval( change_img , 100 );
    /*game 변수에는 Interval id가 저장된다.
    interval id는 setInterval 함수의 고유 이름이다. 
    interval id를 통해서 serInterval를 중지 시킬 수 있다.*/
}
let 전환=1; //start 버튼을 눌러야 전환

function change_img(){
    var 앞면 = "coin_front.png";
    var 뒷면 = "coin_back.png";
    var 이미지태그 = document.getElementById("오백원");

    if(전환==1){ //1 일때는 뒷면
        이미지태그.src="./static/image/"+뒷면;
        전환=0;
    }else{ //0 일때는 앞면
        이미지태그.src="./static/image/"+앞면;
        전환=1;
    }
}
function 결과(선택){ //선택 에 0 또는 1이 들어온다.
    clearInterval( game);//var game = setInterval(change_img, 100) 중지, let으로 전역변수를 만들어서ㅡ>여기서 사용하도록clearInterval(멈추고 싶은 함수이름)
    var 앞면 = "coin_front.png";
    var 뒷면 = "coin_back.png";
    var 이미지태그 = document.getElementById("오백원");

    if(전환==1){ //1 일때는 뒷면
        이미지태그.src="./static/image/"+뒷면;
    }else{ //0 일때는 앞면
        이미지태그.src="./static/image/"+앞면;   
    }
    if(선택==전환){//선택과 전환은 서로 비교해야한다, 맞춘거면 이미지가 멈춰야한다.
       document.getElementById("출력").innerHTML="정답";
    }
}
