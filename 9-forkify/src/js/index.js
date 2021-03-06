import '../styles/main.scss';
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import Theme from './models/LightMode';
import LSC from './models/LSC';
import { isStored } from './models/LSC';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import * as lightModeView from './views/lightModeView';
import { elements, renderLoader, clearLoader, elementStrings } from './views/base';

/**********************************
    TODO:
    -   Shopping List Local Storage ✅
    -   Theme state Local Storage ✅
    -   Dark / Light Theme ✅
    -   Show shopping List btn only wehen something is in there ✅
    -   Delete all btn in Shopping List ✅
    -   On click shopping list icon set list to right column
    -   Week food plan
    -   Last fisited recipe
    -   Last search

    BUGS:
    -   LightMode default setzten (ohne Eintag im local storage läd kein theme)
 */

/* // -- Global state of the app -- //
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};
window.state = state;

/************************************
 * // --- SEARCH CONTROLLER --- //
 */

const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput();

    if(query){
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        try {
            // 4) Search for recipes
            await state.search.getResults();

            // 5) render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (error) {
            alert('Something wrong with the search :/');
            clearLoader();
        }
        
    }
};

 // --- Event Listeners --- //

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

/***********************************
 * // --- RECIPE CONTROLLER --- //
 */

 const controlRecipe = async () => {
    
    // Get ID from URL
    const id = window.location.hash.replace('#', '');

    if(id){
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Highlight selected search item
        if(state.search) searchView.highlightSelected(id);

        // Create new recipe object
        state.recipe = new Recipe(id);

        try {
            // Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render recipe
            clearLoader();
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id)
            );

        } catch(error){
            console.log(error);
            alert('Error processing recipe!');
        }
    }
 };

 // --- Event Listeners --- //

 ['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));


 // --- Handling recipe button clicks --- //

elements.recipe.addEventListener('click', e => {
    if(e.target.matches('.btn-decrease, .btn-decrease *')){

        // Decrease button is clicked
        if(state.recipe.servings > 1){
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    } else if(e.target.matches('.btn-increase, .btn-increase *')){

        // Increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);

    } else if(e.target.matches('.recipe__btn--add, .recipe__btn--add *')){
        // add to shopping List button is clicked
        controlList();
    } else if(e.target.matches('.recipe__love, .recipe__love *')){
        // Like controller
        controlLike();
    }
}); 

/***********************************
 * // --- LIST CONTROLLER --- //
 */

const controlList = () => {
    // Create new list IF there is none yet
    if(!state.list) state.list = new List();

    // Add each ingredient to the list and UI
    state.recipe.ingredients.forEach(e => {
        const item = state.list.addItem(e.count, e.unit, e.ingredient);
        listView.renderItem(item);
    });
    
    // toggle shopping list icon
    listView.toggleListMenu(state.list.getNumItems());
};

// --- Handle delete and update list item events --- //
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    // Handle the delete button
    if(e.target.matches('.shopping__delete, .shopping__delete *')){
        // Delete from state
        state.list.deleteItem(id);

        // Delte from UI
        listView.deleteItem(id);

        // toggle shopping list icon
        listView.toggleListMenu(state.list.getNumItems());
    // Handling the count update
    } else if( e.target.matches('.shopping__count-value')) {
        const val = parseFloat( e.target.value, 10);
        state.list.updateCount(id, val);
    }
});

// --- Handle delete all btn --- //
elements.shoppingDltAllBtn.addEventListener('click', e => {
    if(e.target.matches(`.shopping__dltAllBtn, .shopping__dltAllBtn *`)){
        // Delte all list items from state
        state.list.deleteAllItems();

        // Update UI
        listView.deleteAllItems();

        // toggle shopping list icon
        listView.toggleListMenu(state.list.getNumItems());
    }
});

// --- Restore shopping list at side load --- //
window.addEventListener('load', () => {
    
    state.list = new List();
    
    if(isStored('list')){ 
        
        // restore shopping list into state
        state.list.items = LSC('list', false);

        // render shopping list items on UI
        state.list.items.forEach(e => {
            listView.renderItem(e);
        });
    }
    
    // toggle shopping list icon
    listView.toggleListMenu(state.list.getNumItems());

});

/***********************************
 * // --- LIKE CONTROLLER --- //
 */

 const controlLike = () => {
    if(!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;

    // User has NOT yet liked current recipe
    if(!state.likes.isLiked(currentID)){
        // Add like to the state
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );

        // Toggle the like button
        likesView.toggleLikeBtn(true);

        // Add like to UI list
        likesView.renderLike(newLike);

    // User has HAS liked current recipe
    }else {
        // Remove like to the state
        state.likes.deleteLike(currentID);

        // Toggle the like button
        likesView.toggleLikeBtn(false);

        // Remove like to UI list
        likesView.deleteLike(currentID);
    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());
};

// Restore liked recipes on page load

window.addEventListener('load', () => {
    state.likes = new Likes();

    // Restore likes
    if(isStored('likes')) state.likes.likes = LSC('likes', false);

    // Toggle like menu button
    likesView.toggleLikeMenu(state.likes.getNumLikes());

    //Render the existing likes
    state.likes.likes.forEach(like => likesView.renderLike(like));
});



/***********************************
 * // --- LIGHT CONTROLLER --- //
 */

 const controlLightMode = () => {

    // Create default light Theme if there is no Theme
    if(!state.theme) state.theme = new Theme()
    if(state.theme.nextMode === 'light') { 
        state.theme = new Theme(
            '#FBDB89',
            '#fff',
            '#F48982',
            '#FBDB89',
            '#F48982',
            '#fff',
            '#fff',
            '#F9F5F3',
            '#F2EFEE',
            '#655A56',
            '#968B87',
            '#F59A83',
            'light',
            'dark'
            )
    } else if(state.theme.nextMode === 'dark') {
        state.theme = new Theme(
            '#2b2516',
            'rgba(251, 219, 137, 0.7)',
            '#1a0201',
            '#867753',
            '#75211d',
            '#f9f7f6',
            '#272523',
            '#1b1b1b',
            '#161616',
            '#dac6bf',
            '#b1a49f',
            '#F59A83',
            'dark',
            'light'
        )
    }

    // Change Icon on the UI
    lightModeView.changeIcon(state.theme.nextMode);

    // Change Theme on the UI
    lightModeView.changeLightMode(state.theme);
}
    


// -- Handling light btn clicks -- //
elements.lightMode.addEventListener('click', e => {
    if(e.target.closest('.lightMode')){
        controlLightMode();  
        LSC('LightMode', true, state.theme.currentMode);
    }
});

// Restore light mode on page load
window.addEventListener('load', () => { 
    
    state.theme = new Theme();

    // Restore light mode
    const restoredData = LSC('LightMode', false);
    state.theme.nextMode = restoredData;
    
    controlLightMode();   
});