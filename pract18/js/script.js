// BURGER

function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('active');

    var burgerMenu = document.querySelector('.burger');
    burgerMenu.classList.toggle('active');
}

function closeMenuOnClickOutside(event) {
    var burgerMenu = document.querySelector('.burger');
    var menuIcon = document.querySelector('.menu-icon');

    if (!burgerMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        burgerMenu.classList.remove('active');
        menuIcon.classList.remove('active');
    }
}

document.querySelector('.menu-icon').addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenuOnClickOutside);



// SLIDER 

function createSlider(wrapperSelector, prevButtonSelector, nextButtonSelector) {
    const sliderWrapper = document.querySelector(wrapperSelector);
    const prevButton = document.querySelector(prevButtonSelector);
    const nextButton = document.querySelector(nextButtonSelector);
    let slideIndex = 0;

    function showSlides(index) {
        const slides = sliderWrapper.querySelectorAll('.slide-card');
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        }
        slides.forEach((slide, i) => {
            slide.style.display = (i === slideIndex) ? "block" : "none";
        });
    }

    function showPrevSlide() {
        slideIndex--;
        showSlides(slideIndex);
    }

    function showNextSlide() {
        slideIndex++;
        showSlides(slideIndex);
    }

    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);

    setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 3500);

    showSlides(slideIndex);
}

createSlider('.slider-wrapper', '.prev-btn', '.next-btn');
