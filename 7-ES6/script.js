/***************************
 * let and const
 */

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6  = '23';
name6 = 'Jane Miller';
console.log(name6);
*/

/*
// ES5
function driversLicence5(passedTest) {

    if(passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence5(true);

// ES6
function driversLicence6(passedTest) {

    if(passedTest) {
        let firstName = 'John';
        const yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true);
*/

/*
let i = 23;

for (let i = 0; i < 5; i++){
    console.log(i);
}
console.log(i);
*/



/**********************
 * Blocks and IIFEs
 */

 /*
// ES5
(function(){
    var c = 3;
})();

//console.log(c);


// ES6
{
    const a = 1;
    let b = 2;
}

// console.log(a + b);
*/



/*********************
 * Strings
 */

 /*
 let firstName = 'John';
 let lastName = 'Smith';
 const yearOfBirth = 1990;
 
 function calcAge(year) {
     return 2016 - year;
 }

 // ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));
*/

/***********************
 * Arrow functions
 */

 /*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el){
    return 2016 - el;
});
console.log(ages5);


// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, i) => `Age element ${i +1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, i) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${i +1}: ${age}.`
});
console.log(ages6);
*/

// -- Arrow functions THIS -- //
/*
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
         var self = this;

        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position + ' and it is '  + self.color;
            alert(str);
        });
    }
}

 box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is '  + this.color;
            alert(str);
        });
    }
}

 box6.clickMe();


const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is '  + this.color;
            alert(str);
        });
    }
}

box66.clickMe();


// Function constructor Beispiel

function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends){
    
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);

}

 var friends = ['Bob', 'Jane', 'Mark'];
 new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends){
    
    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);

}

new Person('Mike').myFriends6(friends);
*/


/**********************
 * Destructuring
 */

 /*
 // ES5
 var john5 = ['John', 26];
 var name5 = john5[0];
 var age5 = john5[1];


 // ES6
 const [name6, age6] = ['John', 26];
 console.log(name6);
 console.log(age6);

 const obj = {
     firstName: 'John',
     lastName: 'Smith'
 };

 const {firstName, lastName} = obj;
 console.log(firstName, lastName);

 const {firstName: a, lastName: b} = obj;
 console.log(a, b);


 function calcAgeRetirement(year) {
     const age = new Date().getUTCFullYear() - year;
     return [age, 65 - age];
 }

 const [age2, retirement] = calcAgeRetirement(1990);
 console.log(age2);
 console.log(retirement);
 */


 /**************************
  * Arrays
  */

/*
const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});


// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// ES5
for(var i = 0; i < boxesArr5.length; i++){
    
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';

}


// ES6
for(const cur of boxesArr6) {
    if (cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue!';
}


// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur){
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

*/



/*************************************
 * Spread operator
 */

 /*
function addFourAges(a,b,c,d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];

var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

// Join Arrays
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

// Node Lists
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.backgroundColor = '#4f4f4f');
*/



/**************************************
 * Rest parameters
 */

 /*

// ES5
function isFullAge5() {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    var now = new Date();
    var year = now.getFullYear();

    argsArr.forEach(function(cur){
        console.log((year - cur) >= 18);
    });
}

// isFullAge5(1990, 1999, 1965, 2016, 1987);


// ES6
function isFullAge6(...years){
    var now = new Date();
    var year = now.getFullYear();
    years.forEach(cur => {
        console.log((year - cur) >= 18);
    });
}

isFullAge6(1990, 1999, 1965, 2016, 1987);



// ES5
function isFullAge5(limit) {
     console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    var now = new Date();
    var year = now.getFullYear();

    argsArr.forEach(function(cur){
        console.log((year - cur) >= limit);
    });
}

 isFullAge5(16, 1990, 1999, 1965, 2016, 1987);


// ES6
function isFullAge6(limit, ...years){
    var now = new Date();
    var year = now.getFullYear();
    years.forEach(cur => {
        console.log((year - cur) >= limit);
    });
}

// isFullAge6(16, 1990, 1999, 1965, 2016, 1987);

*/

 /***********************************
  * Default parameters
  */
/*

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}



// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

*/

/******************************
 * Maps


const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, pleas try again! :)');

// console.log(question.get('question'));
// console.log(question);
// console.log(question.size);

if(question.has(4)) {
   //  question.delete(4);
   // console.log('Answer 4 is here');
}

 // question.clear();

 // question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}.`));

for (let [key, value] of question.entries()) {
    if(typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

 const ans = parseInt(prompt('Write the correct answer'));

 console.log(question.get(ans === question.get('correct')));

  */

/**********************************
 * Classes
 

// ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calcAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calcAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();

*/

/*********************************
 * Classes and subclasses

// ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calcAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calcAge();
johnAthlete5.wonMedal();


// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calcAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.calcAge();
johnAthlete6.wonMedal();

*/

