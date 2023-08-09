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
            fire_stat[item.rsacGutFsttOgidNm].출동건수 += item.gutCo;
            fire_stat[item.rsacGutFsttOgidNm].환자수 += item.trnfCo;
        }else{
            fire_stat[item.rsacGutFsttOgidNm] = {출동건수:Number(item.gutCo) , 환자수:Number(item.trnfCo)}; //출동건수와 환자수는 숫자로 더하기 해야하므로 변환
        }
    });
    console.log(fire_stat);
});