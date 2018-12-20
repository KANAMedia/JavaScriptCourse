import uniqid from 'uniqid';
import LSC from './LSC';

export default class List {
    constructor() {
        this.items = [];
    }

    addItem(count, unit, ingredient){
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        LSC('list', true, JSON.stringify(this.items));
        return item;
    }

    deleteItem(id) {
        const index = this.items.findIndex(e => e.id === id);
        // [2,4,8] splice(1, 2) -> return [4, 8], original array is [2]
        // [2,4,8] slice(1, 2) -> return 4, original array is [2,4,8]
        this.items.splice(index, 1);
        LSC('list', true, JSON.stringify(this.items));
    }

    updateCount(id, newCount){
        this.items.find(e => e.id === id).count = newCount;
        LSC('list', true, JSON.stringify(this.items));
    }
}