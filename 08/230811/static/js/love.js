//시간의 흐름에 따른 그래프는 산전도 그래프 (대전시 총 인구 != 대전시 인구 변화)
let data=[]; // json 데이터 저장할 배열 
let tmp_data=new Object(); // 월별 기온 데이터 저장학 객체
let year=[]; //년도 저장할 배열 

async function getData(){
    var temp = await fetch("./static/js/csvjson.json").then((res) => res.json());
    return temp;
}

$(async function(){
    data = await getData();
    //일별 데이터 -> 월별 데이터 뽑기
    var y= new Set();

    $.each(data,function(i,item){
        var date = item.날짜.split("-"); // 각 데이터의 날짜를 기준으로 분리 배열
        y.add(date[0]); // 년도 만 저장 
        keyIn(date);

        tmp_data[date[0]][Number(date[1])].평균기온 += item.평균기온C;
        tmp_data[date[0]][Number(date[1])].최저기온 += item.최저기온C;
        tmp_data[date[0]][Number(date[1])].최고기온 += item.최고기온C;
        
    });
         //console.log(Number(data[0].날짜.split("-")[1]) == 1); //1월달이냐아니냐 ,true 
        console.log(tmp_data);
    });

function keyIn(날짜){
        if( ! (날짜[0] in tmp_data) ) { // tmp_data 객체에 해당 년도가 키로 존재 하냐?
            tmp_data[날짜[0]]=new Object();
            for(var i=1; i<=12; i++){
                 tmp_data[날짜[0]][i]={
                    평균기온:0,
                    최저기온:0,
                    최고기온:0
            }
        } 
    }
}


