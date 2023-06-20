/* 
func.js 
 >함수의 형태 4가지<
    
    -입력(인자인수, 매개변수)
    : 함수의 내용이 실행되기 위해 꼭 필요한 값을 함수 외부로부터 받는 것, 
      매개변수function sum(e)-()안에 들어오는 것, 여러개가 들어올수 잇다.function sum(a,b,c,d)
    
    -출력
    : 함수에서 생성된 값을 다른 함수나 다른 곳에 보내고자 할 경우 사용된다.
      return을 사용해서 밖으로 내보낸다. 
      function sum(a,b){ } 매개변수2 입력되는 함수도 2

 1. 입력과 출력이 없는 형태 
 2. 입력은 있고 출력은 없는 형태
 3. 입력은 없고 출력만 있는 형태
 4. 입력과 출력이 있는 형태
*/ 

//더하기 버튼 
function sum(a,b){ //a=10 b =20

    var result= document.getElementById("sum_result");
    result.innerHTML=a+b; //입력은 있고 출력은 없는 상태
    /*innnerHTML : HTML 형식으로 적용 
      innterText : 글씨형태로 적용 화면에 명령어 글자가 그대로 출력
    */
}

//텍스트 창 2개, + 버튼하나
function plus(){
    var n1= document.getElementById("num1"); //55
    var n2=document.getElementById("num2"); //45
    var res = document.getElementById("result2");//출력화면에 나오게 하기 

    res.innerHTML = Number(n1.value) + Number(n2.value);
     //res.innerHTML = Number(n1.value) + parseInt(n2.value);

    /*res.innerHTML = n1.value + n2.value; 
    문자열 + 문자열이어서 결과값 : 5545 
    res.innerHTML = parseInt(n1.value) + Number(n2.value); 
    결과값 : 100, 문자열을 숫자로 사용할 수 있게 변경해준다
    
     위에 처럼 하기 싫다면 input의 타입을 number로 바꾼다.
    다만, html에서 input type="number"시 
    문자입력만 숫자이고 문자입력이 문자열로 안되게하기위한것일뿐
      
     res.innerHTML = Number(n1.value) + Number(n2.value)
    js 파일에서 결과값에 Number을 입력하면 parseInt를 안써도 가능하다.
     
    input 태그에 입력한 값을 자바스크립트로 가져오려면 value(값) 속성을 사용해야한다.
    모든 input태크에 값은 value에 저장되어있다.
    getElement를 통해서 input태그를 가져오고 가져온 input태그에서 value값을 뽑아낸다.  
    */
}
//나이 구하기
function myage(){ //tag를 가져와서 출력함
  var year=document.getElementById("birth_year").value; //여기서 값 속성생성
  var res= document.getElementById("age");

  res.innerHTML=2023-Number(year);
}
//국어,수학,음악 총점/평균 구하기
function score_calc(){ //본격 함수 쓰기
  var kor=document.getElementById("kor");//국어 점수 입력, 변수 설정 시 html과id동일해도 상관없다
  var mat=document.getElementById("mat");//수학 점수 입력
  var mus=document.getElementById("mus");//음악 점수 입력

  var res=document.getElementById("result3");//최종값출력

  //점수들을 입력 잘 했냐 안했냐
  if((kor.value=='') || !(kor.value>=0 && kor.value<=100)){ //입력값이 비어있다 "" '' 둘다 사용가능  비었냐 || 0~100 사이 값이냐
     alert("국어 점수를 입력해주세요."); //알림창 등장
     kor.focus();//알림창을 누르면 국어 점수 칸에 자동으로 커셔가 들어간다. >>단 원하는 값은 조건을 줘야함(||)
     return; 
     /* return
     1. 함수에 있는 값을 함수 밖으로 내보낼때 사용
     2. 함수 안에서 실행하면, 해당 함수를 종료하고 값을 보낼때 사용
     */
  }else if(mat.value==''){
    alert("수학 점수를 입력해주세요.");
    mat.focus();
    return;
  }else if(mus.value==''){ 
    alert("음악 점수를 입력해주세요.");
    mus.focus();
    return;
  }
  var tot=total(Number(kor.value),Number(mat.value),Number(mus.value)); 
  //total 함수 호출(실행), 매개변수3(국어,수학,음악)이니까 3개 값 넣기
  //total함수가 실행되는 자리로 돌아간다. 120
  var avg_val = avg(tot); //평균값구하기_총점(tot)을 알아야합니당 그래서 ()안에 tot입력, tot는 sum_result안에 들어감
  res.innerHTML="총점:"+tot+"평균:"+avg_val;
}
//점수들의 총점과 평균을 구하쟈
  //1. 총점을 구하자_함수내에서 다른 함수 호출 가능
function total(k,m,s){ //매개변수3 (국어,수학,음악)
  return(k+m+s);//score에게 return 뒤에 있는 값을 되돌려 줘야해 120
}
  //2.평균을 구하자
