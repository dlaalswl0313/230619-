const tall = [161, 168, 174, 150];
const name = ["송은선", "임민지", "이상준", "김선향"];
const weight=[43,59,72,46];

let avg = tall_avg();

function tall_avg() {
    var sum = 0;
    $.each(tall, function (i, t) {
        sum += t;
    });
    return sum / tall.length;
}
$("#reg_bt").click(function () {
    if ($("#tall").val() == '' || $("#name").val() == '') {
        alert("이름 또는 키를 입력하세요");
        $("#tall").val() == '' ? $("#tall").focus() : $("#name").focus();
        return;
    }
    if(($("#weight").val()=='')){
        alert("몸무게를 입력하세요");
        $("#weight").val() == '' ? $("#tall").focus() : $("#weight").focus();
    }

    name.push($("#name").val()); 
    tall.push(Number($("#tall").val()));

    weight.push(Number($("#weight").val()));
   
    avg=tall_avg();
    chart.destroy(); //이미 만들어진 그래프에 데이터를 추가하기 위해 삭제
    draw();
    
});

let ctx = $("#bar_chart")[0].getContext("2d");
let chart ='';
draw();

function draw(){
 chart = new Chart(ctx, { 
    type: "bar",
    data: {
        labels: name,
        datasets: 
        [
         {
            label: "201호 키 조사",
            data: tall,
            borderWidth: 1,
            backgroundColor: avg_color(),
            indexAxis:"y"

             /*[
                tall[0] >= avg ? "#4374D9" : "#CC3D3D",
                tall[1] >= avg ? "#4374D9" : "#CC3D3D",
                tall[2] >= avg ? "#4374D9" : "#CC3D3D",
                tall[3] >= avg ? "#4374D9" : "#CC3D3D", 
            ],
            barPercentage: 1,
            barThickness: 50,
            borderSkipped: "topleft",
            borderRadius: 100,
            categoryPercentage: 0.1,
            hoverBackgroundColor: "yellow",
            base: avg,
            indexAxis:'x' //y로 두면 인덱스 축이 가로로 바뀐다, x는 가로*/
            
         },
         {
            label: "201호 몸무게 조사",
            data: weight,
            borderWidth: 1,
            backgroundColor: "yellow",
            indexAxis:"y"
         }
        ],  
    },
      
    });
}
  

  /*  options:{
         scales:{
             //y:{min:150, max:200,ticks:{stepSize:10}} //150부터 그래프 위치 시작 ,ticks:{stepSize:10}단위 10으로 변경
             y:{} 
         }
       }
   });  
}*/
function avg_color(){
    var a =[];
    $.each(tall,function(i,t){a.push(t>=avg?"#4374D9" : "#CC3D3D")});
    return a;
}
