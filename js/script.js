var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const insVideo = document.querySelector(".ins_flex")
Array.from(insVideo.children).forEach((item) =>{
    const duplicateNode = item.cloneNode(true)
    duplicateNode.setAttribute("aria-hidden",true)
    insVideo.appendChild(duplicateNode)
})

$(document).ready(function(){
    $(window).on('scroll load', function(){
        ('#menu').removeClass('fa-times')
        $('.navbar').removeClass('active')

        if($(window).scrollTop() >60){
            $('.header').addClass('active')
        }
        else{

        
            $('.header').removeClass('active')
        }
        $('section').each(function(){
            let top = $(window).scrollTop()
            let height = $(this).height()
            let offset = $(this).offset().top - 200
            let id = $(this).attr('id')

            if(top >= offset && top < offset + height){
                $('.navbar a').removeClass('active')
                $('.navbar').find(`[herf="#${id}"]`.addClass('active'))
            }
        })
    })
})