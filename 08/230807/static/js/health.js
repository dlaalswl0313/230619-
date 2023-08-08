/*
 스크립트에서 배열을 생성할 때는 const를 많이 사용한다. 
 배열의 주소는 변하지 않고 값만 변동이 있기 때문에 
 배열의 주소변조를 막기위해 const를 사용한다.
    const : 변수 재선언, 변수 재할당이 불가능
    let : 변수 재할당 가능
=================================================
    **자바 스크립트 비동기 : 먼저 실행된 작업이 끝날 때까지 기다리지 않고 다음작업을 수행한다. 즉 한번에 여러 작업을 처리한다. <->동기적 : 순차적 실행
    - aysnc, await, promise
        
    **자바스크립트에서 비동기 처리 3가지 방법
      (1)콜백함수 (2)promise (3)aysnc/await
    **자바스크립트에서 비동기 처리 방법의 문제점
    (1)콜백함수 : 무한콜백, callback hell(해결못하는상황)--> 잘 안씀
    (2)promise :

    비동기 : setTimeout , setInterval , 외부에서 자료를 가져올때
    근데 꼭 외부에서 가져온다고 해서 비동기인 상황이아님 <- 전역변수로 적용하는 경우
*/

let data_list=new Object(); //json 데이터 저장할 전역변수

// function getData(call){
//     $.getJSON("./전국건강증진센터표준데이터.json",function(data){ //callback ,실행순서1
//         call(data.records); //call함수의 인자
//     });
// }
// $(function(){
//     $(".filterMore").click(function(){
//         $(".filterDetail").slideToggle();
//         $(this).toggleClass("moreDown");
//         $(this).toggleClass("moreUp");
//     });   
    
//     getData(function(data){
//         view(data);  //실행순서2
//     });
async function getData(){
        // var d="";
        // $.getJSON("./전국건강증진센터표준데이터.json",function(data){ 
        //     d = data.records; //function(data)여기를 끝내는 역할
        // });  
        // return d;
        var data = await fetch("./전국건강증진센터표준데이터.json").then(function(res){return res,json();}).then(function(r){return r;});
        //fetch로 json 파일 가져옴, 
        console.log(data.records);
        return data.records;
}
$(async function(){
    $(".filterMore").click(function(){
        $(".filterDetail").slideToggle();
        $(this).toggleClass("moreDown");
        $(this).toggleClass("moreUp");
        $(".fliterDetail").slideToggle();
    });      
    data_list = await getData();
    view(data_list);
        


// $.getJSON("./전국건강증진센터표준데이터.json",function(data){
//   const data_list = data.records;

// $(function(){
//     $(".filterMore").click(function(){
//         $(".filterDetail").slideToggle();
//         $(this).toggleClass("moreDown");
//         $(this).toggleClass("moreUp");
//     });   
    
    // $.getJSON("./전국건강증진센터표준데이터.json",function(data){
    //     data_list = data.records;
    //     //const data_list = data.records;
    //     // var task = new Array();
    //     // $.each(data_list, function(i,item){
    //     //     $("#section").append("<div class='item_short'><div class='item_image'><img src='https://loremflickr.com/200/200/health?random="+i+"'></div>"+
    //     //     "<div class='item_detail_box'><ul class='item_detail'>"+"<li>"+item.건강증진센터명+"</li><li>"+item.소재지도로명주소+"</li>"+
    //     //     "<li>"+item.건강증진업무내용+"</li><li>"+item.건강증진센터구분+"</li>"+
    //     //     "<li>"+item.운영기관명+"</li><li>"+item.운영기관전화번호+"</li></ul></div></div>");
    //     });
    //     console.log(data_list);//에러나는 이유 정보를 가져오기 전에 이 함수는 없었기 때문(생성 순서의 영향)
    //     view(data_list);
    // });

//검색
    $("#searchWord").on("keyup",function(){ 
         const word=$(this).val();
        //  소재지주소와 업무내용에 한해서만  검색이 가능하게 변경하시오
         $(".item_short").filter(function(){
            var addr = $(this).find(".item_detail").children("li:eq(1)");
            var task = $(this).find(".item_detail").children("li:eq(2)");
            var hasAddr = addr.text().indexOf(word) > -1;
            var hasTask = task.text().indexOf(word) > -1;
            $(this).toggle( hasAddr || hasTask );
        });
        view(data_list);
    });    
    
    $(".sort_obj").click(function(){
        $(this).toggleClass("asc");
        $(this).toggleClass("desc");

        var name = $(this).data("name");//정렬기준
        
        const sort_type = { centerName:"건강증진센터명", addr:"소재지도로명주소",nurseCount:"간호사수",doctorCount:"의사수"}; 

        var has = -1;
        if($(this).hasClass("asc"))has=1;
        

        $.getJSON("./전국건강증진센터표준데이터.json",function(data){
            const data_list = data.records;
            
            data_list.sort(function(a,b){
                if(a[sort_type[name]] >  b[sort_type[name]]) return 1*has;
                if(a[sort_type[name]] <  b[sort_type[name]]) return -1*has;
                if(a[sort_type[name]] === b[sort_type[name]]) return 0*has;
            });
            view(data_list);
            
            $("#section").empty();

            var task = new Array();//임시 저장소

            $.each(data_list, function(i,item){
                $("#section").append("<div class='item_short'><div class='item_image'><img src='https://loremflickr.com/200/200/health?random="+i+"'></div>"+
                "<div class='item_detail_box'><ul class='item_detail'>"+"<li>"+item.건강증진센터명+"</li><li>"+item.소재지도로명주소+"</li>"+
                "<li>"+item.건강증진업무내용+"</li><li>"+item.건강증진센터구분+"</li>"+
                "<li>"+item.운영기관명+"</li><li>"+item.운영기관전화번호+"</li></ul></div></div>");
            });
        });
    });   
});
//checkbox 누르면 해당 내용이 나오는 부분
function view(data_list){
    $("#section").empty();
    $.each(data_list, function(i,item){
        $("#section").append("<div class='item_short'><div class='item_image'><img src='https://loremflickr.com/200/200/health?random="+i+"'></div>"+
        "<div class='item_detail_box'><ul class='item_detail'>"+"<li>"+item.건강증진센터명+"</li><li>"+item.소재지도로명주소+"</li>"+
        "<li>"+item.건강증진업무내용+"</li><li>"+item.건강증진센터구분+"</li>"+
        "<li>"+item.운영기관명+"</li><li>"+item.운영기관전화번호+"</li></ul></div></div>");
    });   
}