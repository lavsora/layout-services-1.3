try {
    const gridCards = document.querySelector('.grid-cards');
    const showButton = document.querySelector('.show-button');
    const showButtonIcon = showButton.querySelector('.show-button__icon');
    const showButtonText = showButton.querySelector('.show-button__text');

    const showButtonTextInitialize = () => {
        if (gridCards.offsetHeight === 150) {
            showButtonIcon.setAttribute('src', './image/i-arrow-down.svg');
            showButtonText.textContent = 'Показать все';
        }
    }

    showButtonTextInitialize()

    const showButtonClick = () => {
        if (showButtonText.textContent === 'Показать все' && gridCards.offsetHeight === 150) {
            showButtonIcon.setAttribute('src', './image/i-arrow-up.svg');
            showButtonText.textContent = 'Скрыть';
            gridCards.style.height = '248px';
        } else if (showButtonText.textContent === 'Скрыть' && gridCards.offsetHeight === 248) {
            showButtonIcon.setAttribute('src', './image/i-arrow-down.svg');
            showButtonText.textContent = 'Показать все';
            gridCards.style.height = '150px';
        }
    }

    showButton.addEventListener('click', showButtonClick)
} catch (error) {
    
}
