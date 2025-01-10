function openModal() {
    const button = document.querySelector('.header--mobile_menu');
    const activePanel = document.querySelector('.header--mobile_menu_panel');
    const activeBar = document.querySelector('.header--mobile_menu_navigation');

    button.classList.toggle('is-active');
    activePanel.classList.toggle('is-active');
    activeBar.classList.toggle('is-active');

}