const slider = document.querySelector('.slider-wrapper');
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
