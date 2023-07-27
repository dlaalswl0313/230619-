let keep = new Array();

const bank=[{name:"우리은행",bank:'woori'},
{name:"농협은행",bank:'nh'},
{name:"카카오뱅크",bank:'kakao'}];

window.onload=function(){
    document.querySelector("stored_bt").addEventListener("click",keep);
}
function keep(bank_name, money,account_num){
    this.bank_name=bank_name; 
    this.money=money;
    this.account_num=account_num;
    
}
function bank_name(){
    var bank = document.querySelector("#bank").value;
    var money = document.querySelector("#money").value;
    var account = document.querySelector("#account").value;   
}

function money(){
}  
function account_num(){
    
}