function avg(tot){ //tot는 avg.tot = score_calc.tot에 들어가있음
  return(tot/3);
}

/*문제1.소주 한 잔을 마시면 수명이 2분 단축된다.
어떤 사람이 소주를 매일 20년을 마셨다.
이 사람은 수명이 얼마나 단축이 되었는가?
input을 이용하여 하루에 몇 잔을 먹었는지 입력하여 단축 된 수명 출력하기
단, 단축된 수명은 총 몇분, 총 몇시간, 총 며칠인지 각각 출력*/

function my_minus_life(){
  var soju=document.getElementById("soju");
  var min = document.getElementById("minute");
  var hour = document.getElementById("hour");
  var day = document.getElementById("day");

  if( soju.value==''){
      alert("몇잔 마셨는지 입력하세요...");
      soju.focus();
      return;
  }
  var life = Number(soju.value) * 2 * 365 * 20;

  min.innerHTML= "단축수명 : "+life+"분";
  hour.innerHTML="단축수명 : "+(life/60)+"시간";
  day.innerHTML = "단축수명 : "+(life/60/24)+"일";
}

//주문하기
function my_order(){
   var main_menu = document.getElementById("night_snack");
   var side_menu = document.getElementById("side_menu");
   var alc = document.getElementById("alc");

   //출력앨리먼트
   var order_list = document.getElementById("order_result");  
  
   var out="";
   var temp=menu(main_menu.value);
   //메인메뉴 ,var temp=menu(족발)이렇게 컴퓨터는 인식->값출력 28000
   /*판매하지않는메뉴 ,temp에 저장되어있는 타입이 문자열이 아니면 판매하고있는 메뉴입력
     금액(숫자)이 return되고 판매하지않는 메뉴입력시 문자열이 return된다.
   */

  out +=  main_menu.value +" 금액 : "+temp+"원<br>";

  var temp1 = menu(side_menu.value);
  out += side_menu.value+" 금액 : "+temp1+"원<br>";
 
  var temp2 = menu(alc.value);
  out += alc.value+" 금액 : "+temp2+"원<br>";
  
   if( typeof(temp) === 'string' || typeof(temp1)==='string' || typeof(temp2)=='string'){//메인메뉴칸에 메인메뉴에 없는 메뉴를 입력하고 알림창에서 확인을 누르면 내가 쓴 글자가 사라진다.
      alert("판매하지 않는 메뉴입니다.");
      main_menu.value=''; // <- 야식메뉴 input의 값이 지워진다.
      side_menu.value=''; // <- 사이드메뉴 input의 값이 지워진다.
      alc.value=''; // <- 주류메뉴 input의 값이 지워진다.
      main_menu.focus();
      return;
   }
   order_list.innerHTML = out;
}

/*switch문은 if문과 다르게 조건식이 참이냐 거짓이냐에 따라 동작하는 조건문이 아니다.
  switch문은 값을 넣어서 해당 값에 따라 동작하도록 선택 하는 문이다.
  지금 사용하는 vscode의 메뉴가 바로 switch문으로 만들어진 것이다. 
  메뉴에서 내가 폴더열기를 선택하면 탐색창이 실행된다. 
  >>즉, 내가 선택한 메뉴에 따른 동작을 하는 것 
  switch문에서 동작할 내용 선택은 case로 만들어준다.
  여러 개의 case를 만들 수 있다.
    switch(10){ 10 들어있는 case를 선택해서 출력
      case 1: 1을 선택하면 동작할 내용
      case 5: 5를 선택하면 동작할 내용
      case 100: 100을 선택하면 동작할 내용
      case 10: 10을 선택하면 동작할 내용
    }
*/

function menu(name){ //name에 case에 쓴 단어들이 들어감
  var money=0;
    switch(name){
      case"족발":
        money=28000;break; /*switch case에서 break를 하지 않으면 밑에 있는 case도 실행된다. */
      case"반반치킨":
        money=22000;break;
      case"무뼈닭발":
        money=19000;break;
      case"페페로니피자":
        money=18000;break;
      case"짬뽕탕":
        money=18000;break; 
      case"포케":
        money=15000;break;
      case"감자튀김":
        money=3000;break;
      case"염통꼬치":
        money=4000;break;
      case"타코야끼":
        money=4000;break;
      case"치즈볼":
        money=5000;break;
      case"테라":
        money=4000;break;
      case"피치하이볼":
        money=8000;break;
      case "진로": 
        money=4000;break;
      case "새로주": 
        money=4000;break;
      case "카스": 
        money=4000;break;
      case "발렌타인30살": 
        money=1100000;break;
      case "시바스리갈": 
        money=59800;break;   
      default: //case에 없는 값 입력시 default가 실행된다.
          return "판매하지않는메뉴입니다.";             
    }
    return money;
}

