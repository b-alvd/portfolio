let burger_button = document.querySelector('.header_burger_button')

burger_button.addEventListener('click', () => {
    burger_button.classList.toggle('header_burger_button--active')
});