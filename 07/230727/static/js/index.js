function bank(name,money,account_num){//생성자 함수 0번
    this.name=name;
    this.money=money;
    this.account=account;
}
function save(){//입력한내용을 다 가져와야한다. 1번
    var name=document.querySelector("#name");//얘네만 appendchild 가능
    var money=document.querySelector("#money");
    var account_num=document.getElementById("#account_num");

    //내용을 저장할 공간에 내용을 넣는다. 3번
    bank_list.push(new bank(name.value,money.value,account_num.value));
    name.value="";
    money.value="";
    account_num.value="";
    name.focus();
    
    //출력 4번
    var out = document.getElementById("output");
    // //문자열 방식 
    // var html = "";
    // for(var i in bank_list){
    //     html += "<div>+bank_list[i].name+" "+bank_list[i].money+" "+
    //     bank_list[i].account_num+"</div>";
    // }
    var i = bank_list.length-1;
    var div = document.getElementById("output");
    div.innerHTML=bank_list[i].name+" "+bank_list[i].money+" "+
    bank_list[i].account_num
    out.appendChild(div);
}
//내용을 저장할 공간을 만들어준다 2번
const bank_list= new Array();

