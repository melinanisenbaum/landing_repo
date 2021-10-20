const mainMenu = document.getElementById('main-menu');

if (window.matchMedia('(min-width: 768px)').matches) {
    mainMenu.classList.remove('animate__animated animate__slideInDown animate__slow');
}
