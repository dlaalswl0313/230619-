/*//1. 전역변수와 지역변수의 차이
function select(){
    let a=10;
    a++; //11
    alert(a);
}


let a=10; //결과값이 계속 증가함, 매번 새롭게 만들어진다.
function select(){
    a++; //11 12 13 14....
    alert(a);
} 


//2. 두 개의 함수를 통해 전역과 지역변수를 비교해보자
function select(){
    var a=100;
    a++;
    return a; //select에 a에 저장된 값을 easy에서 쓰고싶다
}
function easy(){
    alert("출력:" +select());//select에 a에 저장된 값을 easy에서 쓰고싶다 ----지역변수
}

var a=100; // ----전역변수
function select(){ 
    a++; //3번 칸 클릭: 101 
}
function easy(){
    select();
    alert("출력:" +a); //4번 칸 클릭:102
}*/

//숫자나 연산자를 클릭하면 input태그에 출력시키기
//클릭한 숫자나 연산자가 input태그에 계속나오게 만들게 하려면 ?
let out=""; //전역변수<->지역변수는 계속 값이 새로 덮어지기 때문에 지역변수는 사용하면 안된다.

let op=""; //연산자를 저장할 전역변수, 전역으로 만드는 이유는 연산자 입력 후 두번째숫자를 입력하기위해서
           //연산자를 함수의 종료와 함께 날려버리면 안되기 때문이다.
let num1=0;//전역변수1 첫번째 피연산자
let num2=0;//전역변수2 두번쨰 피연산자 

 function select(val){ //value
    if(val==="="){// = 누르면 계산식 결과 나오도록
        out=calc(); //()안에 입력값을 넣을 필요가 없다-> 피연산자와 연산자를 전역변수(let num1, let num2)로 설정했기에 , 
                    //계산된 결과를 out에 반환해줌,이전의 식들은 초기화
    }else{ // { else괄호 시작 --> 그래야 = 클릭 시 적용이 되기 때문이지!
        out=out+val; //문자열+숫자 (전역변수 let out =""<-문자열)
    //alert(out.length);문자열 길이
    if(typeof(val)==="string"){ //val변수의 값이 문자인지 확인(typeof)
        op=val;                 //연산자(+-*/)를 클릭한 경우 비교한다. alert("확인")
    }
    /*
      클릭하기 전까지가 첫번째 피연산자이다.
      연산자 클릭한 이후부터는 두번째 피연산자 숫자가 들어와야 한다.
      연산자 이전과 이후가 구분이 되야 피연산자1과 피연산자2로 나눠줄 수 있다.
    */
    if(op===""){ //op가 공백이면 연산자를 클릭하기 전이다.
        num1 = Number(out);//첫번째 피연산자에 식이 저장되니까 
           //여기out은 숫자, 숫자로 변환이 잘 되었는지 확인하기위해 +1를 저장함->확인이 끝났으면 삭제
    }else{ //op변수가 공백이 아니면 두번째 피연산자가 입력될것이다.
        var index=out.indexOf(op)+1; //바꾸고자하는 문자열이 몇번째 있는지알아볼수있음 ,문자열따질때 0부터 시작이고 띄어쓰기(즉,공백)( , ) 도 포함임
        num2 = Number(out.slice(index));//위에서 찾은 문자열을 숫자로 변환해준다.
    }
  }  // } else 괄호 끝
    document.getElementById("result").value=out; 
}
 function calc(){ //계산식 return num1+num2->잘되나 먼저확인하고 switch문을 만든다
    switch(op){
        case"+": return num1=num1+num2;// 7+8 계산하고 나온 출력값에서 +4를 더해 결과값이 19가 나오도록
        case"*": return num1=num1*num2;
        case"/": return parseInt(num1=(num1/num2)); /* 나누기 연산은 소수점도 나오니까 정수만 나오게 하기위해선 parseInt로 변환해주면된다. */
        case"-": return num1=num1-num2;
    }  
}
 

