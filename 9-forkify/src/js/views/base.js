export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchRes: document.querySelector('.results'),
    searchResList: document.querySelector('.results__list'),
    searchResPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe'),
    shoppingMenu: document.querySelector('.shopping__field'),
    shopping: document.querySelector('.shopping__list'),
    likesMenu: document.querySelector('.likes__field'),
    likesList: document.querySelector('.likes__list'),
    lightMode: document.querySelector('.lightMode'),
    lightModeBtn: document.querySelector('.lightMode__btn'),
    lightModeIcon: document.querySelector('.lightMode__btn svg use'),
    root: document.querySelector(':root')
}

// für nicht constant vorhandene Elemte
export const elementStrings = {
    loader: 'loader'
}

// Loading animation
export const renderLoader = parent => {
    const loader = `
    <div class="${elementStrings.loader}">
        <svg>
            <use href="img/icons.svg#icon-cw"></use>
        </svg>
    </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader) loader.remove();
};