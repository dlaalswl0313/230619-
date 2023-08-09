let data=[];
let fire_stat = new Object();

async function getData(){
    var temp = await fetch("./traffic.json").then((r)=>r.json());
    return temp.body.items;//파일열어봐야알수있다.
}
$(async function(){
    data = await getData();
    //console.log(data);
    $.each(data,function(i,item){
        if(item.rsacGutFsttOgidNm in fire_stat){//fire_stat에 rsacGutFsttOgidNm이걸가진게 있냐없냐
            fire_stat[item.rsacGutFsttOgidNm].출동건수 += item.gutCo; //set()은 데이터를 하나씩 못 빼니 객체로 
            fire_stat[item.rsacGutFsttOgidNm].환자수 += item.trnfCo;
        }else{
            fire_stat[item.rsacGutFsttOgidNm] = {출동건수:Number(item.gutCo) , 환자수:Number(item.trnfCo)}; //출동건수와 환자수는 숫자로 더하기 해야하므로 변환
        }
    });
    //console.log(fire_stat);
    var keys = Object.keys(fire_stat); //소방서 이름만 들어있는 배열
    //console.log(keys);
    $.each(keys,function(i,key){
        var td1= "";
        var td2= "<tr>";
        for(var i=1; i<=fire_stat[key].출동건수; i+=5)
            td1+="<td class='red' width=5></td>";
        for(var i=1; i<=fire_stat[key].환자수; i+=5)
            td2+="<td class='blue' width=5></td>";
        td2+="</tr>";
        $("#gp").append("<tr><td class='name' rowspan='2'>"+key+"</td>"+td1+"</tr>");
        $("#gp").append(td2);
    });
    //console.log(keys);
});