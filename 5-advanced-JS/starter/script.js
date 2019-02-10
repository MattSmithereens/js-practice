// function constructor

// let john = {
//   name: 'John',
//   yearOfBirth: 1985,
//   job: 'teacher',
// }

// let Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//   // this.calculateAge = function () {
//   //   console.log(2019 - this.yearOfBirth);
//   // }
// }

// // prototypes will add methods to constructor and children
// Person.prototype.calculateAge = function () {
//   console.log(2019 - this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith';

// let jonny = new Person('jonny', 1990, 'teacher');
// let harry = new Person('harry', 2012, 'fluffer');

// Object.create

// let personProto = {
//   calculateAge: function () {
//     console.log(2016 - this.yearOfBirth);
//   }
// };

// let john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//   name: { value: 'Jane' },
//   yearOfBirth: { value: 1969 },
//   job: { value: 'designer' }
// });

// primitives vs objects

// Funcitons returning Functions

function interviewQuestion(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + 'is a designer');

    }
  }
  else if (job === 'teacher') {
    return function (name) {
      console.log(name + ' is a teacher');
    }
  }
  else {
    return function (name) {
      console.log('hello ' + name + ' what do you do?')
    }
  }
}

let teacherQuestion = interviewQuestion('teacher');
teacherQuestion('john');

let otherQuestion = interviewQuestion('fluffer');
otherQuestion('Bob');

interviewQuestion('designer')('Bilbo Baggins');