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
