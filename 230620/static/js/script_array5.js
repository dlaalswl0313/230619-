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

let show=false; //start 버튼 클릭 유무-> start 버튼을 누르면 기능이 작동하도록
let cmp_num=new Array();//1번 숫자와 그 다음 숫자를 클릭했을때 비교하기위한배열
let choice=new Array(); //클릭한 숫자가 서로 같지않을때 숫자가 사라지는데 알맞은 숫자도 함께 사라진다. 그걸 해결하려고 하는 변수임.(숫자가 출력될 위치 저장배열)
let end=0;   //4가 되면 게임 끝내기
let step=0; //클릭횟수제한을 위한 변수

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
      var count = document.getElementById("count");//클릭횟수제한표시
      count.innerText=0;//start버튼 누르면 클릭횟수적립시작
    }
    window.onload=function(){
    init(); //초기화 함수 실행
    //id가 start인 버튼 태그 가져오기
    let start = document.getElementById("start");
    //버튼 태그에 클릭 이벤트 등록하기(실행함수는 play 함수)->버튼을 클릭하기 전까지는 화면에 숫자가 보이지않음
    start.addEventListener("click",play);

    let pic = document.getElementsByClassName("picture");//클래스이름이picutre인것을 가져와서 
    for( var i=0; i<pic.length; i++){ //각각의 태그에 숫자를 넣어준다 
        pic[i].addEventListener("click",same_search);//board는 위치 지정, td객체에 클릭을 하면 same_search 함수 실행하라.
        }
    }
    function play(){ //버튼을 누르면 적용되는 함수 
    let pic = document.getElementsByClassName("back");
    for( var i=0; i<pic.length; i++){
        pic[board[i]].innerHTML = num[i%4];//pic1
    }
    setTimeout(function(){
        let pic = document.getElementsByClassName("back");//숫자를 숨겨준다
        for(var i=0; i<pic.length; i++){
            pic[i].style.display="none";//자바스크립트에서 스타일을 줄수있다. 단, 모든걸 사용 할 수 없다. -> 해당태그.style.display="문자열";
            //선택한 숫자 모두 화면에 표시하지 말아라.
        }
        show = true; //start 버튼 클릭 했다는 의미 <->false 면 start 버튼을 클릭하지 않았다. 
      },2000);//2초 뒤, 한 번만 실행하라.
    }
    function  same_search(){ //칸을 눌러도 알림창이 뜨고, 숫자를 눌러도 알림창이 뜬다 , 그러나 start 버튼을 누르면 알림창이 뜨지 않는다. 
    if(!show){ //show 변수가 false라면 not연산에 의해 true가 작동, show변수가 true라면 not연산에 의해 false가 작동한다.
        alert("start 버튼을 클릭해주세요."); //show함수로 인해 버튼이 눌렀는지 아닌지 확인가능
        return; //start 버튼을 클릭하지 않았으면 same_search함수를 실행시키지않는다.
    }
    //클릭횟수 증가시키기
    if(step == 20){//20번 클릭하면 더 이상 진행불가
        alert("다음기회에 도전하세요");
        show=false;//show 변수가 false라면 not연산에 의해 true가 작동, show변수가 true라면 not연산에 의해 false가 작동한다. 즉, 동작하지않게하기위해
        return;
    }
    var count = document.getElementById("count");
    count.innerText = ++step;
   
    /*
        this.style.background="red"; td를 클릭하면 칸 색이 빨강으로 변한다. 
        getElementById, getElementsClassName 등을 사용하면, 태그의 객체라는 것이 반환된다. 
        태그의 객체를 변수에 담아서 사용해왔다. 
        자바스크립트에서는 html태그를 element 요소 또는 객체라고 한다. 
        객체를 표현하는 방법 중에 자기 자신을 의미하는 this가 있다.
        same_search함수를 실행 시킨건 td태그이다.
        즉 td라는 객체에 의해 same_search함수가 실행 된 것이다. 
        same_search 함수 안에서 this(자기자신)이라고 사용하면 same_search함수를 실행시킨 td태그를 의미한다.
    */
    /*
     자식태그 가져오는 방법
      children -모든 자식태그를 htmlcollection배열로 가져온다.
      childnodes - 모든 자식태그를 nodeList의 배열로 가져온다.
      firstChild - 첫번째 자식 태그
      lastChild  - 마지막 자식 태그
    */  
    //td안에있는 span 태그를 제어해야한다. td 태그의 자식은 span이다.
    //var child = this.firstChild;자바스크립트에서 자식을 데려오는 방법
    
    var child =this.children[0]; //결과값 [object NodeList], td태그(this)밑에 있는 모든 자식들을 배열로 저장한다. td의 첫번째 자식은 0번 인덱스
    child.style.display="inline";//var child =this.childNodes[0]->결과값[object HTMLSpanElement]\var child = this.firstChild->결과값 [object HTMLSpanElement]
    //alert(child.innerText); 숫자 비교해서 맞추기 \첫번째 선택한 숫자와 그 다음에 선택한 숫자와 비교를 해야하니 숫자들을 저장해야한다
    
    let span = document.getElementsByClassName("back");//숫자가 같지 않은 경우 숫자를 숨겨준다
        for(var i=0; i<span.length; i++){ //모든 숫자가 삭제되지 않게하기위함
            if(span[i] === child){ //각각의 태그마다 고유한 명칭을 가짐 그러니 서로 비교가 가능하다
                choice.push(i); //클릭한 td의 span태그 인덱스를 배열에 저장한다. 
            }
        }
    cmp_num.push(parseInt(child.innerText)); //배열에 숫자 2개가 저장되어있다면 비교, 클릭한 숫자 배열에 저장
    
    if(cmp_num.length == 2){
        if(cmp_num[0] == cmp_num[1]){
        cmp_num = new Array();//숫자가 같은 것도 배열초기화
        choice = new Array();//같은 숫자 나와도 초기화
        end++; //두 개 비교해서 같으면 end 변수 1씩 증가
     }else{ 
        setTimeout(function(){
         cmp_num = new Array();//숫자가 달라도 배열초기화
         let pic = document.getElementsByClassName("back");//숫자가 같지 않은 경우 숫자를 숨겨준다
         for(var i=0; i<choice.length; i++){
            pic[choice[i]].style.display="none"; //index=choice에 있는걸 없애라.
         }
         choice= new Array();
       },500); //0.5s,한 번 실행
     }                                  
   }
   if(end==4){
     alert("게임 종료");
     show=false;
   }
}