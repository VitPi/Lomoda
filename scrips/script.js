//


//


//


'use strict'


const headerCityButton = document.querySelector('.header__city-button'); // кнопка для местоположения

headerCityButton.textContent = localStorage.getItem('lomoda-Location') || 'Ваш Город?'

headerCityButton.addEventListener('click', () => {
    const city = prompt('В каком городе ты живешь');
    headerCityButton.textContent = city
    localStorage.setItem('lomoda-Location', city);
})


//  === ==== = = ====    модальное окно


const subheaderCart = document.querySelector('.subheader__cart');  // корзина
const cartOverlay = document.querySelector('.cart-overlay');    //  окно корзины


const cartModalOpen = () => {
    cartOverlay.classList.add('cart-overlay-open');     // добавление класса в окно карзины
}

const cartModalClose = () => {
    cartOverlay.classList.remove('cart-overlay-open'); // удаление класса окна корзины
}


subheaderCart.addEventListener('click', cartModalOpen)

cartOverlay.addEventListener('click', event => {

    const target = event.target

    if (target.matches('.cart__btn-close') || target.matches('.cart-overlay')) {
        cartModalClose()
    }


})



const body = document.querySelector('body')

body.addEventListener('click', vel=>{
    console.log(vel);
    console.log(vel.buttons);


})


















