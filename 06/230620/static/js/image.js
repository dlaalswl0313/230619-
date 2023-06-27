let images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
let board=new Array();
let num = new Array();
let show=false; //시작 버튼 클릭 유무
let pic=new Array(); 
let cmp_num=new Array();
let choice=new Array();

window.onload=function(){ //주기능
    let start = document.getElementById("start");
    start.addEventListener("click", play);
}  
function image_init(){
    image.push(Math.floor(Math.random()*12));
    for(var i=1; i<12; i++){
        var temp=Math.floor(Math.random()*12);
        if(image.indexOf(tmp)==-1){
            image.push(tmp);
        }else{
            --i;
        }
    }
}  

function play(){
    if(!show){ 
        block.innerHTML=images[i];
        return; 
    }
    setTimeout(function(){
        let block = document.getElementsByClassName("block");
        for(var i=0; i<block.length; i++){
            block[i].style.display="none";
        }
        show = true; 
      },2000);
    }

function init(){
    pic.push(Math.floor(Math.random()*11));
    for(var i=1; i<=3; i++){
        var temp = Math.floor(Math.random()*11);
        if ( pic.indexOf(temp) == -1){
            pic.push(temp);
        }else{
            i--;
        }
    }

    board.push(Math.floor(Math.random()*8) ); //board는 랜덤한 숫자가 들어오게 하는 부분 
    for(var i=1; i<=7; i++){ //8인 이유는 최대값이 7까지 나옴
        var temp = Math.floor(Math.random()*8);
         if ( board.indexOf(temp) == -1){
            board.push(temp);
         }else{
             i--;
         }
      }   
    }
    cmp_num.push(parseInt(child.innerText)); 
    
    if(cmp_num.length == 2){
        if(cmp_num[0] == cmp_num[1]){
        cmp_num = new Array();
        choice = new Array();
        end++; 
     }else{ 
        setTimeout(function(){
         cmp_num = new Array();
         let images = document.getElementsByClassName("back");
         for(var i=0; i<choice.length; i++){
            images[choice[i]].style.display="none"; 
         }
         choice= new Array();
       },500); //0.5s,한 번 실행
     }                                  
   }


