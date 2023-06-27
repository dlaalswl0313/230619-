function score_calc(){
    var lang=document.getElementById("lang");
    var math=document.getElementById("math");
    var english=document.getElementById("english");

    var res=document.getElementById("result");

    if((lang.value=='')|| !(lang.value>=0 && lang.value<=100)){
        alert("점수를 입력해주세요.");
        lang.focus();
        return;

    }else if(math.value==''){
        alert("점수를 입력해주세요.");
        math.focus();
        return;
    }else if(english.value==''){
        alert("점수를 입력해주세요.");
        english.focus();
        return;
    }
    
    var tot=total(Number(lang.value),Number(math.value),Number(english.value));
    //score(lang)국어 입력값에 따른 등급 알파벳
    var avg_val = avg(tot);
    res.innerHTML="총점:"+tot+"<br>평균:"+avg_val+"<br>국어등급:"+score(lang)+"<br>수학등급:" +score(math)+"<br>영어등급:"+score(english);
}
function total(l,m,e){
    return(l+m+e);
}
function avg(tot){
    return(tot/3);
}
function score(grade){
    if(grade>=100){
        return "A";
    }else if(grade>=80){
        return "B";
    }else if(grade>=70){
        return "C";
    }else{
        return "f";
    }
}
function score(lang){
    if(lang>=100){
        return "A";
    }else if(lang>=80){
        return "B";
    }else if(lang>=70){
        return "C";
    }else{
        return "f";
    }
}
function score(math){
    if(math>=100){
        return "A";
    }else if(math>=80){
        return "B";
    }else if(math>=70){
        return "C";
    }else{
        return "f";
    }
}
function score(english){
    if(english>=100){
        return "A";
    }else if(english>=80){
        return "B";
    }else if(english>=70){
        return "C";
    }else{
        return "f";
    }
}