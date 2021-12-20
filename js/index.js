import burgerMenu from "./burger.js";
import tabs from "./tabs.js";
import renderTabs from "./renderTabs.js";

burgerMenu({
    selectorMenu: '.navigation__list',
    openMenuSelector: 'navigation__list_active',
})

tabs({
    selectorTabsButton: '.tabs__btn',
    activeClassButton: 'tabs__btn_active',
    selectorTabsElement: '.tabs__item',
    activeClassTab: 'tabs__item_active',
    callback: renderTabs,
});

renderTabs();

