const showMenu = () => {
    const btnBurger = document.querySelector('.circle-button--burger');
    const wrapper = document.querySelector('.wrapper');
    const menu = document.querySelector('.aside');

    const onVisionMenu = () => {
        document.body.style.overflow = 'hidden';
        wrapper.classList.add('active');
        menu.classList.add('active');
    }

    const onHiddenMenu = (e) => {
        if (e.target.classList.contains('overlay') || e.target.classList.contains('circle-button--close')) {
            document.body.style.overflowY = 'scroll';
            wrapper.classList.remove('active');
            menu.classList.remove('active');
        } else if (e.target.classList.contains('circle-button--call') ||
        e.target.classList.contains('circle-button--feedback')) {
            menu.classList.remove('active');
        }
    }

    const onHiddenMenuKey = (e) => {
        if (e.keyCode === 27) {
            document.body.style.overflowY = 'scroll';
            wrapper.classList.remove('active');
            menu.classList.remove('active');
        }
    }

    btnBurger.addEventListener('click', onVisionMenu);
    wrapper.addEventListener('click', (e) => onHiddenMenu(e));
    document.addEventListener('keydown', (e) => onHiddenMenuKey(e))
}

export default showMenu;