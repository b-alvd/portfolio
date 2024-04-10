let burger_button = document.querySelector('.header_burger_button');
let nav_menu = document.querySelector('header #header_nav nav ul');

burger_button.addEventListener('click', () => {
    burger_button.classList.toggle('header_burger_button--active');
    nav_menu.classList.toggle('ul--open');
});