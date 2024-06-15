let menuBtn = document.querySelector('.nav__menu');

menuBtn.addEventListener('click', function () {
    let dropMenu = document.querySelector('.drop__menu');
    dropMenu.classList.toggle("active")
})