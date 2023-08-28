/*import sum from './mymodule.js';
console.log(sum(10,20));*/

/*import {sum as mySum} from './static/js/mymodule.js'; //as를 통해 다른 이름으로 변경
console.log(mySum(10,20));//default제외, 단일 export 시 문제*/ 

import {default as sum, makeTable} from './mymodule';
window.onload=function(){
    makeTable("box",4,5);//4줄 5칸
    makeTable("box2",3,7);//3줄 7칸
}