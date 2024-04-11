let burger_button = document.querySelector('.header_burger_button');
let nav_menu = document.querySelector('header #header_nav nav ul');

burger_button.addEventListener('click', () => {
    nav_menu_open()
});

function nav_menu_open() {
    nav_menu.classList.toggle('ul--open');
    burger_button.classList.toggle('header_burger_button--active');
}