///////////////////////////////////////
// Lecture: Hoisting
/*
// functions
// declaration
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}


// retirement(1956); --> error function not defined
// expression
var retirement = function(year) {
    console.log(65 - (2016 - year));
}

retirement(1956);

// Variables
console.log(age); // --> undefined
var age = 23;
console.log(age);

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/
///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain
/*

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}

*/


///////////////////////////////////////
// Lecture: The this keyword
/*
// console.log(this);


calcAge(1985);

function calcAge(year) {
    //console.log(2018 - year);
    //console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calcAge: function(year) {
        console.log(this);
        //console.log(2018 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        
    }
}

john.calcAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calcAge = john.calcAge;
//mike.calcAge();

*/

