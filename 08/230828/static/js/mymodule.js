/*
    import는 외부 파일에서 가져오는 방법
    export는 외부로 내보내는 방법

    export를 통해 내보낼 대상을 설정한다.
    export에는 function, class, 변수를 내보낼 수 있다.
    export function a(){}
    export const a=100;
    
    여러 개를 export 하고자 할 때는 export {a,b,c} 

    export 대상이 하나일 경우에 import statement outside a module 에러가 발생한다.
    기본 export가 지정되지않아서 발생하는 에러이다.
    export default를 해주어야만 한다.

    import를 통해 외부에서 가져올 수 있다.
    import{외부파일의 함수,변수,class명}, from '모듈파일명.js'
    import{ a } from 'mymodule.js'
    import{ a as mainA} from 'mymodule.js'
    as를 이용하여 이름을 변경 할 수 있다.
*/
export function sum(a,b){ //sum 이라는 함수를 외부로 내보낸다
    return a+b;
}
export function makeTable(id, row, col){
    var tb = document.getElementById(id);
    var tag='';
    for(var i=1; i<=row; i++){
        tag += "<tr>";
        for(var k=1; k<=col; k++){
            tag += "<td></td>";
        }
        tag +="</tr>";
    }
    tag+="</table>";
    tb.innerHTML=tag;
}