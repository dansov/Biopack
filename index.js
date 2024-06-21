const NavLinkEls = document.querySelectorAll('.nav-header-element');

NavLinkEls.forEach(NavLinkEl => {
    NavLinkEl.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        NavLinkEl.classList.add('active');
    });
});