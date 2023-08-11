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
    //console.log(state[n-1]);
}
