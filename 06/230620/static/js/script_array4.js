/*
 문자열에서 특정 문자열의 위치를 찾는 방법->indexOf
  indexOf는 해당 문자열의 위치(인덱스)를 알려준다.
  배열에서도 indexOf을 사용하여 값을 찾을 수 있다.
*/

const name =["이순신","강감찬","최무선","민우혁","이성계","정도전","이사부","을지문덕","정약용","장영실","한석봉","안중근",
"이준혁","마동석","김지원","하지원","엄지원","임지연","김태희","김성규","장동우","남우현","이호원","이성열","김명수","이성종","임창균","이영지","이은지","안유진"];

//이름을 한 글자 혹은 두 글자를 입력해도 검색가능하게 나오도록 
window.onload=function(){
    let srh_bt = document.getElementById("search_bt"); //onclick과 같은 동작 하는 방법-태그에게 넣어주는 것이 아닌 다른 함수 사용해서 넣기
    srh_bt.addEventListener("click",search_name);//돋보기 아이콘에 onclick과 같은 동작을 하겠다.
     //addEventListener ("이벤트명", 동작할 함수 이름) 
     //키보드 enter 키를 누르면 실행하라 
     let input = document.getElementById("search");//keydown누르고 있는상태 keyup누르고 땐 상태 keypress눌렀다 땠다
     input.addEventListener("keypress",function(e){ //function() 익명 함수->일반적인 함수의 호출과는 다름,function(e) 지금 누른 키가 enter야 너는 search를 보여줘야해, 매개변수(e)에는 키보드 값이 들어온다
            if(e.keyCode == 13)  //keycode 키 코드 13은 enter키 32는 space키, enter키 누르면 배열에 있는 목록을 화면에 표시함 
            search_name();                      
     });
         
};
function search_name(){ //검색기능:엔터키, 마우스 사용
    //alert("검색"); 기능확인용
    let input = document.getElementById("search");//<i>태그에 준 이벤트
    let word = input.value;
   

    let res = document.getElementById("search_result");
    var out="";
    for(i=0; i<name.length; i++){ //name의 내용을 불러와야함
        //이름을 정확하게 입력했을때 찾냐 못찾냐
        if( name[i].indexOf(word)!=-1) {//indexOf 함수로 일치하는 데이터를 찾았다면 
            //인덱스를 반환, 인덱스는 0부터 시작(> 0), 일치하는 데이터를 찾지 못하면 -1 반환(!=-1)
         //alert("여기>>");  성 입력 시 해당 성에 맞는 사람수 만큼 알림창이 뜬다.
         out+="<p>"+name[i]+"</p>";
        }
    }
    res.innerHTML=out;
    input.value="";//다음검색을 위해, input태그에 내용을 비우기
    input.focus();//검색창비워주기, 검색input태그에 커서놓기 다음 검색을 위해..
}


