// the callback way
/*
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

const getPosts = function() {
    setTimeout(() => {
        posts.forEach(e => {
            console.log(e.title);
        });
    }, 1000);
}

const createPost = function(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
*/


/* // ES 5 für http://latentflip.com/loupe/
var posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(function() {
        posts.forEach(function(e) {
            console.log(e.title);
        });
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
*/

// Promises
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

const getPosts = function() {
    setTimeout(() => {
        posts.forEach(e => {
            console.log(e.title);
        });
    }, 1000);
}

const createPost = function(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = true;

            if(!error){
                resolve();
            } else {
                reject('Error: Something went wrong :(');
            }
        }, 2000);
    });
}

createPost({ title: 'Post Three', body: 'This is post three' })
.then(getPosts)
.catch(err => console.log(err));