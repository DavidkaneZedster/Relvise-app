const navMenu = document.getElementById('Nav-menu')
const navToggle = document.getElementById('Nav-open');
const navClose = document.getElementById('Nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('Menu__show')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('Menu__show')
    })
}



