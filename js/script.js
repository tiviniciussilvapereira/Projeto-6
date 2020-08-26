/*
$(function(){
    $('.icon').click(function(){
        $('.menu-mobile').find('.links-menu-mobile').slideToggle();
    })
});
*/ 

$(function(){
    $('.icon').click(function(){
        var el = $(this).parent().find('.links-menu-mobile'); 
        if(el.is(':visible') == false){
            el.fadeIn(); 
        }else{
            el.fadeOut();
        }
    })
});

 $(function(){
     $('nav a').click(function(){
         var href = $(this).attr('href'); 
         var offsetTop = $(href).offset().top; 

         $('html, body').animate({'scrollTop':offsetTop});
     })
 });