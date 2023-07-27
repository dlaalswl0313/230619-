const category=["편의점","카페","음식점","문화생활","여행","교통","마트",
"관리비","세금","온라인쇼핑","경조사","기부","교육","의료","유흥","미용","통신비",
"급여","기타수입","로또"];

const card=[{name:"우리체크카드", bank:"wori"},
{name:"국민체크카드", bank:"kb"},
{name:"농협체크카드", bank:"nh"},
{name:"카카오체크카드", bank:"kakao"}];

const bank=[{name:"우리은행",bank:'woori',money:123000},
{name:"국민은행",bank:'kb', money:89000},
{name: "농협", bank:'nh',money:30000},
{name: "카카오뱅크", bank:'kakao', money:589000}];

function two_digit(num){
    return num<10 ? "0"+num : num;
}

window.onload=function(){
    var today= new Date();//날짜
    var year=today.getFullYear();//년도
    var month=today.getMonth()+1;//0부터 시작해서 +1해줘야 이번달부터나옴
    var date=today.getDate();//일
    var hour=today.getHours();//시간
    var minute=today.getMinutes();//분
   
    /*var wdate=document.querySelector("#wdate");
    wdate.value=year+"-"+month+"-"+date+" "+hour+":"+minute;*/
    
    var cate=document.querySelector("#wcategory");

    for(var i=0; i<category.length; i++){
        var opt=document.createElement("option");//새로운옵션만들기
        opt.setAttribute("value",category[i]);
        opt.innerText=category[i];
        cate.appendChild(opt);
    }
    var mycard=document.querySelector("#mycard");
    for(var i in card){
        var opt = document.createElement("option");
        opt.setAttribute("value",card[i].bank);
        opt.innerText=card[i].name;
        mycard.appendChild(opt);
    }
    var mybank=document.querySelector("#mybank");
    for(var i in card){
        var opt = document.createElement("option");
        opt.setAttribute("value",card[i].bank);
        opt.innerText=bank[i].name;
        mybank.appendChild(opt);
    }
    //결제 방법 중에서 카드 선택이냐 현금 선택이냐
    var payment = document.getElementsByName("payment");
    payment[0].addEventListener("click",function(){
        document.querySelector('#mycard').classList.add("hide");
    });
    payment[1].addEventListener("click",function(){
        document.querySelector('#mycard').classList.remove("hide");
    });
    //수입 중에서 은행 입금이냐 현금 이냐
    var incom_method = document.getElementsByName("incom_method");
    incom_method[0].addEventListener("click",function(){
        document.querySelector('#mybank').classList.add("hide");
    });
    incom_method[1].addEventListener("click",function(){
        document.querySelector('#mybank').classList.remove("hide");
    });
    //수입 버튼 클릭 시
    var income_bt=document.querySelector("#income_bt");
    income_bt.addEventListener("click", function(){
        var income_bt=document.querySelector("#income_bt");
        var inc =document.getElementsByClassName("expense")[0];
        ex.classList.add("hide");
        inc.classList.remove("hide");
    })
    //지출 버튼 클릭 시
    var expense_bt=document.querySelectorAll("#expense_bt");
    expense_bt.addEventListener("click",function(){
        var ex = document.getElementsByClassName("expense")[0];
        var inc = document.getElementsByClassName("income")[0];
        ex.classList.remove("hide");
        inc.classList.add("hide");
    })
}