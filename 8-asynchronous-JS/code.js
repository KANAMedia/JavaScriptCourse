/*********************
 * Basic example of async code in ES5 
 
        const second = () => {
            setTimeout(() => {
                console.log('Async Hey there');
            }, 2000);
        }

        const first = () => {
            console.log('Hey there');
            second();
            console.log('The end');
        }

        first();
*/

/*******************************
 * Callback Hell in ES5
 

function getRecipe() {
    setTimeout(() => {
        const recipeID = [523 ,883 ,432 ,974];
        console.log(recipeID);

        setTimeout(id => {
            const recipe = { title: 'Fresh tomato pasta', publisher: 'Jonas'};
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe2 = { title: 'Italian Pizza', publisher};
                console.log(recipe2);
            }, 1500, recipe.publisher);

        }, 1500, recipeID[2]);

    }, 1500);
}
    getRecipe();
*/

/********************************
 * Promises in ES6


const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523 ,883 ,432 ,974]);
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = { title: 'Fresh tomato pasta', publisher: 'Jonas'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe2 = { title: 'Italian Pizza', publisher};
            resolve(recipe2);
        }, 1500,  publisher);
    });
};
*/ 
// consume Promises in ES6

/*
getIDs
.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
})
.then(recipe => {
    console.log(recipe);
    return getRelated('Jonas');
})
.then(recipe => {
    console.log(recipe);
})
.catch(error => {
    console.log(error);
});
*/


/*********************************
 * consume Promises in ES8
 * Async / Await 
 

 async function getRecipesAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Jonas');
    console.log(related);

    return recipe;
 }

 getRecipesAW().then(result => console.log(`${result} is the best ever!`));
 
 */


/********************************
 * AJAX Calls with Fetch and Promises
 */

