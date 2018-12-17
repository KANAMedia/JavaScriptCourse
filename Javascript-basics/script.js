/*************************
 * Variables and data types
 */

/*

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var john$mark = 'John and Mark';

*/

/******************************
 * Variable mutation and type coercion
 */

 /*
 
 var firstName = 'John';
 var age = 28;

 //Type coercion
 console.log(firstName + ' ' + age);

 var job, isMarried;
 job = 'teacher';
 isMarried = false;

 console.log(firstName + 'is a ' + age + 'year old ' + job + '. Is he married? ' + isMarried);

 // Variable mutation
 age = 'twenty eight';
 job = 'driver';

 alert(firstName + ' is a ' + age + 'year old ' + job + '. Is he married? ' + isMarried);

 var lastName = prompt('What is his last Name?');
 console.log(firstName + ' ' + lastName);
 
 */

 /*********************************
  * Basic operators
  */

/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark  is older then John');
var x;
console.log(typeof x);
*/

/***********************
 * Operator precedence
 */

/*
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 // Multiple operators
 var isFullAge = now - yearJohn >= fullAge;
 console.log(isFullAge);

 //Grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);

 // Multiple assignments
 var x, y;
 x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
 console.log(x, y);

 // More operators
  x *= 2;
  console.log(x);
  x += 10;
  console.log(x);
  x++
  console.log(x);
  x--
  console.log(x);
  */

  /***********************
   * Coding Challenge 1
   */

/*
  var MarkMass, JohnMass, MarkHeight, JohnHeight;

  MarkMass = 80; // kg
  JohnMass = 120; // kg
  MarkHeight = 1.80; // meters
  JohnHeight = 2.10; // meters

  var JohnBMI = JohnMass / (JohnHeight * JohnHeight);
  console.log(JohnBMI);
  var MarkBMI = MarkMass / ( MarkHeight * MarkHeight);
  console.log(MarkBMI);

  var BMICompare = MarkBMI > JohnBMI;
  console.log( 'Is Mark\'s BMI higher than John\'s? ' + BMICompare );
*/

/***************************
 *  If / else statements
 */
/*

 var firstName = 'John';
 var civilStatus = 'single';

 if(civilStatus === 'married'){
     console.log(firstName + ' is married!');
 } else {
     console.log(firstName + ' will hopefully marry soon :)');
 }

 var isMarried = true;
 if(isMarried){
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var MarkMass, JohnMass, MarkHeight, JohnHeight;

MarkMass = 80; // kg
JohnMass = 120; // kg
MarkHeight = 1.80; // meters
JohnHeight = 2.10; // meters

var JohnBMI = JohnMass / (JohnHeight * JohnHeight);
console.log(JohnBMI);
var MarkBMI = MarkMass / ( MarkHeight * MarkHeight);
console.log(MarkBMI);

if(MarkBMI > JohnBMI) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Marks\'s.');
}

// var BMICompare = MarkBMI > JohnBMI;
// console.log( 'Is Mark\'s BMI higher than John\'s? ' + BMICompare );
*/

/*****************
 *  Boolean logic
 */
/*

 var firstName = 'John';
 var age = 22;

 if (age < 13) {
     console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Between 13 and 20 = age >= 13 AND age < 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) { 
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
 }

 */

 /*******************************************
  * The Ternary Operator and Switch Statements
  */
/*
  var firstName = 'John';
  var age = 14;

  // Ternary operator
  age >= 18 ? console.log(firstName + ' drinks beer.')
  : console.log(firstName + ' drinks juice.');

  var drink = age >= 18 ? 'beer' : 'juice';
  console.log(drink);

  /*
  if (age >= 18) {
      var drink = 'beer';
  } else {
      var drink = 'juice';
  }
  */
