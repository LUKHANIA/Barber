/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SWIPER WORKS ===============*/

/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper('.service__swiper', {
    loop: true,
    slidePerview: 'auto',
    spaceBetween: 24,
    grabCursor: true,

    pagination: {
        el: '.service__swiper .swiper-pagination',
    },

    navigation: {
        nextEl: '.service__swiper .swiper-button-next',
        prevEl: '.service__swiper .swiper-button-prev',
    }
})

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== GSAP ANIMATION ===============*/ 


/* Home animation */


/* Home background animation */


/* The nav animation only works in the home section */


/* About animation */


/* Work animation */


/* Service animation */


/* Expert animation */


/* Contact animation */


/* Footer animation */
