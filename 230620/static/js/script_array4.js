/*
 문자열에서 특정 문자열의 위치를 찾는 방법->indexof
  indexof는 해당 문자열의 위치(인덱스)를 알려준다.
  배열에서도 indexof을 사용하여 값을 찾을 수 있다.
*/

const name =["이순신","강감찬","최무선","장영실","이성계","정도전","이사부","을지문덕","정약용","장영실","한석봉","안중근",
"이준혁","마동석","김지원","하지원","엄지원","임지연","김태희","김성규","장동우","남우현","이호원","이성열","김명수","이성종","임창균","이영지","이은지","안유진"];

//이름을 한 글자 혹은 두 글자를 입력해도 검색가능하게 나오도록 
window.onload=function(){
    let srh_bt = document.getElementById("search_bt"); //onclick과 같은 동작 하는 방법-태그에게 넣어주는 것이 아닌 다른 함수 사용해서 넣기
    srh_bt.addEventListener("click",search_name);//돋보기 아이콘에 onclick과 같은 동작을 하겠다.
          //addEventListener ("이벤트명", 동작할 함수 이름) 
};
function search_name(){
    alert("검색");
}