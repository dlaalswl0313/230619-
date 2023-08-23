$(function(){
    $(".bi").click(function(){
        
    });
});
$.getJSON("./data/index.json",function(data){
    console.log(data.수입);
    
    var plus = data.수입;
    $.each(plus,function(i,item){
        $("#main_list").append("<tr><td>"+item+"</td></tr>");
        
        var arr =Object.keys(item);
        console.log(item);
    })
    

});
