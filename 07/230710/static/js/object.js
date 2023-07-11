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
let child="";//전역변수

function winopen(){ //윈도우 객체 생성
    // // window.open(); 새 탭 생김
    // window.open("http://www.naver.com","_blank","width:200, height=300 top=400,left=500");
    // /*
    //  window.open("경로(주소)","새 창의 이름 또는 타깃(어디에?)","너비, 높이, 위,아래")
    // "새 창의 이름 또는 타깃(어디에?)" 원하는 방향으로 창을 띄울수있음, (ex)회원가입/인증 창
    //  ex) "_parent","_self" : 부모창(현재창)  |  "_blank" ,"" : 새 창이 뜬다(너비,높이 지정해야한다//너비,높이 지정안하면 새창으로안뜸) 
    // */
    // window.open("./child.html","_blank","width:100, height:200");
    //script_html에서 golive-> 새 창 열기 버튼->child.html 창이 뜬다.-> hey ghost show yourself
    child = window.open("./child.html","_blank","width:100, height:200");//왜 여기함수에 들어가냐면? 새창열기 버튼을 누르면 생성되기에 여기에 넣어주는거야..
    //부모가 자식을 제어할 수 있다, child 변수에 hey ghost show yourself이 들어있음
}

//script_object.html : <button onclick="child_close()">자식창(child.html)닫기</button>
function child_close(){//let child="", child = window.open("./child.html","_blank","width:100, height:200")설정해서 부모가 자식을 제어가능하다.
    child.window.close();//child->window->close()함수실행
}

//script_object.html :<button onclick="child_write()">자식창 쓰기</button>
function child_write(){
    child.document.getElementById("message").innerText="흔들리는 꽃들 속에서 네 샴푸향이 느껴진거야"; 
    // <div id="message">여기에 글자를 띄울거야</div>
    // 결과창 - hey ~ 밑 줄에 흔들리는~ 이 문장이 뜬다.
}
//child.html : <div class="input"><input type="text" id="name"></div> 
//script_object.html :<div id="name"></div> ~ <button onclick="child_getName()">자식창 인풋 이름 가져오기</button>
function child_getName(){
    //자식창의 id ==name 인 input 값 가져오기
    var name=child.document.getElementById("name").value;
    //부모창에 div 출력
    document.getElementById("name").innerHTML=name;
}


