const hamgurger = document.querySelector('.hamgurger'),
menu = document.querySelector('.menu'),
closeElem = document.querySelector('.menu__close');

hamgurger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});