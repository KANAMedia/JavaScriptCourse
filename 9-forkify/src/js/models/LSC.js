/***********************************
 * // --- LOCAL STORAGE CONTROLLER --- //
 */

// save data to local storage
const saveData = (revName, toStore) =>  {
    localStorage.setItem(revName, toStore);
};

// restore data to state from local storage
const restoreData = (revName) => {

    // check if something is stored
    if(localStorage.getItem(revName)){
        
        // parse data if its not a string
        try {
            return JSON.parse(localStorage.getItem(revName));
        }
        // don't parse data if its a string
        catch(error) {
            return localStorage.getItem(revName);
        }
    }
};



// Handle local storage
// revName  = name in local storage
// toStore  = where or what to save
// toDo     = restore(false) or store(true)?
export default (revName, toDo, toStore) => { 

    // store data to local storage
    if(toDo){
        saveData(revName, toStore);
    } 
    // restore data to state from local storage
    else{
        return restoreData(revName);
    }
};

export const isStored = (revName) => {
    if(localStorage.getItem(revName)) return true;
    return false;
};