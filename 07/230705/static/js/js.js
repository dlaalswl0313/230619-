let a = new Array();


for(var i=1; i<=20; i++){
    a.push(Math.floor(Math.random()*100)+1);
}

for( var i=0;i<=a.length;i++ ){
    if(a[i]%3==0){
    
        document.write("선향");
    }else if(a[i]%5==0){
      
        document.write("상수");
    }
}


function out(){
    array();
}
function array(){
    for(var i=1; i<=20; i++){
        a.push(Math.floor(Math.random()*100)+1);
    }

}
function b3(){
    if(a%3==0){
        
    }
}
function b5(){
    if(a%5==0){
        document.write("상수");
    }
}
function b15(){
    if(a%15==0){
        document.write("선향,상수");
    }
}
