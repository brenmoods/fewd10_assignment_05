//wait for the DOM elements to load before executing
$(document).ready(function(){  
    
    $('.hamburger').click(function(){ 
        $(this).next().slideToggle();   
        
});
});
var num = 0;
        
        $(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});
        
        
        


