let johnHeight = 1.78;
let johnWeight = 82;
let markHeight = 1.84;
let markWeight = 90;

let johnBMI = johnWeight / (Math.pow(johnHeight, 2));
let markBMI = markWeight / Math.pow(markHeight, 2);

let johnBiggerThanMark = johnBMI > markBMI;

console.log("John's BMI is " + johnBMI);
console.log("Mark's BMI is " + markBMI);

console.log("is John's BMI higher than Mark's? " + johnBiggerThanMark);