/*let num=100; //전역변수

window.onload=function(){
    output(); //mdtest.js의 함수 output 실행
}
function output3(){
    console.log(num);
}
output3();*/

import sum from './mymodule.js';

window.onload=function(){
    sum(10,2);
}

