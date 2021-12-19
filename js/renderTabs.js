import getData from "./getData.js";

const getCard = function (dataCard) {
    const li = document.createElement('li');
    li.classList.add('card');

    switch (this) {
        case `video`:
            li.classList.add('card_video');
            li.innerHTML = `
            <a href="${dataCard.link}" class="card__link tube">
                <figure>
                    <img src="${dataCard.preview}" alt="${dataCard.description}" class="card__video-img">
                    <figcaption>${dataCard.description}</figcaption>
                </figure>
            </a>`;
            break;
        default:
            li.innerHTML = 'Нет данных';
    }
    return li;
}

const renderTabs = async (i = 0) => {
    const tabsContent = document.querySelectorAll('.tabs__content');

    const type = tabsContent[i].dataset.base;

    const data = await getData(`db/${type}.json`);

    const listElem = data.map(getCard, type);

    tabsContent[i].textContent = '';

    tabsContent[i].append(...listElem);
};

export default renderTabs;