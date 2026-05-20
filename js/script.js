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