/*
    객체란 무엇인가?
    .
    객체는 향선이다.
    객체는 수상이다.
    객체는 선은이다.
    객체는 량선이 핸드폰이다.
    객체는 수상 아이폰이다.
    .
    객체는 무엇이든지 객체일 수 있다. 
    .
    향선이라는 객체는 이름이라는 속성의 값이 김향선이고,
    나이라는 속성의 값이 33이고, 성별이라는 속성이 남자일 수 있다.
    .
    객체1 (커피)
    속성>>
        이름 : 아메리카노 
        원두 : 케냐 
        용량 : 1L

    객체2 (커피)
    속성>>
        이름 : 콜드브루
        원두 : 콜롬비아
        용량 : Venti

    객체3 (사람)
    속성>>
        이름 : 민상철
        나이 : 35살

    객체4 (사람)
    속성>>
        이름 : 송선
        나이 : 20살 

    객체5 (div) 속성>> #idt , color : pink , width:100px, position: absolute
    객체6 (div) 속성>> #ide , color : pink , width:100px, position: fixed

    Q : div 객체 : class1, color: blue == div 객체 : class1, color: blue 
        객체 두 개가 같은 경우?
    A : 같은 값을 가진 객체여도 다른 객체라고 본다. 이런 경우 배열로 들어간다.
*/

/*객체를 만드는 여러가지 방법 >> 1. let 객체이름 = new Object() , 객체.속성="값"*/
let 선행 = new Object(); //객체생성
선행.나이=33; //선행이라는 객체에 나이라는 속성과 값으로 33 저장
선행.이름="밧선행"; //선행이라는 객체에 이름이라는 속성과 값(밧선행) 저장
선행.키="159"; //선행이라는 객체에 키라는 속성과 값으로 159 저장
선행.몸무게="50"; 
선행.시력="1.0";

let pen = new Object();
pen.name="삼색볼펜"; 
pen.color="red,blue,black";
pen.make="korea";
pen.company="함수";

window.onload=function(){
   document.write(pen.name);
   document.write(pen.color.split(",")); 
   //pen의 색깔을 보고 싶음
   //split(",") 3가지 색이니까. ""기준으로 분리해라 
};

/*객체를 만드는 여러가지 방법 >> 2. function 함수생성방법을 이용하여 객체를 만든다. */
function person(name,age,addr){ //생성자 함수 ,정의(설계)
    this.name=name; 
    this.age=age;
    this.addr=addr;
}
//호출
const p = new Array(); 
p.push(new person("신상수",27,"동구"));
p.push(new person("송선",37,"서구"));
p.push(new person("윤상",17,"서구"));

// let p1 = new person("신상수",27,"동구");//객체생성
// let p2 = new person("송선",37,"서구");//객체생성
// let p3 = new person("윤상",17,"서구");//객체생성

window.onload=function(){
    // document.write(p1.name);
    // document.write(p2.name);
    // document.write(p3.name);
    document.write(p[0].name);
    document.write(p[1].name);
}
/*객체를 만드는 여러가지 방법 >> 3. */
const baby={
    firstname : "선",
    lastname: "차훈",
    age: 8
};

/*
    함수 ---> 메서드
    함수 ---> 독립적으로 실행되는 코드의 집합체
    메서드 ---> 객체에 구속되어 객체에 의해 실행되는 코드의 집합체
*/

//익명함수
var func = function(){
    alert("나는 익명함수야");
}
func(); //func => (alert(););

function person(name,age,addr){ //생성자 함수 ,정의(설계),모든 객체에 생성된다.
    this.name=name; 
    this.age=age;
    this.addr=addr;
    this.output=function(){ //모든 객체에 생성된다.
        document.write("나는 익명함수 출력값");
    }
}
window.onload=function(){
    document.write(p[0].name);
    document.write(p[1].name);
    p[0].output();
}