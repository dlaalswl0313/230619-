window.onload=function(){
    var drwNo = document.querySelector("#drwNo");
    var btnDefault = document.querySelector("#btnDefault");
    var btnSearch = document.querySelector("#btnSearch");

    btnDefault.addEventListener("click",data_default);
    btnSearch.addEventListener("click", data_search);

    var file = document.querySelector("#lotto"); //css에서의 id가 lotto인걸 가져오기
        file.addEventListener("input", function(e){
            let target = e.target;//선택된 파일참조
            let files = target.files;//선택 된 파일은 배열의 형식으로 저장된다. 
            //첫번째 파일 참조를 해야 내가 선택한 파일을 찾을 수 있다.
            //alert(files[0]); 파일선택하면 알림창이 뜬다.
            let reader=new FileReader();
            reader.addEventListener("load", function(e){
                var str = reader.result;
                //alert(reader.result); txt파일 내용이 알림창에 뜬다.
                var temp=str.split("\n");// split("\n") \n(new line -> enter) 분리하라. 

                for(var i in temp){//for(var i=0; i<temp.length;i++)과 같은 조건
                    //배열을 사용할 때 더 유용한 for문
                    lotto.push(temp[i].split("\t"));//tab을 분리하라.
                }
                //alert(str.split("\n")[0]); 인덱스 0인 자료 출력 -> 1073회차 당첨번호만 알림창에 뜬다.
                alert(lotto[0][3]); //1073회차 2번째 당첨번호(18), lotto는 2차원 배열
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
function select_count(){
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
        
        for(var i=0; i<input.length; i++){
            if(input[i].value!=''){
                var val = input[i].value;
                if(win_num.indexOf(parseInt(val))==-1){
                    num_arr.push( "<span>"+input[i].value+"</span>" ); 
                }else{
                    num_arr.push("<strong class='red'>"+val+"</strong>");
                }
                
            }
        }
        if( num_arr.length==6){
            var resN = document.getElementsByClassName("resultNumber");
            resN[line-1].innerHTML=num_arr;
        }
    }
}