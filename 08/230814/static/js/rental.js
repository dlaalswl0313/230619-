const hsmpNm = ["서울특별시","부산광역시","대구광역시","인천광역시","광주광역시","대전광역시","울산광역시","세종특별자치시","경기도"
,"강원도","충청북도","충청남도","전라북도","전라남도","경상북도","경상남도","제주특별자치도"];
const brtcCode = [11,26,27,28,29,30,31,36,41,42,43,44,45,46,47,48,50];

/*const gu=[{11:'서울특별시'},{26:'부산광역시'},{27:'대구광역시'},
{28:'인천광역시'},{29:'광주광역시'},{30:'대전광역시'},{31:'울산광역시'},
{36:'세종특별자치시'},{41:'경기도'},{42:'강원도'},{43:'충청북도'},{44:'충청남도'},
{45:'전라북도'},{46:'전라남도'},{47:'경상북도'},{48:'경상남도'},{50:'제주특별자치도'}];*/


let data =[];


const brtc = new Object();
const signgu = new Object();

async function getCode(){
    var temp = await fetch("./static/js/sigu.json").then((res)=>res.json());
    
    $.each(temp,function(i,d){
         if(d.시군구코드==='' || d.광역시도코드==36){
            brtcCode[d.광역시도코드]=d.법정동명;
         }else{
            signgu[d.법정동명]=d.시군구코드;
         }
    });
    //console.log(temp);
}
async function getData(brtcCode, signguCode){
    //var url="http://krdrive.ipdisk.co.kr:8000/test/aaa.php?ServiceKey="+ServiceKey+
    //"&brtcCode="+brtcCode+"&signguCode="+signguCode+"&numOfRows=500";
    var temp = fetch(url).then((res)=>res.json());
    var url = "http://kedrive.ipdisk.co.kr:8000/test/aaa.php?ServiceKey="+ServiceKey;
    var ServiceKey ="WWIkfQ%2FJumd%2FDh0FBABEBWJOMq2XSO2NMKMcyH86qhMhl%2FLJwFB8sVR1RHNslxDX1QCvvTFV0kzDiZ1s1alcbw%3D%3D";
}
$(async function(){
    await getCode();
    $.each(hsmpNm,function(i,data){
        $("#si").append("<option value="+data+">"+data+"</option>");
    });
});
function result(){
    $("input[name=prvusear]:checked").each(function(){prvusear.push($(this).val())});
    $("input[name=housetynm]:checked").each(function(){housetynm.push($(this).val())});
}





















