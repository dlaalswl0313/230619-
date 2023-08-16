const tall = [161, 168, 174, 150];
const name = ["송은선", "임민지", "이상준", "김선향"];

function tall_avg() {
    var sum = 0;
    $.each(tall, function (i, t) {
        sum += t;
    });
    return sum / tall.length;
}

let avg = tall_avg(); 

$("#reg_bt").click(function () {
    if ($("#tall").val() == '' || $("#name").val() == '') {
        alert("이름 또는 키를 입력하세요");
        $("#tall").val() == '' ? $("#tall").focus() : $("#name").focus();
        return;
    }
    name.push($("#name").val()); 
    tall.push(Number($("#tall").val()));
});

const ctx = $("#bar_chart")[0].getContext("2d");

const bar = new Chart(ctx, {
    type: "bar",
    data: {
        labels: name,
        datasets: [{
            label: "201호 키 조사",
            data: tall,
            borderWidth: 1,
            backgroundColor: [
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
            indexAxis:'y' //인덱스 축이 가로로 바뀐다, x는 가로
        }]
    },
});
