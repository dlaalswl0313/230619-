const category=["편의점","카페","음식점","문화생활","여행","교통","마트",
"관리비","세금","온라인쇼핑","기부","경조사","교육","의료","미용","유흥","통신비",
"급여","기타수입","로또"]

const card=[{name:"우리체크카드", bank:"woori"},
{name:"국민체크카드", bank:"kb"},
{name:"농협체크카드", bank:"nh"},
{name:"카카오체크카드", bank:"kakao"}];

const bank=[{name:"우리은행", bank:'woori', money:33000},
{name:"국민은행", bank:'kb', money:232400},
{name:"농협은행", bank:'nh', money:87700},
{name:"카카오뱅크", bank:'kakao', money:168000}];

function horse(date,money,category,detail,way,getcome,balance){
    this.date=date;//날짜
    this.money=money;//금액
    this.category=category;//분류
    this.detail=detail;//내역
    this.way=way;//방식:현금,계좌,카드
    this.getcome=getcome;//수입이냐 지출이냐 그것이 문제로다.
    this.balance=balance;//잔액
}
house.prototype.won=function(){//돈을 천단위로 콤마를 찍어주고 그러고 나서 떨어져 앞에 w이거 표시 
    return "|" +this.money.toLocaleString();
}
house.prototype.getWay=function(){//수입이든 지출이든 현금은 그냥 현금, 계좌와 카드는 어디인지....
    this.way.split("-").length>1 ? this.way.split("-")[1] : this.way;
}