$(function(){
    $.getJSON("https://jsonplaceholder.typicode.com/photos",function(data){
        $.each(data,function(i,item){
            var num = Math.floor(Math.random()*5000);
            $(".thumbnail").eq(i).data('id',item.id);
            $(".thumbnail").eq(i).attr(item.url);
        });
        $(".thumbnail").click(function(){
            var id = $(this).data("id");
            $.getJSON("https://jsonplaceholder.typicode.com/photos"+id,function(data){
                data=data[0];
                $("#original").attr(data.url);
                $("#image").text(data.id);
                $("#title").text(data.title);

                $("#modal").show();
                $("#modal_bg").click(function(){
                    $("#modal").hide();
                });
            });
        });
    });
});