// (function ($) {
//     "use strict";
    
//     new WOW().init();
//     $(".cart_link > a").on("click", function(){
//         $(".mini_cart").add("active");
//     });

//     $(".mini_cart_close > a").on("click", function(){
//         $(".mini_cart").removeClass("active");
//     })(jQuery);
    
// })
$(document).ready(function(){
    $('.cart_link').click(function(){
        $('.mini_cart').slideToggle(300)
    })
    // $('.mini_cart_close').click(function(){
    //     $('.mini_cart').removeToggle(1000)
    // })
})