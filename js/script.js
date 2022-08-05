$(document).ready(function(){

   
    // about us slider function 
    var swiper = new Swiper('.swiper', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 8500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // scroll to top function 
    $('.scrollTop').click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    })

    window.onscroll = function(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            $('.scrollTop').css("display", "block");
        } else{
            $('.scrollTop').css("display", "none")
        }
    }

    

     // hamburger function 

     $('.hamburger').click(function () {
         $(this).hide();
         $('.close').show();
         $('.mobile > .nav-links').slideDown(300);
         $('.overlay').show(200);

     });

     $('.close').click(function () {
         $(this).hide();
         $('.hamburger').show();
         $('.mobile > .nav-links').slideUp(300);
         $('.services-dropdown').slideUp(300);
         $('.service-list > .fa-angle-down').removeClass("fa-angle-up");
         $('.overlay').hide(200);
     });

    //  Services dropdown
    $('.service-list').click(function(){
        $('.services-dropdown').slideToggle(300);
        $('.service-list > .fa-angle-down').toggleClass("fa-angle-up");
    });


})