/*
  // Switch statement
  var job = 'instructor';

  switch(job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
  }

    var age = 33;

    switch(true) {
        case age < 13:
            console.log(firstName + ' is a boy.');
            break;
        case age >= 13 && age < 20:
            console.log(firstName + ' is a teenager.');
            break;
        case age >= 20 && age < 30:
            console.log(firstName + ' is a young man.');
            break;
        default:
            console.log(firstName + ' is a man.');
    }
*/
  /*
 var firstName = 'John';
 var age = 22;

 if (age < 13) {
     console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { 
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) { 
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
 }
 */

 /**************************************************
  * Truthy and Falsy values and equality operators
  */

  // falsy values: undefined, null, 0, '' --> empty Strings, NaN
  // truthy values: NOT falsy values
/*
  var height;

  if (height) {
      console.log('Variable is defined');
  } else {
      console.log('Variable has NOT been defined');
  }

  // Equality operators
  var height;
  height = 23;

  if (height == '23'){
      console.log('The == operator does type coercion!');
  }

  */

  /***************************
   *  CODING CHALLENGE 2
   */
/*
   var scoreGame1John = 89;
   var scoreGame2John = 1220;
   var scoreGame3John = 103;
   var AVGScoreJohn
 
   var scoreGame1Mike = 129;
   var scoreGame2Mike = 94;
   var scoreGame3Mike = 123;
   var AVGScoreMike
  
   var scoreGame1Mary = 97;
   var scoreGame2Mary = 134;
   var scoreGame3Mary = 105;
   var AVGScoreMary

   AVGScoreJohn = (scoreGame1John + scoreGame2John + scoreGame3John) / 3;
   AVGScoreMike = (scoreGame1Mike + scoreGame2Mike + scoreGame3Mike) / 3;
   AVGScoreMary = (scoreGame1Mary + scoreGame2Mary + scoreGame3Mary) / 3;
   console.log(AVGScoreJohn, AVGScoreMike, AVGScoreMary);
*/
/*
   // Meine Lösung ---> BUG: Wenn 2 die selben Punkte haben wird einfach einer zum Gewinner.
    if (AVGScoreJohn > AVGScoreMike && AVGScoreJohn > AVGScoreMary) {
        console.log('John is the average winner! with an average Score of ' + AVGScoreJohn);
    } else if (AVGScoreMary > AVGScoreJohn && AVGScoreMary > AVGScoreMike) {
        console.log('Mary is the average winner! with an average Score of ' + AVGScoreJohn);
    } else if ( AVGScoreJohn === AVGScoreMike && AVGScoreJohn === AVGScoreMary 
                && AVGScoreMike === AVGScoreJohn && AVGScoreMike === AVGScoreMary ) {
        console.log('John, Mike and Mary hafe the same average Score wow! --> ' + AVGScoreJohn);
   } else {
    console.log('Mike is the average winner! with an average Score of ' + AVGScoreMike);
   }
*/

   // Jonas Lösung
/*
   if (AVGScoreJohn > AVGScoreMike && AVGScoreJohn > AVGScoreMary) {
    console.log('John is the average winner! with an average Score of ' + AVGScoreJohn);
}  else if (AVGScoreMary > AVGScoreJohn && AVGScoreMary > AVGScoreMike) {
    console.log('Mary is the average winner! with an average Score of ' + AVGScoreJohn);
}  else if (AVGScoreMike > AVGScoreJohn && AVGScoreMike > AVGScoreMary) {
    console.log('Mary is the average winner! with an average Score of ' + AVGScoreJohn);
} else {
    console.log('There is a draw');
}
*/

/*******************************
 * Functions
 */
/*
 
 function calculateAge(birthYear) {
     return 2018 - birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);

 console.log(ageJohn, ageMike, ageJane);

 function yearsUntilRetirement(year, firstName) {
     var age = calculateAge(year);
     var retirement = 65 - age;

     if(retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
     } else {
         console.log(firstName + ' is already retired.');
     }
 }

 yearsUntilRetirement(1990, 'John');
 yearsUntilRetirement(1948, 'Mike');
 yearsUntilRetirement(1969, 'Jane');

*/

 /***************************************
  * Function Statements and Expressions
  */
