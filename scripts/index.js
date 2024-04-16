// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const container = document.querySelector('.content');
const places = container.querySelector('.places');
const cardsContainer = container.querySelector('.places__list');

// @todo: Функция создания карточки
function addCard({name, link, deleteCard}) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    cardElement.querySelector('.card__title').textContent = name;
    cardImage.src = link;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => deleteCard(cardElement));

    return cardElement;
  };

// @todo: Функция удаления карточки
const deleteCard = (element) => element.remove();

// @todo: Вывести карточки на страницу
initialCards.forEach(({name, link}) =>
    cardsContainer.append(addCard({name, link, deleteCard}))
);