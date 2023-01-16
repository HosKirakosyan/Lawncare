window.onload = function () {

    const menu_btn = document.querySelector('.header_burger')
    const header_menu = document.querySelector('.header_menu')
    const header_bottom = document.querySelector('.header_bottom')

    menu_btn.addEventListener('click',function () {
        menu_btn.classList.toggle('is-active');
        header_menu.classList.toggle('is-active');
        header_bottom.classList.toggle('is-active');
    })
}