/*
    // Function declaration
    // function whatDoYouDo(job, firstName) {} 

    // Function expression
    var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
  }

  console.log(whatDoYouDo('teacher', 'John'));
  console.log(whatDoYouDo('designer', 'Jane'));
  console.log(whatDoYouDo('retired', 'Mark'));

  */

  /***************************
   * Arrays
   */
  /*
   // Initialize new array
   var names = ['John', 'Mark', 'Jane'];
   var years = new Array(1990, 1969, 1948);

   console.log(names[2]);
   console.log(names.length);

   // Mutate array data
   names[1] = 'Ben';
   names[names.length] = 'Mary';
   console.log(names);

   // Different data types
   var john = ['John', 'Smith', 1990, 'designer', false];
   
   // Array Methods
   // adds to the end
   john.push('blue');
   // adds to the beginning
   john.unshift('Mr.');
   console.log(john);
   
   // removes from the end
   john.pop();
   john.pop();
   // removes from the beginning
   john.shift();
   console.log(john);

   // Searchs for stuff in the array --> if the stuff is not in the array it returns -1
   console.log(john.indexOf(23));
  // usefull vor something like this
   var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
   console.log(isDesigner);
   */

   /****************************
    * CODING CHALLENGE 3
    */
/*
    function tipCalculator(arrayName) {
        console.log('executed');
        var i = 0;
        var outputTipsOnly = [];
        var outputBillsComplete = [];

        while (i <= (arrayName.length - 1)) {
            console.log('looping');
            if(arrayName[i] < 50){
                // 20% less 50
                outputTipsOnly.push((arrayName[i] * .2).toFixed(2));
                outputBillsComplete.push((arrayName[i] * 1.2).toFixed(2));
                console.log('less 50');
                i++;
            } else if(arrayName[i] >= 50 && arrayName[i] <= 200){
                // 15%  50 - 200
                outputTipsOnly.push((arrayName[i] * .15).toFixed(2)); 
                outputBillsComplete.push((arrayName[i] * 1.15).toFixed(2));
                console.log('50 - 200');
                i++;
            } else{
                // 10% >200
                outputTipsOnly.push((arrayName[i] * .1).toFixed(2));
                outputBillsComplete.push((arrayName[i] * 1.1).toFixed(2));
                console.log('200+');
                i++;
            }
        }  
            return console.log(outputTipsOnly, outputBillsComplete);
    } 
    
    var bills = [124, 48, 268];
    tipCalculator(bills);
    */

    /****************************
     * Objects and properties
     */
/*
// Initialize new Object
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

// Access object data
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

// Mutate object data
john.job = 'designer';
john['isMarried'] = true;
console.log(john);
*/

/****************************
 * Objects and methods
 */
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/****************************
 * CODING CHALLENGE 4
 */
/*
 var Mark = {
     name: 'Mark',
     mass: 78,
     height: 1.69,
     calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
     }
 };

 var John = {
     name: 'John',
     mass: 110,
     height: 1.95,
     calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
     }
 };

 if(John.calcBMI() > Mark.calcBMI()) {
     console.log( John.name + ' has a higher BMI of ' + John.BMI);
 } else if (Mark.BMI > John.BMI) {
    console.log( Mark.name + ' has a higher BMI of ' + Mark.BMI);
 } else {
     console.log('They hafe the same BMI');
 }
 */

 /**************************************
  * Loops and iteration
  */
/*
  // For loop
  for (var i = 1; i <= 20; i += 2) {
    console.log(i);
  }

  // i = 0, 0 < 10 true, log i to console, i++
  // i = 1, 1 < 10 true, log i to console, i++
  // ...
  // i = 9, 9 < 10 true, log i to console, i++
  // i = 10, 10 < 10 FALSE, exit the loop!

  var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

  for (var i = 0; i < john.length; i++){
    console.log(john[i]);
  }

  // While loop
  var i = 0;
  while (i < john.length) {
      console.log(john[i]);
      i++;
  }



  // continue and break statements
  var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

  // continue --> skips the current iteration
  for (var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string') continue; // <--- ifs können wenn sie in einer Zeile stehen ohne { Geschweifteklammern} geschrieben werden.
    console.log(john[i]);
  }

  // break --> stops the loop
  for (var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
  }

  // Looping backwards
  for (var i = john.length - 1; i >= 0; i--){
    console.log(john[i]);
  }

 */ 