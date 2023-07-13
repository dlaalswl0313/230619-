/* 
<div class="search_button">                돋보기 모양 아이콘과 검색입력 창과 버튼이 들어있는 div
  <i class="bi bi-search"></i>             돋보기 모양 아이콘
</div>
<div class="search_bar" style="display: none;"> 
   <div class="search_close">             <-여기에 이벤트를 줘야해
       <i class="bi bi-x-lg"></i>         <-여기가 아니고;
</div>
  <form id="searchform" name="searchform" method="get" action="index.html"> 나는 여기도 따로 줘야하는줄;;search_button에 포함안되는줄알았나벼,;;
    <div>
        <input type="text" id="s" placeholder="검색입력"></input>
        <button class="srh_button">검색</button>
    </div>
  </form>
</div> */

window.onload=function(){
    var search_bt = document.getElementsByClassName("search_button");
    search_bt[0].addEventListener("click",function(){ /*ClassName 중 하나를 골라내야하니까 */
        var bar=document.querySelectorAll(".search_bar")[0];
        bar.style.display="block";
    });
    var search_close=document.getElementsByClassName("search_close");
    search_close[0].addEventListener("click",function(){
        var bar=document.querySelectorAll(".search_bar")[0];
        bar.style.display="none";
    });
}

