const category=[["급여","캐시백","복권","환급금","기타수익","이자"],
             ["교통비","통신비","외식","주유","연애","문화생활","쇼핑"]]
let ctx1= "", ctx2="" , pi1='', pi2='';
 const income=[]; // 수입 머니 저장 배열
 const expen=[]; // 지출 머니 저장 배열 
 const expen2= [(Math.floor(Math.random()*100))*1000,(Math.floor(Math.random()*100))*1000,(Math.floor(Math.random()*100))*1000];

$(function(){ // 시작 
    ctx1 = $("#pi1")[0]; //첫번째 캔버스
    ctx2 = $("#pi2")[0]; //두번째 캔버스 
    // 머니 배열 초기화 
    for(var i=0; i<category[0].length; i++)income.push((10-i)*10000);
    for(var i=0; i<category[1].length; i++)expen.push((Math.floor(Math.random()*100))*1000);
    income_pi();
    expen_pi();

    $(".labels").click(function(){ //.labels 를 클릭 하였을 때 
        
        if($(this).hasClass("choice") ) return; // 현재 클릭 한 labels가 choice를 가지고 있으면 아무것도 변하지 않게 설정
        $(".labels").toggleClass("choice"); // labels 클릭 하였을 때 toggle 
        $(".input_wrap").toggle(); // labels 클릭 하였을 때 input_wrap 이 보인다
    }); // labels 닫는 태그    

    $.each(category, function(i,c){ // category 배열을 가져온다 
            $.each(category[i],function(k,t){
                $(".category").eq(i).append("<option value='"+i+"-"+k+"'>"+t+"</option>");    
            })
        })// each 닫는 태그  
            $("#income_bt").click(income_chart); //수입 등록 버튼 클릭시 차트 그리기
            $("#expen_bt").click(expen_chart); // 지출 등록 버튼 클릭 시 차트 그리기    
    }) 


function income_chart(){ // 수입을 입력 하면 수입 배열에 저장 되게 
        if ($("#income_money").val()==''){ //수입금액에 값이 비어 있다면 
            alert("수입금액을 입력하세요"); // 경고창 
            $("#income_money").focus(); return;// 마우스 커서
        } // if 문 닫는 태그
        var cidx = $("#income_category").val().split("-"); // select value 값 가져와서 category 배열애 사용
        income[cidx[1]] += parseInt(($("#income_money").val() )); // 수입 머니 저장 배열 에 수입머니 카테고리 저장
        if(pi1 != '')pi1.destory();
        income_pi();
    } // income_chart 닫는 태그


function expen_chart(){
        if($("#expen_money").val()==''){
            alert("지출금액을 입력하세요");
        $("#expen_money").focus(); return; 
        }
} // expen_chart 함수 닫는 태그 

function income_pi(){
    pi1 = new Chart(ctx1,{
        plugins:[ChartDataLabels],
        type:"pie",
        data:{
            labels:category[0],
            datasets:[{
                label:"수입",
                data:income,
                backgroundColor:['#D9A5F0','#A6B4FF','#E3D2C3','#FFE36B','#E3C8C3','#FFB393'],
                borderAlign:"center",
                borderWidth:2, //경계의 너비 
                borderColor:"#ADAEB3",
                boderDash:[5,5],//[선의 길이, 선의 간격]
                borderDashOffset:2, //테두리 수 지정
                rotation:45//그래프가 어디각도로부터 그려지냐                
            }]
        },
        options:{
            plugins:{
                datalabels:{
                formatter:function(v,c){
                return v+"원";
                    },color:"white"
                },
            /*plugins:{
                datalabels:{//데이터 표시
                    formatter:function(value,context){// formatter:function(value,context){return v+"원";},
                        var idx = context.dataIndex;
                        var lb = context.chart.data.lagels[idx];

                        var total = context.chart.getDatasetMeta[0].total;

                        return Math.round(value/total*100)+"%";
                        //return lb+" "+value.toLocaleString()+"원";
                    },
                    color:"white",
                    align:"bottom",
                    anchor:"end",
                    font:{
                        size:"15px"
                    }
                    
                },*/
            }
        }
    });
}
function expen_pi(){
    pi2 = new Chart(ctx2,{
        type:"doughnut",
        data:{
            labels:category[1],
            datasets:[{
                data:expen,
                backgroundColor:["#FEA6FF","#EF54B3","#A557FA","#E64A70","#E130F5"],
            }],
        },
    })
}