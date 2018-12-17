// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log( 2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2018 - this.yearofBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearofBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
   name: { value: 'Jane' },
   yearofBirth: { value: 1969 },
   job: { value: 'designer' }
});
*/

// Primitives vs. objects
/*
// Primitves
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

/***********************************
 * Passing functions as arguments
 */
/*
 var years = [1990, 1965, 1937, 2005, 1998];

 function arrayCalc(arr, fn) {
     var arrRes = [];
     for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
     }
     return arrRes;
 }

 function calculateAge(el) {
     return 2018 - el;
 }

function isFullAge(el) {
    return el >= 18;
}

function maxHardRate(el) {
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

 var ages = arrayCalc(years, calculateAge);
 var fullAges = arrayCalc(ages, isFullAge);
 var rates = arrayCalc(ages, maxHardRate);

 console.log(ages);
 console.log(fullAges);
 console.log(rates);
 */

 /*****************************
  * Functions returning functions
  */
/*
function interviewQuestion(job) {
    if ( job === 'designer') {
        return function(name) {
            console.log(name + ', can you pleas explain what UX design is?');
        } 
    } else if ( job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/

/******************************
 * IIFE
 */

/*
 // The default way

 function game() {
     var score = Math.random() * 10;
     console.log(score >= 5);
 }

 game();


 (function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
 })();

 //console.log(score); <-- error

 (function (goodLuck) { // <--- Arguments are possible
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
 })(5); // <-- Argument added here

 */

/************************
 * Closures
 */
/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990); // retirement(66)(1990); <-- no need to use the reirementUS var
retirementGermany(1990);
retirementIceland(1990);



// The non closure way

function interviewQuestion(job) {
    if ( job === 'designer') {
        return function(name) {
            console.log(name + ', can you pleas explain what UX design is?');
        } 
    } else if ( job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello' + name + ', what do you do?');
        }
    }
}


// the closure way

function interviewQuestion(job) {
    return function(name){
        if ( job === 'designer') {
            console.log(name + ', can you pleas explain what UX design is?');
            } else if ( job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
*/

/************************************
 * Bind, call and apply
 */

/*
 var john = {
     name: 'John',
     age: 26,
     job: 'teacher',
     presentation:  function(style, timeOfDay) {
         if (style === 'formal'){
            console.log(`Good ${timeOfDay}, Ladies and Gentlemen! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old.`);
         } else if (style == 'friendly') {
             console.log(`Hey! What's up? I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${timeOfDay}.`);
         }
     }
 }

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

 john.presentation('formal', 'morning');

 john.presentation.call(emily, 'friendly', 'afternoon');

 john.presentation.apply(emily, ['friendly', 'afternoon']);

 var johnFriendly = john.presentation.bind(john, 'friendly');

 johnFriendly('morning');
 johnFriendly('night');

 var emilyFormal = john.presentation.bind(emily, 'formal');
 emilyFormal('afternoon');



 var years = [1990, 1965, 1937, 2005, 1998];

 function arrayCalc(arr, fn) {
     var arrRes = [];
     for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
     }
     return arrRes;
 }

 function calculateAge(el) {
     return 2018 - el;
 }

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

/***************************
 * CODING CHALLENGE 7
 */
(function() {

    var isgaming = true;

    var player = {
        name: 'Gustaf',
        score: 0
    }

    var Question = function(question, answers, solution){
        this.question = question;
        this.answers = answers;
        this.solution = solution;
    }

    Question.prototype.showAnswers = function(){
        this.answers.forEach(i => {
            console.log(i);
        }); 
    }

    Question.prototype.checkSolution = function(){
        if (this.solution == userInput){
            console.log('Right answer! congrats!');
            return function addscore(){
                player.score += 1;
                console.log(`----------------`);
                console.log(`SCORE: ${player.score}`);
                console.log(`----------------`);
            }   
        } else if( userInput === 'exit'){
                isgaming = false;
                return function addscore(){
                    player.score += 0;
                    console.log(`----------------`);
                    console.log(`Okay bye ${player.name}! :)`);
                    console.log(`----------------`);
                    console.log(`SCORE: ${player.score}`);
                    console.log(`----------------`);
                }   
        } else {
            console.log('Sry not right, try again :)!')
            return function addscore(){
                player.score += 0;
                console.log(`----------------`);
                console.log(`SCORE: ${player.score}`);
                console.log(`----------------`);
            }
        }
    }

    Question.prototype.showQuestion = function(){
        console.log(this.question);
    }
    
    function randomQuestion() {
        var questions = [question1, question2, question3, question4];
        var random = Math.floor(Math.random() * questions.length);
        
        return questions[random];
    }
    
    var question1 = new Question('How many GB are one TB?',['1: 1GB', '2: 100GB', '3: 1000GB'], 3);
    var question2 = new Question(`Name the world's biggest island.`,['1: Greenland', '2: Majorca', '3: Mainau'], 1);
    var question3 = new Question(`What is the world's longest river?`,['1: Nile', '2: Amazon', '3: Volga'], 2);
    var question4 = new Question(`If you had Lafite-Rothschild on your dinner table, what would it be?`,['1: Wine', '2: Ham', '3: Vegetables'], 1);

    while(isgaming === true){
        
        // select a random question
        var question = randomQuestion();
        question.showQuestion();
        question.showAnswers();

        // get the user input
        var userInput = prompt('Please select the correct answer.');

        question.checkSolution()();
        
    }
})();