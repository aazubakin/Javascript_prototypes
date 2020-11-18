function Student(name) {
  this.name = name;
}


const billy = new Student('Billy')

console.log(billy.constructor.name)
console.log(Student.prototype)

const personProto = {
  getName: function () {
    return this.name;
  }
};

const studentProto = Object.create(personProto);

studentProto.sleep = function () {

};

const bily = Object.create(studentProto);

bily.name = 'Billy'