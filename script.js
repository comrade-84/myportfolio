const navBars = document.querySelectorAll('.nav-link');
const dateEl = document.querySelector('#date');

navBars.forEach(navBar => {
    navBar.addEventListener('click', () => {
        navBars.forEach(navItem => {
            navItem.classList.remove('active');
        });
        navBar.classList.add('active');
    })
})
const date = new Date().getFullYear();
dateEl.textContent = date ;

