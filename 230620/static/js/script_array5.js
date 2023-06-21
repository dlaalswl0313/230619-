// let num = new Array();
// //랜덤숫자이지만 중복이 없는 4개의 숫자를 띄우고, 같은 숫자는 2군데
// function init(){ //초기화
//     //중복없이 랜덤값 넣기
//     num.push(Math.floor(Math.random()*10)+1); //첫번째 숫자는 들어왔다치고, 두번째부터 따져야함
//     for(var i=1; i<=3; i++){
//         var temp = Math.floor(Math.random()*10)+1; //랜덤값10개
//         if(num.indexOf(temp)==-1){//중복하는 값이 없으면 출력하라 
//             num.push(temp);
//         }else{//중복이나올경우작동
//             i--;//4개의 숫자를 다 찾기전에 종료하지 않기 위해 -1빼면서 증가하면 찾을때까지 동작가능함                   
//         } 
//     }
// }

// let num2 = new Array();

// function nothing(){
//     num2.push(Math.floor(Math.random()*8));
//     for(var i=1; i<=7; i++){
//         var temp = Math.floor(Math.random()*8); 
//         if(num2.indexOf(temp)==-1){ //문자열 비교해서 중복하는 값이 없으면 출력
//             num2.push(temp); //출력
//         }else{
//             i--;                
//         } 
//     }
// }
// function start(){
//
//   /* init();//초기화 함수 실행
//    nothing();
//    let pic = document.getElementById("picture");
//    for(var i=0; i<pic.length;i++){ 
//      pic[num2[i]].innerHTML=num[i%4]; //출력 } */
 
// }

// window.onload=function(){
//     init(); //초기화 함수 실행
//    let pic = document.getElementsByClassName("picture");
//    for( var i=0; i<pic.length; i++){
//         pic[i].addEventListener("click",start);
//         pic[i].innerHTML = num[i%4]  ; //출력
//     }
// }
// let num = new Array();
// let board=new Array();

// function init(){ //초기화
//     //중복없이 랜덤값 넣기
//     //indexOf를 이용해서 -1이 나오면 일치하는게 없다ㅏ.
//     //  즉 중복되는 숫자가 없다는 뜻이니까  배열에저장
//     num.push(Math.floor(Math.random()*10)+1 );
//     for(var i=1; i<=3; i++){
//         var temp = Math.floor(Math.random()*10)+1;
//         if ( num.indexOf(temp) == -1){
//             num.push(temp);
//         }else{
//             i--;
//         }
//     }

//     board.push(Math.floor(Math.random()*8) );
//     for(var i=1; i<=7; i++){
//         var temp = Math.floor(Math.random()*8);
//         if ( board.indexOf(temp) == -1){
//             board.push(temp);
//         }else{
//             i--;
//         }
//     }
    
// }

let num = new Array(); //화면에 표시되는 숫자 저장 배열
let board=new Array(); //숫자가 출력될 위치 저장 배열
let show=false; //start 버튼 클릭 유무-start 버튼을 누르면 기능이 작동하도록


function init(){ //초기화
    //중복없이 랜덤값 넣기
    //indexOf를 이용해서 -1이 나오면 일치하는게 없다ㅏ.
    //  즉 중복되는 숫자가 없다는 뜻이니까  배열에저장
    num.push(Math.floor(Math.random()*10)+1 );
    for(var i=1; i<=3; i++){
        var temp = Math.floor(Math.random()*10)+1;
        if ( num.indexOf(temp) == -1){
            num.push(temp);
        }else{
            i--;
        }
    }

    board.push(Math.floor(Math.random()*8) ); //board는 랜덤한 숫자가 들어오게 하는 부분 
    for(var i=1; i<=7; i++){ //8인 이유는 최대값이 7까지 나옴
        var temp = Math.floor(Math.random()*8);
        if ( board.indexOf(temp) == -1){
            board.push(temp);
        }else{
            i--;
        }
    }   
}
window.onload=function(){
    init(); //초기화 함수 실행
    //id가 start인 버튼 태그 가져오기
    let start = document.getElementById("start");
    //버튼 태그에 클릭 이벤트 등록하기(실행함수는 play 함수)->버튼을 클릭하기 전까지는 화면에 숫자가 보이지않음
    start.addEventListener("click",play);

   let pic = document.getElementsByClassName("picture");//클래스이름이picutre인것을 가져와서 
   for( var i=0; i<pic.length; i++){ //각각의 태그에 숫자를 넣어준다 
        pic[i].addEventListener("click",same_search);//board는 위치 지정
    }
}
function play(){ //버튼을 누르면 적용되는 함수 
    let pic = document.getElementsByClassName("back");
    for( var i=0; i<pic.length; i++){
        pic[board[i]].innerHTML = num[i%4];
    }
    setTimeout(function(){
        let pic = document.getElementsByClassName("back");
        for(var i=0; i<pic.length; i++){
            pic[i].style.display="none";//자바스크립트에서 스타일을 줄수있다.단, 모든걸 사용할수없다. -> 해당태그.style.display="문자열";
        }
        show = true; //start 버튼 클릭 했다는 의미 <->false 면 start 버튼을 클릭하지 않았다. 
     },2000);//2초 뒤, 한 번만 실행하라.
}
function  same_search(){ //칸을 눌러도 알림창이 뜨고, 숫자를 눌러도 알림창이 뜬다 , start 버튼을 누르면 알림창이 뜨지 않는다. 
    if(!show){ //show 변수가 false라면 not연산에 의해 true가 작동, show변수가 true라면 not연산에 의해 false가 작동한다.
        alert("start 버튼을 클릭해주세요.");
        return; //start 버튼을 클릭하지 않았으면 same_search함수를 실행시키지않는다.
    } 
}