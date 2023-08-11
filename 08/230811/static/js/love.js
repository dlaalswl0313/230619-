let data=[];//json 데이터 저장할 배열

async function getData(){
    var temp = await fetch("./static/js/csvjson.json").then((res) => res.json());
    return temp;
}

$(async function(){
    data= await getData();
});