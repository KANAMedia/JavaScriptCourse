import axios from 'axios';
import { key } from '../config';

export default class Search {
    constructor(query){
        this.query = query;
    }
    
    async getResults() {
        /*************************************************
        Current API Plan: Free 
        Usage: 0 / 50 
        API Key: e192d2c1859b86e2b320ab4f1dbb9418 
        API link: https://www.food2fork.com/api/search
        */
        
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch(error) {
            alert(error);
        }
    }
}