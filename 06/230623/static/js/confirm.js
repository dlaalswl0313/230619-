window.onload=function(){
    var drwNo = document.querySelector("#drwNo");//지금 게시물로부터~~~
    var btnDefault = document.querySelector("#btnDefault");//초기화버튼js로불러오기
    var btnSearch = document.querySelector("#btnSearch");//결과확인버튼js로불러오기

    btnDefault.addEventListener("click",data_default);//클릭하면 초기화버튼이 반응함
    btnSearch.addEventListener("click", data_search);//클릭하면 결과확인버튼이 반응함
    var file = document.querySelector("#lotto"); //css에서의 id가 lotto인걸 가져오기
        file.addEventListener("input", function(e){//엔터키 눌러도 결과 나옴
            let target = e.target;//선택된 파일참조
            let files = target.files;//선택 된 파일은 배열의 형식으로 저장된다. 
            //첫번째 파일 참조를 해야 내가 선택한 파일을 찾을 수 있다.
            //alert(files[0]); 파일선택하면 알림창이 뜬다.
            let reader=new FileReader();//파일읽기변수지정
            reader.addEventListener("load", function(){//파일읽기
                var str = reader.result;
                //alert(reader.result); txt파일 내용이 알림창에 뜬다.
                var temp=str.split("\n");// split("\n") \n(new line -> enter) 분리하라. 

                for(var i in temp){//for(var i=0; i<temp.length;i++)과 같은 조건
                    //배열을 사용할 때 더 유용한 for문
                    lotto.push(temp[i].split("\t"));//tab을 분리하라.
                }
                //alert(str.split("\n")[0]); 인덱스 0인 자료 출력 -> 1073회차 당첨번호만 알림창에 뜬다.
                //alert(lotto[0][3]); 1073회차 2번째 당첨번호(18), lotto는 2차원 배열
            });
            reader.readAsText(files[0]);
        });
        var opt ="";
        for(var i=1073; i>=1; i--){
            opt+="<option>"+i+"</option>";
        drwNo.innerHTML=opt;
        drwNo.addEventListener("change", select_count);
        }        
}
let sel_count=0; //발표 회차 선택
function select_count(){//select 태그의 값을 변경하면 실행되는 함수 
    sel_count=this.selectedIndex;//1072 선택시 알림창에 3 숫자가 뜬다.
}
function data_default(){ //초기화

}
function data_search(){
    if(lotto.length==0){
        alert("로또 파일을 먼저 열어주세요");
        return;
    }
    let win_num=new Array();
    for(var i=2; i<=7; i++){//내가 선택한 회차 당첨번호 win_num배열에 저장
        win_num.push(parseInt( lotto[sel_count][i] ) );
    }
    for(var line=1; line<=5; line++){
        
        var input = document.getElementsByClassName("input"+line);
        var num_arr = new Array();
        
        var bonus_str="<span>"+lotto+[sel_count][8]+"</span>";//보너스 번호에 관한 내용변수
        var win_cnt=0;//일치여부 개수 저장변수
        var isBonus=false; //보너스 번호가 있니..?

        for(var i=0; i<input.length; i++){
            if(input[i].value!=''){
                var val = input[i].value;
                if(win_num.indexOf(parseInt(val))==-1){
                    num_arr.push( "<span>"+input[i].value+"</span>"); 
                }else{ //입력한 숫자와 회차별 당첨번호 위에 빨간색 점으로 표시해줌<-여기가 당첨번호부분
                    num_arr.push("<strong class='red'>"+val+"</strong>");
                    win_cnt++; //당첨번호 몇 개인지
                }      
       
        //보너스 번호 일치여부 (lotto[sel_count][0])
        if(val == parseInt(lotto[sel_count][8])){
            isBonus=true;
            //당첨번호6개가 아니다. (즉 1등 당첨이 아니라면)
              }
           }
        }
        if(isBonus){
            bonus_str = "<strong class='red'>"+lotto[sel_count][8]+"</strong>";
            win_cnt = win_cnt!=6 ? win_cnt+"+Bonus" : win_cnt;
        }
        if( num_arr.length==6){
            var resN = document.getElementsByClassName("resultNumber");
            resN[line-1].innerHTML=num_arr;
            // 여기에 보너스번호 출력코드 작성
            // resultBonus
            var bonus = document.getElementsByClassName("resultBonus");
            bonus[line-1].innerHTML=bonus_str;
            //여기에 일치 갯수 출력코드 작성  resultNumberSu
            var NumberSu = document.getElementsByClassName("resultNumberSu");
            NumberSu[line-1].innerText=win_cnt;
            
        }
        
        
    }
}