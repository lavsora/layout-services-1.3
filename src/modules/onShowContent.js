const showContent = () => {
    const buttons = document.querySelectorAll('.show-button');
    const textAddition = document.querySelector('.description-text__addition');
    const cardsList = document.querySelectorAll('.cards-list');

    const changeContentButton = (btn) => {
        if(!btn.classList.contains('active')) {
            btn.classList.add('active');
            btn.querySelector('.show-button__text').textContent = 'Скрыть';
        } else {
            btn.classList.remove('active');
            btn.querySelector('.show-button__text').textContent = 'Показать все';
        }

        if(btn.classList.contains('description__show-button') & !btn.classList.contains('active')) {
            btn.querySelector('.show-button__text').textContent = 'Читать далее';
        }
    }

    const showText = () => {
        if(textAddition.classList.contains('description-text__addition--hidden')) {
            textAddition.classList.toggle('description-text__addition--hidden');
        } else {
            textAddition.classList.toggle('description-text__addition--hidden');
        }
    }

    const showCards = (iBtn) => {
        console.log(iBtn)
        cardsList.forEach((list, iList) => {
            if(!list.classList.contains('active') && iBtn === ++iList) {
                list.classList.add('active');
            } else {
                list.classList.remove('active');
            }
        })
    }

    buttons.forEach((btn, iBtn) => 
        btn.addEventListener('click', () => {
            changeContentButton(btn)

            if(iBtn === 0) showText()
            if(iBtn === 1 || iBtn === 2) showCards(iBtn)
        }))
}

export default showContent;