export default class Theme{
    constructor(
        primary, 
        primaryNotShiny,
        primarydark,
        primaryCTA,
        primaryDarkCTA,
        greyLight1,
        grey1,
        grey2,
        grey3,
        mainText,
        secondaryText,
        btn,
        currentMode,
        nextMode
        ) {
        this.primary = primary;
        this.primaryNotShiny = primaryNotShiny;
        this.primarydark = primarydark;
        this.primaryCTA = primaryCTA;
        this.primaryDarkCTA = primaryDarkCTA;
        this.greyLight1 = greyLight1;
        this.grey1 = grey1;
        this.grey2 = grey2;
        this.grey3 = grey3;
        this.mainText = mainText;
        this.secondaryText = secondaryText;
        this.btn = btn;
        this.currentMode = currentMode;
        this.nextMode = nextMode;
    }

    persistData(){
        localStorage.setItem('themeMode', this.currentMode);
    }

    readStorage(){
        const storage = localStorage.getItem('themeMode');
        
        // restore current Mode from localStorage and convert it to nextMode
        // macht noch nicht so viel Sinn aber das if statement im View basiert auf dem next Mode
        // TODO: was logischeres einfallen lassen
        if(storage === 'light'){
           this.nextMode = 'light';
        } else {
            this.nextMode = 'dark' ;
        }
    }
}