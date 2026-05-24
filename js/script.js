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



let enddate = "2026-06-20T00:23:00";

document.querySelector("#head").innerText =
"20 june 2026 12:33 AM";

let inputs = document.querySelectorAll(".timer-banner input");

function clock() {

    let end = new Date(enddate).getTime();

    let now = new Date().getTime();

    let diff = end - now;

    if (diff <= 0) {

        inputs[0].value = "00";
        inputs[1].value = "00";
        inputs[2].value = "00";
        inputs[3].value = "00";

        return;
    }

    let days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );

    let hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    let minutes = Math.floor(
        (diff % (1000 * 60 * 60))
        / (1000 * 60)
    );

    let seconds = Math.floor(
        (diff % (1000 * 60))
        / 1000
    );

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
}

clock();

setInterval(clock, 1000);