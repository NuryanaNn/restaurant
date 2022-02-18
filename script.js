window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});


let burgerMenu = document.querySelector('.burgerMenu');
let hiddenNavbar = document.querySelector('.hiddenNavbar')
let bars1 = document.querySelector('.bars1');
let bars2 = document.querySelector('.bars2');
let bars3 = document.querySelector('.bars3');



burgerMenu.addEventListener('click', function(){
	bars1.classList.toggle('change');
	bars2.classList.toggle('change');
	bars3.classList.toggle('change');
	hiddenNavbar.classList.toggle('change');
})


var swiper = new Swiper(".contentBox", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disabledonINteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480:{
        	slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});