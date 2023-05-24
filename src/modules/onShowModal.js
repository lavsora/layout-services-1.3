const showModal = () => {
    const wrapper = document.querySelector('.wrapper');
    const btnCalls = document.querySelectorAll('.circle-button--call');
    const btnFeedbacks = document.querySelectorAll('.circle-button--feedback');
    const modalCall = document.querySelector('.modal--call');
    const modalFeedback = document.querySelector('.modal--feedback');

    const onShowModal = (modal) => {
        document.body.style.overflow = 'hidden';
        wrapper.classList.add('active');
        modal.classList.add('active');
    }

    const onHiddenModal = (e) => {
        const modal = document.querySelector('.modal.active');

        if(modal && (e.target.classList.contains('overlay') || e.target.classList.contains('circle-button--close'))) {
            document.body.style.overflowY = 'scroll';
            wrapper.classList.remove('active');
            modal.classList.remove('active');
        }
    }

    const onHiddenModalKey = (e) => {
        const modal = document.querySelector('.modal.active');

        if(e.keyCode === 27) {
            document.body.style.overflowY = 'scroll';
            wrapper.classList.remove('active');
            modal.classList.remove('active');
        }
    }

    btnCalls.forEach(btnCall => btnCall.addEventListener('click', () => onShowModal(modalCall)));
    btnFeedbacks.forEach(btnFeedback => btnFeedback.addEventListener('click', () => onShowModal(modalFeedback)));
    
    wrapper.addEventListener('click', (event) => onHiddenModal(event));
    document.addEventListener('keydown', (event) => onHiddenModalKey(event));
}

export default showModal;