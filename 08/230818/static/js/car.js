/*  JSON 파일에서 Json 데이터 가져오기
    JSON 데이터 중에서 용도가 비사업용PURPOS_DIV인 
    승용차 RIDING_ODR의 연료별로 총 합을 구하기
    
    연료DTCONT는 전기, 하이브리드, 휘발유, 경유, 수소 만 구하기
    년도별REG_YY로 나누어서...
 */
    let data=new Object();
    
    const types=["하이브리드","수소","경유","휘발유","전기"];
    const colors=["#D4F4B2","#B0F268","#647354","#8BBF52","#537337"];

    async function getData(){
        var temp = await fetch("./static/js/연료별용도별자동차등록현황.json").then((res)=>res.json());
        console.log(temp);
        refine(temp);
    }
    
    $( async function(){
        await getData();
        const ctx = $("#car")[0];

        var year = Object.keys(data[types[0]]);
        var fuel = Object.keys(data);
        /*
        var color = ["#75120B","#F76A60","#F52516","#75332E","#C21E12"]; 
        var dataset=[];
        $.each(fuel,function(i,t){
         dataset.push({
            label:t,
            data:data[t],
            borderColor:color[i],
            backgroundColor:color[i],
          })
        })*/
        new Chart(ctx,{
            type:"line",
            data:{
               labels:year,
               datasets:
               [
                  {
                     label:types[0],
                     data:data[types[0]],
                     borderColor:"#75120B",
                     backgroundColor:"#75120B",
                    // yAxisID:fuel[0] //y축에 ID를 fuel로 해주겠다
                     //yAxisID:"A" 
                     yAxisID:"하이브리드" 
                  },
                  {
                     label:types[1],
                     data:data[types[1]],
                     borderColor:"#F76A60",
                     backgroundColor:"#F76A60",
                     yAxisID:"전기" 
                  },
                  {
                     label:types[2],
                     data:data[types[2]],
                     borderColor:"#F52516",
                     backgroundColor:"#F52516",
                     yAxisID:"수소" 
                  },
                  {
                     label:types[3],
                     data:data[types[3]],
                     borderColor:"#4C332E",
                     backgroundColor:"#4C332E",
                     yAxisID:"휘발유" 
                  },
                  {
                     label:types[4],
                     data:data[types[4]],
                     borderColor:"#C21E12",
                     backgroundColor:"#C21E12",
                     yAxisID:"경유"
                  }
               ]
            },
            options:{
                //plugins:{legend:{labels:{font:{size:20}}}},
                scales:{
                    /*"A":{
                        min:500,
                        max:7000,
                        position:"right"
                    }*/
                    //x:{tricks:{font:{size:20}}}
                    "수소":{
                        min:500,
                        max:7000,
                        ticks:{color:"DarkTurquoise"}
                        ,position:"right"
                    },
                    "전기":{ min:11000,
                        max:51000,
                        ticks:{color:"DodgerBlue"},position:"right"
                    },
                    "하이브리드":{min:140000,
                        max:310000,ticks:{color:"orange"},position:"right"
                    },
                    "휘발유":{min:2700000,
                        max:3100000,ticks:{color:"LightCoral"},position:"left"},
                    "경유":{min:1450000,
                            max:1500000,ticks:{color:"SpringGreen"},position:"left"}

                }
            }
        })
    
    });
    function refine(temp){
        $.each(temp,function(i,c){
            var type='';
            if( (type=include(c.DTCONT)) == '' || c.PURPOS_DIV==="사업용") return true;
            if( !(type in data))//연료명으로 key가 있나 없나
                data[type]=new Object();//없으면 연료명으로 key 생성
            if( !( c.REG_YY in data[type]) )//년도로 키가 있냐 없냐
                data[type][c.REG_YY]=Number(c.RIDNG_ODR);//없으면 년도 키 생성하고 키에 승용차 수가 저장
            else
                data[type][c.REG_YY]+=Number(c.RIDNG_ODR);//승용차 수 누적
        });
        console.log(data);
    }
    function include(kind){
        for(var i in types){
            if(kind.indexOf(types[i]) > -1)
                return types[i];
        }
        return '';
    }