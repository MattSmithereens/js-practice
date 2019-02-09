// function constructor

let john = {
  name: 'John',
  yearOfBirth: 1985,
  job: 'teacher',
}

let Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  // this.calculateAge = function () {
  //   console.log(2019 - this.yearOfBirth);
  // }
}

// prototypes will add methods to constructor and children
Person.prototype.calculateAge = function () {
  console.log(2019 - this.yearOfBirth);
}

let jonny = new Person('jonny', 1990, 'teacher');
let harry = new Person('harry', 2012, 'fluffer');