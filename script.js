const burgerIcon = document.querySelector('#burger');
const navBarItems = document.querySelector('#nav-links');

// toggles the burger icon in mobile
burgerIcon.addEventListener('click',() => {
    navBarItems.classList.toggle('is-active');
})