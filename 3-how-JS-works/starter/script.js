///////////////////////////////////////
// Lecture: Hoisting
// Hoisting only works for function declarations

// calculateAge(1965);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }


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
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

function calculateAge(year) {
    console.log(2019 - year);
    console.log(this);
}

calculateAge(1965);

var john = {
    name: 'John',
    yearOfBirth: 1975,
    calculateAge: function () {
        console.log(this);
        console.log(2019 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();
