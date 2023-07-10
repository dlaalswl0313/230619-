//HTML에는 js 연결만 해준 상태
window.onload=function(){
    var body = document.getElementsByTagName("body");//body 태그 가져옴
    // body[0].innerHTML="<div>오늘 비와?</div>";// body[0]-> getElements tag 가 하나만 가져오는게아냐
    // // body[0].innerText="<div>오늘 비와?</div>";   

    var node = document.createElement("div");//할당
    //node == html tag, createElement("div") : div 태그를 만들어라
    body[0].appendChild(node);//위치, body[0].appendChild(변수명)
    node.setAttribute("id","rain");//id 부여
   
    var text = document.createTextNode("오늘 비 많이 옴?");//할당
    node.appendChild(text);//위치 ,node.appendChild(변수명)
    node.addEventListener("click",function(){alert("이벤트출력");})
}
//<button onclick()="exit()">브라우저 닫기</button>
function exit(){
    //브라우저 객체
    window.close();
}

// <button onclick="winopen()">새 창 열기</button>
function winopen(){ //윈도우 객체 생성
    // // window.open(); 새 탭 생김
    // window.open("http://www.naver.com","_blank","width:200, height=300 top=400,left=500");
    // /*
    //  window.open("경로(주소)","새 창의 이름 또는 타깃(어디에?)","너비, 높이, 위,아래")
    // "새 창의 이름 또는 타깃(어디에?)" 원하는 방향으로 창을 띄울수있음, (ex)회원가입/인증 창
    //  ex) "_parent","_self" : 부모창(현재창)  |  "_blank" ,"" : 새 창이 뜬다(너비,높이 지정해야한다//너비,높이 지정안하면 새창으로안뜸) 
    // */
    window.open("./child.html","_blank","width:100, height:200");
    //script_html에서 golive-> 새 창 열기 버튼->child.html 창이 뜬다.-> hey ghost show yourself
}