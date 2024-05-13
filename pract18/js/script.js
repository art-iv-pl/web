// BURGER

function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('active');

    var burgerMenu = document.querySelector('.burger');
    burgerMenu.classList.toggle('active');
}
document.querySelector('.menu-icon').addEventListener('click', toggleMenu);


// SLIDER 

const slider = document.querySelector('.slider-wrapper');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide-card');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, i) => {
        if (i === slideIndex) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

prevButton.addEventListener('click', () => {
    slideIndex--;
    showSlides(slideIndex);
});

nextButton.addEventListener('click', () => {
    slideIndex++;
    showSlides(slideIndex);
});

showSlides(slideIndex);

setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 3000);
