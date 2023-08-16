const love = [100,95,89,96,75,64,93];
const day=[10,20,50,100,200,300,365];

const ctx = $("#line1")[0];

let 겸지={
        label:"사랑지수",
        data:love,
        borderColor:"pink",
        tension:0.2,
        //fill:true, //선 그래프 아래영역, false로 주면 안채워짐
        fill:false, 
        backgroundColor:"mistyrose",
        borderCapStyle:"square",
        pointStyle:"circle",//rect, line, rectRect,circle,cross,dash,star,triangle,rectRounded
        pointBorderWidth:10,
        pointHoverBoderColor:"red",
        pointHoverBoderWidth:10,
        //showLine:false, //선이 없고 점만
    }

let 수향= {
    label:"수향",
    data:[100,100,90,80,70,30,20],
    borderColor:"hotpink",
}

const loveData={
    labels:day,
    datasets:[겸지,수향]
}
const chartOption={
    plugins:{
        title:{display:true, text:"기념일에 따른 사랑지수"}
    },
    scale:{ //두개의 차트 누적
        y:{
            stacked:true
        }
    }
}
new Chart(ctx,{
    type:"line",
    data:loveData,
    options:chartOption
});
