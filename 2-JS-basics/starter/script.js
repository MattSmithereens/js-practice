// quiz #1, Basic Operators

// let johnHeight = 1.78;
// let johnWeight = 82;
// let markHeight = 1.84;
// let markWeight = 90;

// let johnBMI = johnWeight / (Math.pow(johnHeight, 2));
// let markBMI = markWeight / Math.pow(markHeight, 2);

// let johnBiggerThanMark = johnBMI > markBMI;

// console.log("John's BMI is " + johnBMI);
// console.log("Mark's BMI is " + markBMI);

// console.log("is John's BMI higher than Mark's? " + johnBiggerThanMark);

// quiz #2, Equality Operators

// let johnScores = [91, 120, 103];
// let mikeScores = [117, 100, 123];
// let maryScores = [94, 134, 105];

// function getSum(total, num) {
//   return total + num;
// }

// let johnAvg = Math.floor((johnScores.reduce(getSum)) / 3);
// let mikeAvg = Math.floor((mikeScores.reduce(getSum)) / 3);
// let maryAvg = Math.floor((maryScores.reduce(getSum)) / 3);

// //console.log('John = ' + johnAvg + "Mike = " + mikeAvg + 'Mary = ' + maryAvg);

// if (johnAvg > mikeAvg && johnAvg > maryAvg) {
//   console.log('John is the winner with a score of ' + johnAvg);
// } else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
//   console.log('Mike is the winner with a score of ' + mikeAvg);
// } else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
//   console.log('Mary is the winner with a score of ' + maryAvg);
// } else {
//   console.log('there appears to be a tie.  The scores are: John: ' + johnAvg + ', Mike: ' + mikeAvg + ', Mary ' + maryAvg);
// }

// Function lesson

// function calculateAge(birthYear) {
//   return 2019 - birthYear;
// }

// let ageMatt = calculateAge(1975);
// let ageCoco = calculateAge(1977);
// console.log(ageMatt + ", " + ageCoco);

// function yearsUntilRetirement(year, firstName) {
//   let age = calculateAge(year);
//   let retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(firstName + ' retires in ' + retirement + ' years.');
//   } else {
//     console.log('Why is ' + firstName + ' still working?');
//   }

// }

// yearsUntilRetirement(1975, 'Matt');
// yearsUntilRetirement(1945, 'Pete');

// Function Statements and Expressions

// function declaration:
// function WhatDoYouDo(job, firstName) { 

// function expression
// let WhatDoYouDo = function (job, firstName) {
//   if (job === 'teacher') {
//     return firstName + ' is a teacher';
//   } else if (job === 'bike mechanic') {
//     return firstName + ' is underpaid to fix shitbox bikes';
//   } else {
//     return firstName + ' does something else';
//   }
// }

// console.log(WhatDoYouDo('bike mechanic', 'Matt'));
// console.log(WhatDoYouDo('teacher', 'Dick'));
// console.log(WhatDoYouDo('fluffer', 'Harry'));

// arrays

//initialize new array
// let names = ['Tom', 'Dick', 'Harry'];
// let years = new Array(1990, 1969, 1948);

// Coding Challenge #3

// let calculateTip = function (bill) {          //initialize function and pass bill argument//
//   let percentage;                             //initialize percentage variable
//   if (bill > 0 && bill <= 50) {
//     percentage = .2;
//   } else if (bill > 50 && bill < 200) {
//     percentage = .15;
//   } else if (bill >= 200) {
//     percentage = .1;
//   } else {
//     alert('nope');
//   }
//   return bill * percentage;
// }

// let bills = [124, 48, 268];                   //initialize bill array
// let tips = [
//   parseFloat(calculateTip(bills[0]).toFixed(2)),
//   parseFloat(calculateTip(bills[1]).toFixed(2)),
//   parseFloat(calculateTip(bills[2]).toFixed(2))];

// let totalBill = [
//   bills[0] + calculateTip(bills[0]),
//   bills[1] + calculateTip(bills[1]),
//   bills[2] + calculateTip(bills[2])];

// console.log(tips);
// console.log(totalBill);

// object literal
// let john = {
//   firstName: 'john',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob'],
//   job: 'teacher',
//   isMarried: false,
//   age: function (birthYear) {
//     this.age = 2019 - this.birthYear;
//   }
// };

// const thisYear = new Date();
// console.log(thisYear.getFullYear() - john.birthYear);

//Quiz #4: objects

// let John = {
//   first: 'John',
//   last: 'Holmes',
//   height: 1.78,
//   weight: 82,
//   fakeBMI: 28,
//   bmi: function () {
//     return (this.weight / (this.height * this.height)).toFixed(2);
//   }
// };

// let Mark = {
//   first: 'Marky',
//   last: 'Mark',
//   height: 1.84,
//   weight: 90,
//   fakeBMI: 29,
//   bmi: function () {
//     return (this.weight / (this.height * this.height)).toFixed(2);
//   }
// };

// let BMICompare = function () {
//   if (John.bmi() > Mark.bmi()) {
//     return John.first + ' ' + John.last + ' has a larger BMI since his is ' + John.bmi();
//   }
//   else {
//     return Mark.first + ' ' + Mark.last + ' has a larger BMI since his is ' + Mark.bmi();
//   }
// }

// console.log('John BMI ' + John.bmi());
// console.log('Mark BMI ' + Mark.bmi());
// console.log(BMICompare(John, Mark));

// Loops

// for (var i = 0; i < 10; i++) {    // for each variable starting with 0 and ending in 9, count up by 1
//   console.log(i);
// }

// let john = [
//   'John',
//   'Smith',
//   1990,
//   'designer',
//   'another element'
// ]

// // for loop
// // for (var i = 0; i < john.length; i++) {   // for each element in john starting at 0, as long as it's less than the length of array 'john' increment up by 1
// //   console.log(john[i]);
// // }

// // while loop
// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// };

