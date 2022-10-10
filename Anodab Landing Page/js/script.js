const getContainer = document.querySelector('.container')
const burgerMenu = document.querySelector('.burger-menu')
const getUl = document.querySelector('nav ul')
const getNav = document.querySelector('nav')

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('burger-effect');
    if (burgerMenu.classList.contains('burger-effect')) {
        burgerMenu.children[1].style.width = '50%'
        getUl.style.translate = '0'
    } else {
        burgerMenu.children[1].style.width = '100%'
        getUl.style.translate = '250px 0'
    }
})

document.body.onscroll = () => {
    if ( window.scrollY > 20 ) {
        getNav.style.backgroundColor = 'rgb(224, 80, 128)'
    } else {
        getNav.style.backgroundColor = 'transparent'
    }
}