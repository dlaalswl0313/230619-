let data ='';
const state = ["인생최악","별로","그저그럼","좋은사람","천생연분"];
const color=["red","orange","#86E57F","#5CD1E5","pink"];

async function getData(){
    var temp = await fetch("./static/js/mbti.json").then((res)=>res.json());
    //console.log(temp);
    return temp;
}
$(async function(){
   data = await getData();

   $("#result_bt").click(result);
   $("#result_box").click(function(){
        $(this).toggle();
   });
});
function result(){
    var me = $("#me").val().toUpperCase();
    var you = $("#you").val().toUpperCase();
    var n = data[me][you];

    $("#result_box").show();
    $("#result").empty();
    $("#result").css("background",color[n-1]);
    $("#result").append("<h2>결과</h2><div>나와 당신의 궁합은?"+state[n-1]+"</div>"); //state 배열에 궁합결과값이있잖니...

    $(".left_img").attr("src","./static/image/"+me+".jpg");
    $(".right_img").attr("src","./static/image/"+you+".jpg");

    $("#left_detail").text(detail[me]);
    $("#right_detail").text(detail[you]);
    //console.log(state[n-1]);
}
const detail={
    ISTJ:"소금형",ESTP:"활동가형",ESFP:"사교형",ENFP:"스파크형", INFJ:"예언자형",ENTP:"발명가형",INTJ:"과학자형",ESTJ:"사업가형",
    ISTP:"백과사전형",ESFJ:"친선도모형",ESFJ:"언변능숙형",ISFP:"성인군자형",ENTJ:"지도자형",INFP:"잔다르크형",INTP:"아이디어형"
};
