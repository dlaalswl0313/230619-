/* 230614 과제 
 계림 카페 주문하기
 주문 내용은 음료명, 아이스 또는 핫, 사이즈 (m,l)
 음료하나만 주문이 아니라 여러 개 주문 내역이 나와야한다.
 (예) 아메리카노, 아이스,M-2000 , 수박주스,아이스 M-4500
 모든 함수에서 사용할 수 있는 변수를 생성하려면 함수 밖에 만들면 된다.
 var out="";
function my_order(){
    var cafe_menu = document.getElementById("cafe_menu");
    var cold_hot =document.getElementById("cold_hot");
    var size = document.getElementById("size");

    var order_list = document.getElementById("order_result");

   
    var temp=menu(cafe_menu.value); // 메뉴입력시 판매 하는 메뉴입력하면
    // 금액(숫자)이 return되고 , 판매하지않는 메뉴입력시 문자열이 return된다.
    
    out +=  cafe_menu.value +temp+"원<br>";

    var temp1 = menu(cold_hot.value);
    out += cold_hot.value +"<br>";

    var temp2 = menu(size.value);
    out += size.value +"<br>";
    
    if( typeof(temp) === 'string' || typeof(temp1)==='string' || typeof(temp2)=='string'){ //temp의 값 타입이 문자열이라면
        alert("확인하고 눌렀나요?");
        cafe_menu.value='';  
        cold_hot.value='';  
        size.value='';
        cafe_menu.focus();
        return;
    }
    order_list.innerHTML = out;    
}

function menu(name){  
    var money=0;
    switch(name){
        case "아메리카노": money=2000; break; 
        case "헤이즐넛아메리카노": money=2200;  break;
        case "바닐라라테": money=3200; break;
        case "카라멜마끼아또": money=3200; break;
        case "수박주스": money=3500; break;
        case "키위주스": money=3500; break;
        case "바나나주스": money=3500; break;
        case "레몬에이드": money=4000; break;
        case "자두에이드": money=4000; break;
        case "민트초코라테": money=5000; break;
        case "망고요거트스무디":money=5000; break;
        case "망고용과리프레져": money=5000; break;
        case "바닐라크림콜드브루": money=5300; break;
        case "캐모마일": money=4300; break;
        case "페퍼민트": money=4300; break;
        case "장미차": money=4300; break;
        case "ICE": break;
        case "HOT": break;
        case "M": break;
        case "L": break;
        default: // case에 없는 값 입력시 default가 실행된다.
            return "이런, 다른 카페와 착각하셨군요ㅜㅠ저희 카페에는 없는 메뉴에용ㅠ";
    }
    return money;
}*/

function byId(name){
    return document.getElementById(name); //위에 미리 만들면 
}

let out=""; //전역변수 -> 어디에도 속하지 않은 변수
/*
    var는 재선언이 가능하다. let은 재선언이 불가능하다. 
    
    var a=10; 
    var a=40; -> 변수를 재생성 할 수 있다. 결과값은 40으로 나오게 된다.
    
    let b=20; 
    let b=30; -> 변수를 재생성 할 수 없다.
*/

/*
 function 함수이름(매개변수1, 매개변수2,...) { }

    함수가 호출되었을 때 실행하고자 하는 실행문;

*/

function order(){ //order라는 함수이름인것이고 order가 호출되었을때 실행하는 실행문들.
    var drink = byId("drink"); //여기서 짧게 변수써서 만들면 쓰기편함
    var tmp = byId("ice_hot");
    var size = byId("size"); //input 태그를 가져옴

    var total = drink_menu(drink.value); 
    //음료에 대한 금액 구하기 - drink_menu라는 함수를 통해 금액을 구한다.
    if(total==0){ //판매하지 않는 메뉴 입력 했을때
        alert("판매하지않는메뉴입니다.");
        drink.value =""; //잘못 입력 시 입력창을 비워준다.
        drink_menu.focus();
        return;
    }
    /*아이스.핫에 대한 부분 구하기-금액변동은 없지만, 스펠링 대 소문자 구분 확인
      Hot : 이렇게 써는 경우도 허용해줘야하니 이럴때 쓰는 함수가 있다
      알파벳을 소문자로 변환:toLowerCase();
      알파벳을 대문자로 변환:toUpperCase();
    */
    if(!(tmp.value.toLowerCase==="ice" || tmp.value.toUpperCase==="hot")){
        alert("ice 또는 hot 이라고 입력하세요.");
        tmp.value='ice';
        tmp.focus();
        return;
    }
    //음료 사이즈 결정하기 - M,L이냐 잘못입력했냐
    if(!(size.value.toLowerCase()==="m" || size.value.toUpperCase()==="l")){
        size.value="M";
        size.focus();
        return;
    }
    total = total + (size.value.toLowerCase()==="m" ? 0: 1000);
    //사이즈 m 선택시 가격변동 없음, L 선택시 1000원 추가 
    out += drink.value + " / " + tmp.value + " / " +size.value +" : "+total+"원<br>";
    getId("list").innerHTML=out;

    /*
      함수 안에 생성된 변수는 함수가 종료되면 제거된다(즉, 함수 안에서 생성한 모든 변수는 다시 재사용할 수 없다.)
      초기화 되서 사용된다. 함수의 밖에 변수를 생성하면 함수의 생명주기(실행, 종료)와 상관없이 변수의 값을 유지 할 수 있다. 이런 변수를 '전역 변수'라고 한다. 
      
      변수가 만들어지는 위치에 따라 지역변수냐 전역변수냐 
      
      지역변수는 블록안에서 만들어진것 (ex) if{ 안에 들어가면 지역변수 } - 자신이 만들어진 구역에만 사용
      
      전역변수는 어디에서든 사용가능, 전체사용가능

    */
}
/*
 function 함수이름(매개변수1, 매개변수2,...) { }

    함수가 호출되었을 때 실행하고자 하는 실행문;

*/
function drink_menu(drink){ //drink_menu라는 함수이름인것이고 drink_menu가 호출되었을때 실행하는 실행문들.
    switch(drink){
        case "아메리카노": return 2000; 
        case "카페라테": return 3000;
        case "돌체라테": return 4500;
        case "모카라테": return 3000; 
        case "수박주스": return 4500;
        case "바나나주스": return 4500;
        default: return 0;
        //판매하지 않은 메뉴는 0이라는 값이 나온다. 문자열과 비교하지않아도된다.
    }
}