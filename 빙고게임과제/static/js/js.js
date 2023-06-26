let num = new Array(); //화면에 표시되는 숫자 저장 배열 
let board=new Array(); //숫자가 출력될 위치 저장 배열
let show=false; //start 버튼 클릭 유무-> start 버튼을 누르면 기능이 작동하도록
let cmp_num=new Array();//1번 숫자와 그 다음 숫자를 클릭했을때 비교하기위한배열
let choice=new Array(); //클릭한 숫자가 서로 같지않을때 숫자가 사라지는데 알맞은 숫자도 함께 사라진다. 그

function init(){ //초기화
    //중복없이 랜덤값 넣기
    //indexOf를 이용해서 -1이 나오면 일치하는게 없다
    //  즉 중복되는 숫자가 없다는 뜻이니까  배열에저장
    num.push(Math.floor(Math.random()*50)+1);
    for(var i=1; i<=49; i++){//num.push(Math.floor(Math.random()*10)+1); num.push로 인해 1개의 데이터가 이미 들어간것
        var temp = Math.floor(Math.random()*50)+1;
        if ( num.indexOf(temp) == -1){ //위에 랜덤숫자 중 문자열 비교해서 감소시키고 나옴
            num.push(temp);
        }else{
            i--;
        }
    }
    board.push(Math.floor(Math.random()*25) ); //board는 랜덤한 숫자가 들어오게 하는 부분 
    for(var i=1; i<=24; i++){ //board라는 값이 이미 들어왔으니까 최소값은 1부터 시작
        var temp = Math.floor(Math.random()*25);
         if ( board.indexOf(temp) == -1){ //문자열이 -1이면 
            board.push(temp);//위 조건이 맞으면결과값나와야해
         }else{ //아니면 1씩 감소해서 
             i--;
         }
      }
      var count = document.getElementById("count");//클릭횟수제한표시
      count.innerText=0;//start버튼 누르면 클릭횟수적립시작
      
    }
    window.onload=function(){
    init(); //초기화 함수 실행
    //id가 start인 버튼 태그 가져오기
    let start = document.getElementById("start");
    //버튼 태그에 클릭 이벤트 등록하기(실행함수는 play 함수)->버튼을 클릭하기 전까지는 화면에 숫자가 보이지않음
    start.addEventListener("click",play);

    let bg = document.getElementsByClassName("bg_box");//클래스이름이picutre인것을 가져와서 
    for( var i=0; i<bg.length; i++){ //각각의 태그에 숫자를 넣어준다 
        bg[i].addEventListener("click",color);//board는 위치 지정, td객체에 클릭을 하면 same_search 함수 실행하라.
        }
    }
    function play(){ //버튼을 누르면 적용되는 함수 
    let bg = document.getElementsByClassName("back");
    for( var i=0; i<bg.length; i++){
        bg[board[i]].innerHTML = num[i];
      }
    }
    function color(){ //칸을 눌러도 알림창이 뜨고, 숫자를 눌러도 알림창이 뜬다 , 그러나 start 버튼을 누르면 알림창이 뜨지 않는다. 
    if(!show){ //show 변수가 false라면 not연산에 의해 true가 작동, show변수가 true라면 not연산에 의해 false가 작동한다.
        this.style.background="#56767C"; //show함수로 인해 버튼이 눌렀는지 아닌지 확인가능
        return; 
    }
    var child =this.children[0]; //결과값 [object NodeList], td태그(this)밑에 있는 모든 자식들을 배열로 저장한다. td의 첫번째 자식은 0번 인덱스
    child.style.display="inline";//var child =this.childNodes[0]->결과값[object HTMLSpanElement]\var child = this.firstChild->결과값 [object HTMLSpanElement]
    //alert(child.innerText); 숫자 비교해서 맞추기 \첫번째 선택한 숫자와 그 다음에 선택한 숫자와 비교를 해야하니 숫자들을 저장해야한다
    
    let span = document.getElementsByClassName("back");//숫자가 같지 않은 경우 숫자를 숨겨준다
        for(var i=0; i<span.length; i++){ //모든 숫자가 삭제되지 않게하기위함
            if(span[i] === child){ //각각의 태그마다 고유한 명칭을 가짐 그러니 서로 비교가 가능하다
                choice.push(i); //클릭한 td의 span태그 인덱스를 배열에 저장한다. 
            }
        }
    bingo.push(parseInt(child.innerText)); //배열에 숫자 2개가 저장되어있다면 비교, 클릭한 숫자 배열에 저장

    if(bingo.length == 2){
        if(bingo[0] == bingo[1]){
            alert("1줄 완성");
       }else{ 
         bingo = new Array();
         let choice  = document.getElementsByClassName("back");
         for(var i=0; i<choice.length; i++){
            
         }
         choice= new Array();
     }                                  
   }
}





