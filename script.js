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


let list = document.querySelectorAll('.list');
let foodMenu = document.querySelectorAll('.foodMenu');

        for (let i = 0; i < list.length; i++) {
            list[i].addEventListener('click', function () {
                for (let j = 0; j < list.length; j++) {
                    list[j].classList.remove('active');
                }
                this.classList.add('active');

                let dataFilter = this.getAttribute('data-filter');

                for (let k = 0; k < foodMenu.length; k++) {
                    foodMenu[k].classList.remove('active');
                    foodMenu[k].classList.add('hide');

                    if (foodMenu[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
                        foodMenu[k].classList.remove('hide');
                        foodMenu[k].classList.add('active');
                    }
                }


            })
        }


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

