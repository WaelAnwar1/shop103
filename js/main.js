
$(document).ready(function(){
    $(".card-link").click(function(){
        $(".rounded").attr("src", $(this).parent().siblings().attr("src"));
        $(".prod_name").text($(this).siblings("h2").text());
        $(".prod_descr").text($(this).siblings("div").find("p:nth(0)").text());
        $(".prod_price").text($(this).siblings("div").find("p:nth(1)").text());
    });

    $(window).resize(function(){
        if($(window).width() < 600)
        {
            $(".modal-content").css("transform", "scaleX(1)");
        }
        else
        {
            $(".modal-content").css("transform", "scaleX(1.4)");
        }

    });
});