window.onload=function(){
    setInterval(function(){
        var dt=document.querySelector("#date_time");
        const now=new Date();//현재날짜와시간을가져올수있다,now라는 변수에 표시
        const year=now.getFullYear();//년도 -> f랑 y랑 대문자 구별 잘하자
        //월~초는 padStart지정해줘야 2자리로 나온다.
        const month = String(now.getMonth()+1).padStart(2,"0");//월 +1을 해줘야 6월로 표시된다. 
        const date = String(now.getDate()).padStart(2,"0");//날짜 -> 소괄호() 잘넣자
        const hour = String(now.getHours()).padStart(2,"0");//시간
        const minute = String(now.getMinutes()).padStart(2,"0");//분
        const sec = String(now.getSeconds()).padStart(2,"0");//초
        dt.innerHTML=`${year}.${month}.${date}.${hour}.${minute}.${sec}`;//~ 키를 그냥눌러
        // dt.innerHTML=year+"."+month+"."+date+"."+hour+"."+minute+":";
    },1000); //익명 함수,시간은 1초씩
}
/*
  padStart() 문자열의 시작을 다른 문자열로 채워준다. --> 지정한 문자열로 반드시 시작하도록
  (ex) 신xx.padStart(2,0)-->2자리가 아닌 경우에 0을 넣어준다 
*/