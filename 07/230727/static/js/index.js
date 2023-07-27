let keep = new Array();

function keep(){
    this.bank_name=bank_name; 
    this.money=money;
    this.account_num=account_num;
}
var income_method = document.getElementsByName("income_method");
    income_method[0].addEventListener("click",function(){
        document.querySelector('#bank');
});
var income_method = document.getElementsByName("income_method");
    income_method[0].addEventListener("click",function(){
        document.querySelector('#money');
});
var income_method = document.getElementsByName("income_method");
    income_method[0].addEventListener("click",function(){
        document.querySelector('#account');
});
