let image_name=["3.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];
let path="./static/image/";
let image_position=new Array();
let selectImg=new Array(); // 현재 선택한 이미지
let isStart=false; // start 버튼 클릭 유무

window.onload=function(){
    var start = document.querySelector(".st_bt");
    start.addEventListener("click",game_start);
}
// var currentIndex = 0;

// function toggleImg() {
//     var img = document.querySelector(".img");
//     img.src = path + image_name[currentIndex];

//     currentIndex++;
//     if (currentIndex >= image_name.length) {
//         currentIndex = 0;
//     }
// }//여기는 버튼을 누르면 첫번째 칸 이미지가 교체된다. 근데 배열에 넣은게 다나오는게아닌듯;;
function image_init(){ //230621수업시간에배운것적용하는중,..ㅇㅙ안대이ㅣㅣ
    image_position.push(Math.floor(Math.random()*6));//일단 6개
    for(var i=1; i<5; i++){
        var tmp=Math.floor(Math.random()*6);
        if( image_position.indexOf(tmp) == -1){
            image_position.push(tmp);
        }else{
            --i;
        }
    }
    var img = document.getElementsByClassName("img");
    for( var i=0; i<img.length; i++){
        img[i].style.background="url("+(path+image_name[image_position[i]%6])+") no-repeat center";
        img[i].style.backgroundSize="contain";
    }
}
function game_start(){
    if(isStart){
        return;
    }
    image_init(); 
    var div = document.getElementById("dog");
    for(var i=0; i<div; i++){
        div[i].addEventListener("click", compare_img);
        isSame.push(false);
    }
    isStart=true;
}
function compare_img(){
    if(!isStart){ return;}
}
