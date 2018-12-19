import { elements } from './base';


export const getLightMode = theme => {
    return theme.mode;
}

export const changeIcon = mode => {
    if(mode === 'dark') {
        elements.lightModeBtn.classList.remove('lightMode__btn--sun');
        elements.lightModeBtn.classList.add('lightMode__btn--moon');
        elements.lightModeIcon.setAttribute('href', 'img/icons.svg#icon-moon');
    } else if(mode === 'light'){
        elements.lightModeBtn.classList.remove('lightMode__btn--moon');
        elements.lightModeBtn.classList.add('lightMode__btn--sun');
        elements.lightModeIcon.setAttribute('href', 'img/icons.svg#icon-sun');
    }
}

export const changeLightMode = theme => {

    elements.root.style.setProperty('--color-primary', `${theme.primary}`);
    elements.root.style.setProperty('--color-primary-notShiny', `${theme.primaryNotShiny}`);
    elements.root.style.setProperty('--color-primary-dark', `${theme.primarydark}`);
    elements.root.style.setProperty('--color-primary-cta', `${theme.primaryCTA}`);
    elements.root.style.setProperty('--color-primary-dark-cta', `${theme.primaryDarkCTA}`);
    elements.root.style.setProperty('--color-grey-light-1', `${theme.greyLight1}`);
    elements.root.style.setProperty('--color-grey-1', `${theme.grey1}`);
    elements.root.style.setProperty('--color-grey-2', `${theme.grey2}`);
    elements.root.style.setProperty('--color-grey-3', `${theme.grey3}`);
    elements.root.style.setProperty('--color-main-text', `${theme.mainText}`);
    elements.root.style.setProperty('--color-secondary-text', `${theme.secondaryText}`);
    elements.root.style.setProperty('--color-btn', `${theme.btn}`);
    
}

