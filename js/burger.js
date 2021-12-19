const burgerMenu = (param) => {
    const {
        selectorBurger = '.burger',
        activeBurger = 'burger_active',
        selectorMenu,
        openMenuSelector
    } = param;

    const burger = document.querySelector(selectorBurger);
    const menu = document.querySelector(selectorMenu);

    burger.addEventListener('click', () => {
        burger.classList.toggle(activeBurger);
        menu.classList.toggle(openMenuSelector);
    })


};

export default burgerMenu;