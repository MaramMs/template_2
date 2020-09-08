
/*global $,document,window*/
$(document).ready(function() {
    "use strict";
    //Nice scroll
    $("html").niceScroll();
    $('.carousel').carousel( {
        
        interval:500
    });
});
 //show color option div when click on the gear
$(".gear-cheack").click(function() {

    $(".color-option").fadeToggle();
    
})
//Change Theme color on  the click
var colorli=$(".color-option ul li"),
     scrolltop=$("#scroll-top") ;

colorli
.eq(0).css("backgroundColor", "red").end()
.eq(1).css("backgroundColor", "blue").end()
.eq(2).css("backgroundColor", "yellow").end()
.eq(3).css("backgroundColor", "green").end;

colorli.click(function() {
    $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    
});
// Cachaing The Scroll Top Element
    $(window).scroll(function() {
    //console.log($(this).scrollTop());
    if($(this).scrollTop()>=600)
    {
     scrolltop.show ();
    } else{
   scrolltop.hide (); 
    
  }}); 

        //click on the scroll
  scrolltop.click(function (){
      $("html,body").animate({scrollTop:0},600);
      
      
        
});
//Loading screen 
$(window).on('load', function (){  
//Show scroll
  // $("body").css("overflow","auto");
    
    $(".loading-overlay .spinner").fadeOut(2000,function (){
          $("body").css ("overflow","auto");
        $(this).parent ().fadeOut(2000,function(){
            $(this).remove ();
        });
    });
    
});


              
             