/**************************************
 * CODING CHALLANGE 8 ---> OWN SOLUTION
 

class Park {
    constructor(name, buildYear, trees, area) {
        this.name = name;
        this.buildYear = buildYear;
        this.trees = trees;
        this.treeDensity = -1;
        this.area = area;
    }

    calcTreeDensity() {
        this.treeDensity = Math.round(this.trees / this.area); 
    }

    static calcAvgAge(data, parksKey) {
        // calc total age
        data.get(parksKey).forEach(e => {
            data.set('parksTotalAge', data.get('parksTotalAge') + (new Date().getFullYear()) - e.buildYear);         
        });
        
        // calc avg age
        data.set('parksAvgAge', data.get('parksTotalAge') / data.get(parksKey).length);
    }

    static getParkMore1KTrees(data, parksKey) {
        data.set('parkMore1KTrees', data.get(parksKey).find( e => e.trees > 1000));
    }
}

class Street {
    constructor(name, buildYear, length, sizeClass = 'normal'){
        this.name = name;
        this.buildYear = buildYear;
        this.length = length;
        this.sizeClass = sizeClass;
    }

    generateSizeClass(){ // tiny - small - normal - big - huge
        if (this.length <= 1){ // smaller then 1km --> tiny
            this.sizeClass = 'tiny';
        } else if (this.length <= 10 && this.length > 1){ // between 2-10km small
            this.sizeClass = 'small';
        } else if (this.length <= 30 && this.length > 10){ // between 11-30km normal
            this.sizeClass = 'normal';
        } else if (this.length <= 100 && this.length > 30){ // between 31-100km big
            this.sizeClass = 'big';
        } else if (this.length > 100){ // + 100km huge
            this.sizeClass = 'huge';
        }
    }

    static calcTotalLength(data, streetsKey) {
        
        data.get(streetsKey).forEach(e => {
            data.set('streetsTotal', data.get('streetsTotal') + e.length);            
        });
    }

    static calcAvgLength(data, streetsKey, streetsTotalKey ) {
        data.set('streetsAvgLength', data.get(streetsTotalKey) / data.get(streetsKey).length);
    }
}


const park1 = new Park('Pelham Bay Park', 1888, 956, 11.19);
const park2 = new Park('Greenbelt', 1871, 557, 7.2);
const park3 = new Park('Forest Park', 1895, 1400, 2.2);

const street1 = new Street('Leyland Gardens', 1997, 19);
const street2 = new Street('Drakely Close', 1980, 200);
const street3 = new Street('Saffron Crest', 1964, 60);
const street4 = new Street('Westbrook Lane', 2014, 36);


const data = new Map();
data.set('parks', [park1, park2, park3]);
data.set('parksTotalAge', -1);
data.set('parksAvgAge', -1);

data.set('streets', [street1, street2, street3, street4]);
data.set('streetsTotal', -1);

// ###### -- Streets  START -- ######

// calc total street length
Street.calcTotalLength(data, 'streets');

// calc avg street length
Street.calcAvgLength(data, 'streets', 'streetsTotal');

// generate size classes
data.get('streets').forEach(e => e.generateSizeClass());

// ###### -- Streets END -- ######



// ###### -- Parks  START -- ######

// calc tree density
data.get('parks').forEach(e => e.calcTreeDensity());

// calc avg park age
Park.calcAvgAge(data, 'parks');

// get park with more then 1000 trees
Park.getParkMore1KTrees(data, 'parks');

// ###### -- Parks  END -- ######



// ###### -- OUTPUT -- ######

console.log(`---PARKS REPORT---`);
console.log(`Our ${data.get('parks').length} parks have an average age of ${data.get('parksAvgAge')} years.`);
data.get('parks').forEach(e => {
    console.log(`${e.name} has a tree density of ${e.treeDensity} trees per square km.`);
});
console.log(`${data.get('parkMore1KTrees').name} has more than 1000 trees!`);
console.log(``);
console.log(`---PARKS REPORT---`);
console.log(`Our ${data.get('streets').length} streets have a total length of ${data.get('streetsTotal')} km, with an average of ${data.get('streetsAvgLength')} km.` );
data.get('streets').forEach(e => console.log(`${e.name}, build in ${e.buildYear}, is a ${e.sizeClass} street.`));

*/

/**************************************
 * CODING CHALLANGE 8 ---> JONAS SOLUTION


class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element{
    constructor(name, buildYear, area, numTress){
        super(name, buildYear);
        this.area = area; // km2
        this.numTress = numTress;
    }

    treeDensity() {
        const density = this.numTress / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Element{
    constructor(name, buildYear, length, size = 3){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [
    new Park('Green Park', 1987, 0.2, 215), 
    new Park('National Park', 1894, 2.9, 3541), 
    new Park('Oak Park', 1953, 0.4, 949)
];
const allStreets = [
    new Street('Ocean Avenue', 1999, 1.1, 4), 
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5),
];

function calc(arr) {

    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    
    return [sum, sum / arr.length];

}

function reportParks(p) {

    console.log(`--- PARKS REPORT ---`);
    
    // Tree Density
    p.forEach(e => e.treeDensity());

    // Average age
    const ages = p.map(e => (new Date().getFullYear()) - e.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    // Wich park has more than 1000 trees
    const i = p.map(e => e.numTress).findIndex(e => e > 1000);
    console.log(`${p[i].name} has more then 1000 trees.`)

}

function reportStreets(s) {

    console.log(`--- STREETS REPORT ---`);

    // total and average length
    const [totalLength, avgLength] = calc(s.map(e => e.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`)

    // Classify sizes
    s.forEach(e => e.classifyStreet());

}

reportParks(allParks);
reportStreets(allStreets);
*/