const defaultSubmit = () => {
    const submitButtons = document.querySelectorAll('.modal__ellipse-button');
    const wrapper = document.querySelector('.wrapper');

    const modalClose = (e) => {
        e.preventDefault();

        const modal = document.querySelector('.modal.active');

        if (modal) {
            document.body.style.overflowY = 'scroll';
            wrapper.classList.remove('active');
            modal.classList.remove('active');
        }
    }

    submitButtons.forEach(btn => btn.addEventListener('click', (e) => modalClose(e)))
}

export default defaultSubmit;