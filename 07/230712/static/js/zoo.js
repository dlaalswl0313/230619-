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
    
  var pre = document.getElementsByClassName("prev")[0];
  var next = document.getElementsByClassName("next")[0];
  pre.addEventListener("click", function(){
      var slideview = document.getElementsByClassName("eventslide")[0]; //ul태그
      slideview.style.transform="translate3d(0px, 0px, 0px)";
      // var now_left = slideview.style.left.split("px")[0]; //현재 left값가져오기
      // if( now_left == 0 ) return; // 첫번째 li가 화면에 보이면 이동안되게
      // var left = Number(now_left) + 312; // li 하나당 312px 이기 때문에 
      // slideview.style.left=left+"px";
  });
  next.addEventListener("click",function(){
      var slideview = document.getElementsByClassName("eventslide")[0]; //ul태그
      slideview.style.transform="translate3d(-936px, 0px, 0px)";
      // var now_left = slideview.style.left.split("px")[0]; //현재 left값가져오기
      // if( now_left == -936 ) return; // 마지막 li가 화면에 보이면 이동안되게
      // var left = now_left - 312; // li 하나당 312px 이기 때문에 
      // slideview.style.left=left+"px";
  });
  
  var search_bt = document.getElementsByClassName("search_button");
  search_bt[0].addEventListener("click",function(){
      var bar = document.querySelectorAll(".search_bar")[0];
      bar.style.display="block";
  });
  var search_close = document.getElementsByClassName("search_close");
  search_close[0].addEventListener("click",function(){
      var bar = document.querySelectorAll(".search_bar")[0];
      bar.style.display="none";
  });
}