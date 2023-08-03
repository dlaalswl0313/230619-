$(function(){
    $.getJSON("https://jsonplaceholder.typicode.com/users",function(data){
        $.each(data,function(i,item){
            $(".name").eq(i).data("id",item.id);
            $(".name").eq(i).text(item.name);
            //$("#person_wrap").append("<div class='name'>"+item.name+"</div>");
        });
    });
    $(".name").click(function(){
        var id = $(this).data("id");
    $.getJSON("https://jsonplaceholder.typicode.com/users"+id,function(data){
         //console.log(data[0]);
         data = data[0];//객체는 인덱스 없음
         $("#info_name").text(data.name);
         $("#info_username").text(data.username);
         $("#info_email").text(data.email);
         $("#info_street").text(data.address.street);
         $("#info_suite").text(data.address.suite);
         $("#info_city").text(data.addrerss.city);
         $("#info_zipcode").text(data.address.zipcode);
         $("#info_phone").text(data.address.phone);
         $("#info_website").text(data.address.website);
         $("#info_companyHome").text(data.address.companyHome);
         $("#info_companyBs").text(data.address.companyBs);
       });   
    });
    
    $("#modal_close").click(function(){
        $("#modal").hide();
    });
});