$(function(){
    $(".filterMore").click(function(){
        $(".filterDetail").slideToggle();
        $(this).toggleClass("moreDown");
        $(this).toggleClass("moreUp");
    });
});