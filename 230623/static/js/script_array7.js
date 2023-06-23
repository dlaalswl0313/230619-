window.onload=function(){
    //화면이 전부 운영 되면 시작하는 함수
    var icon=document.getElementsByClassName("strapIcon");
    icon[0].addEventListener("click",open_close);   
    
    content=document.querySelector("#content");
}
window.onresize=function(){ //브라우저 화면의 너비를 변경했니?
    var wt=window.innerWidth;
    if(wt > 786){//너비가 786보다 작을경우,menu_icon을 누르면 menu_list가 펼쳐지는데 웹브라우저크기가 변하면 펼친게 줄어들게하고싶다
        var list = document.getElementsByClassName("menu_list")[0];
        //열려있을때 웹페이지 크기를 키우면 열린 리스트목록이 안보이도록
        list.style.display="none"; //안보인다
        list.dataset.show=1;      
    }
}
function open_close(){ 
//menu_icon을 누르면 menu_list가 펼쳐지는데 웹브라우저크기가 변하면 펼친게 줄어들게하고싶다
    var list = document.getElementsByClassName("strapIcon")[0].nextSibling;
    var show = list.dataset.show; //show 에는 1이 들어간다.
    
    if(show==1){
        list.style.display="block"; //보인다
        list.dataset.show=0; 
    }else{
        list.style.display="none"; //안보인다
        list.dataset.show=1; 
    }  
    // var list=this.nextSibling;
    // var isActive=list.classList.contains("list_active");
    
    // if(isAcitve)
    //     list.classList.toggle("list_active");//toggle=삭제시킴
    // else
    //     list.classList.add("list_active");

}
let content=null;
function win_confirm(){ //당첨확인 버튼을 누르면 자바스크립트 내 해당하는 함수로 이동한다
    alert("당첨확인");
}
function make_num(){ //번호생성부분, 랜덤숫자이용해서번호등장
 var out="<table class='makeTable'>";
    for(var n=1; n<=5; n++){
      var lucky_num = new Array();
      lucky_num.push(Math.floor(Math.random()*45)+1);
       for(var i=1;i<6;i++){
         var num=Math.floor(Math.random()*45)+1;
         if ( lucky_num.indexOf(num) == -1){ 
            lucky_num.push(num);
         }else{
             i--; 
         }
    }
    lucky_num.sort(function(a,b){return a-b;}) //정렬 내림차순
    //lucky_num.sort(function(a,b){return b-a;}) 정렬 오름차순
    
    //로또 숫자를 태그에 담아주기 
    out += "<tr>";
    out += "<td class='numTd'>"+n+"</td>"
    for(var i=0; i<lucky_num.length; i++){
        out += "<td class='numTd'>"+lucky_num[i]+"</td>";
    }
    out += "</tr>";
    //짝수, 홀수 개수, 총합 출력
    var even=0; odd=0; //even 짝 odd 홀
    var total=0;
     for(var i=0; i<lucky_num.length; i++){
         total += lucky_num[i];
         if(lucky_num[i]%2===0){
            even++;
         }else{
            odd++;
         }
     }
     //산술적 복합성 값 구하기 
     for(i=lucky_num.length-1;i>=1;i++){ 
          for(var k=i-1; i>=0; i--){
            ac.push(lucky_num[i] - lucky_num[k]);
        }
     }
     out += "<td colspan='7'>"+
     "총합: "+total+"   "+//띄어쓰기를 위한 ""
     "홀/짝:"+odd+"/"+even+"</td>";

    }//변수 n 5번 반복하는 for문 끝
     out += "</table>";
    
     content.innerHTML=out;
}

function num_count(){

}
//배열, 실행할 함수 내용을 직접 써서 사용가능 -> 기존에는("사용하고자하는기능",사용하고자하는기능의 함수)
/*
아이콘 클릭하면 menu_list가 보이고 안보이고 >>
(1)class명 활용 -> class를 넣다 뺐다가  
    var icon=document.getElementsByClassName("strapIcon");
    icon[0].addEventListener("click",function(){

    var list=this.nextSibling;
    var isActive=list.classList.contains("list_active");
    
    if(isAcitve)
        list.classList.toggle("list_active");//toggle=삭제시킴
    else
        list.classList.add("list_active");
    
  }); 
(2)this(strapIcon) 활용  
    var list=this.nextSibling list는 태그가 아님, nextSibling은 다음 형제enter의미
    var list=this.nextSibling.nextSibling 하면 enter형제 다음 ul로 들어가서 오류없이 가능

    var list=this.nextSibling.nextSibling;  
    list.style.display="block";
(3)data set이용  
     var list = this.nextSibling;
     var show = list.dataset.show; //show 에는 1이 들어간다.
     if(show==1){
        list.style.display="block"; //보인다
        list.dataset.show=0; 
     }else{
        list.style.display="none"; //안보인다
        list.dataset.show=1; 
     }  
   
    현재 태그(element)의 다음 태그를 가져오는 방법 
    .nextSibling 형제 태그를 의미한다. 
    태그(element) 객체에 클래스를 추가하는 방법
    element.classList.add("클래스이름");
    클래스 여러 개 추가 
    element.classList.add("클래스이름","클래스이름")
    클래스 이름 변경 
    element.classList.replace("변경전이름","변경후이름")
    클래스 삭제
    element.classList.toggle("삭제할 클래스 이름")
    조건에 따라 클래스 삭제
    element.classlist.toggle("삭제클래스이름",조건식)
    태그(element) 객체에 클래스가 있는지 확인하는 방법
    element.classList.contains("클래스이름")
    해당 클래스 이름이 있다면 true, 없으면 false

    dataset
     HTML5부터는 태그에 데이터를 담을 수 있는 개념이 생겼다. 데이터 속성은 태그에 data로 시작한다.
     dataset은 브라우저에 어떠한 행동도 관여하지 않기에 자유롭게 데이터를 넣어 사용하면 된다. 
     자바스크립트에서 활용을 할 수 있고, html에서는 다른 속성 처럼 태그에 영향을 주지 않는다.
     다른 속성이라 하면 width,height,style등등 
     <div width="200">은 width라는 속성에 의해 div 크기에 영향을 준다. 
     하지만 dataset은 영향을 주지 않음

     window.innerWidth - 브라우저의 화면 너비
     window.innerHeight - 브라우저의 화면 높이
     window.outerWidth - 브라우저의 전체 너비
     window.outerHeight - 브라우저의 전체 높이

     브라우저의 크기가 변경되면 동작하는 함수  -> resize()

    
*/

