import LSC from './LSC';

export default class Likes{
    constructor() {
        this.likes = [];
    }

    addLike(id, title, author, img){
        const like = { id, title, author, img};
        this.likes.push(like);

        // Persist data in localStorage
        LSC('likes', true, JSON.stringify(this.likes));

        return like;
    }

    deleteLike(id){
        const index = this.likes.findIndex(e => e.id === id);
        this.likes.splice(index, 1);

        // Persist data in localStorage
        LSC('likes', true, JSON.stringify(this.likes));
    }

    isLiked(id){
        return this.likes.findIndex(e => e.id === id) !== -1;
    }

    getNumLikes(){
        return this.likes.length;
    }
}