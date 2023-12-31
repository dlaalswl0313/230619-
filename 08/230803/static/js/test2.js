$(function(){
    $.getJSON("https://jsonplaceholder.typicode.com/users",function(data){
        $.each(data,function(i,item){
            $(".name").eq(i).data('id',item.id);
            //인덱스 i 에서 클래스 name을 가진 요소를 선택하고 
            //data-id 속성을 현재 item의 id 속성에 추가한다.
            $(".name").eq(i).text(item.name);
            //$("#person_wrap").append("<div class='name' data-id='"+item.id+"'>"+item.name+"</div>");
        });   
    });    
     $(".name").click(function(){
        var id= $(this).data("id");
         $.getJSON("https://jsonplaceholder.typicode.com/users?id="+id,function(data){
            data = data[0];
            $("#info_name").text(data.name);
            $("#info_username").text(data.username);
            $("#info_email").text(data.email);
            $("#info_street").text(data.address.street);
            $("#info_suite").text(data.address.suite);
            $("#info_city").text(data.address.city);
            $("#info_zipcode").text(data.address.zipcode);
            $("#info_geo").text(data.address.geo.lat+","+data.address.geo.lng);
            $("#info_phone").text(data.phone);
            $("#info_website").text(data.website);
            $("#info_companyName").text(data.company.name);
            $("#info_companyBs").text(data.company.bs);

            $("#modal").show();   
            $("#modal_close").click(function(){
                 $("#modal").hide();
                });
                // console.log(data[0]);
            });
        });
        
    
    
    });