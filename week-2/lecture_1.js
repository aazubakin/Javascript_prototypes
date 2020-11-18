'use strict'

const student = {
  name: 'Billy',
};

const person = {
  type: 'human'
}

Object.setPrototypeOf(student, person)

Object.defineProperty(student, 'gender', {
  writable: true,
  value: 'male'
});

Object.defineProperty(person, 'age', {
  set: function (age) { this._age = parseInt(age); },
  get: function () { return this._age; }
})

student.gender = 'women'
student.age = '20 years'

console.log(student.gender)
console.log(student.age)
console.log(person.hasOwnProperty('age'))
console.log(student.hasOwnProperty('age'))