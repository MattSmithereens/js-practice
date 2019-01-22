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

function calculateAge(birthYear) {
  return 2019 - birthYear;
}

// let ageMatt = calculateAge(1975);
// let ageCoco = calculateAge(1977);
// console.log(ageMatt + ", " + ageCoco);

function yearsUntilRetirement(year, firstName) {
  let age = calculateAge(year);
  let retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log('Why is ' + firstName + ' still working?');
  }

}

yearsUntilRetirement(1975, 'Matt');
yearsUntilRetirement(1945, 'Pete');
