// BURGER//
function toggleBurger() {
    const burger = document.querySelector('.burger');
    burger.classList.toggle('active');
}

function hideBurger(event) {
    const burger = document.querySelector('.burger');
    const target = event.target;
    const isMenuIcon = target.classList.contains('menu-icon');
    const isBurger = target.classList.contains('burger');
    const isPhoneNumber = target.classList.contains('link-number');

    if (!isMenuIcon && !isBurger && !isPhoneNumber) {
        burger.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const phoneNumber = document.querySelector('.link-number');

    menuIcon.addEventListener('click', toggleBurger);
    document.addEventListener('click', hideBurger);

});

 //SLIDER//
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide-card');
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function decreaseIndex() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = document.querySelectorAll('.slide-card').length - 1;
    }
    showSlides(slideIndex);
}

function increaseIndex() {
    slideIndex++;
    if (slideIndex >= document.querySelectorAll('.slide-card').length) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
}

prevButton.addEventListener('click', decreaseIndex);
nextButton.addEventListener('click', increaseIndex);

function autoSlide() {
    slideIndex++;
    if (slideIndex >= document.querySelectorAll('.slide-card').length) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
}

showSlides(slideIndex);

setInterval(autoSlide, 3000);
