// 1. Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example. If you try to add, subtract, or dot two vectors with different lengths, you must throw an error. Also provide: a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' an equals method, to check that two vectors that have the same components are equal.
// var a = new Vector([1, 2, 3]);
// var b = new Vector([3, 4, 5]);
// var c = new Vector([5, 6, 7, 8]);
// a.add(b); // should return a new Vector([4, 6, 8])
// a.subtract(b); // should return a new Vector([-2, -2, -2])
// a.dot(b); // should return 1*3 + 2*4 + 3*5 = 26
// a.norm(); // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// a.add(c); // throws an error
class Vector {
  constructor(array1) {
    this.value = array1;
  }

  add(array2) {
    if (this.value.length !== array2.value.length) {
      throw new Error('Wrong array\'s length!');
    }

    let result = [];
    for (let i = 0; i < this.value.length; i++) {
      result[i] = this.value[i] + array2.value[i];
    }

    return new Vector(result);
  }

  subtract(array2) {
    if (this.value.length !== array2.value.length) {
      throw new Error('Wrong array\'s length!');
    }

    let result = [];
    for (let i = 0; i < this.value.length; i++) {
      result[i] = this.value[i] - array2.value[i];
    }

    return new Vector(result);
  }

  dot(array2) {
    if (this.value.length !== array2.value.length) {
      throw new Error('Wrong array\'s length!');
    }

    let result = 0;
    for (let i = 0; i < this.value.length; i++) {
      result += this.value[i] * array2.value[i];
    }

    return result;
  }

  norm() {
    let result = 0;
    for (let i = 0; i < this.value.length; i++) {
      result += this.value[i] ** 2;
    }

    return Math.sqrt(result);
  }

  toString() {
    return `(${this.value.join(',')})`;
  }

  equals(array2) {
    if (this.value.length !== array2.value.length) {
      return false;
    }

    for (let i = 0; i < this.value.length; i++) {
      if (this.value[i] === array2.value[i]) {
        return true;
      }
    }

    return false;
  }
}

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);
a.dot(b);
a.equals(b);

// 2. Write a myNew function that replicates all the behavior of the new operator. This function should take one function parameter (the constructor), plus an unknown number of additional parameters of any type (arguments for the constructor). When invoked, myNew should do everything new does and return the same object new would evaluate to, as specified below:
// var john = myNew(Person, 'John', 30); // should work the same as:
// var john = new Person('John', 30);

//Note: use the code below for your task:
function Person(name, age) {
  this.name = name;
	this.age = age;
}

Person.prototype.introduce = function(){
    return 'My name is ' + this.name + ' and I am ' + this.age;
};

var john = new Person('John', 30);
var jack = new Person('Jack', 40);

console.log(john.introduce()); //My name is John and I am 30
console.log(jack.introduce()); //My name is Jack and I am 40


function myNew(Constructor, ...args) {
  const instance = Object.create(Constructor.prototype);//новый объект, задали прототип с методами и свойством constructor
  const result = instance.constructor(...args); //Мы можем использовать свойство constructor существующего объекта для создания нового с параметрами.

  if (typeof result === 'object') { //если это объект(создан от объекта) - возвращаем этот объект явно
    return result;
  }

  return instance;
}

let pete = myNew(Person, 'Pete', 30);
console.log(pete.introduce()); //My name is Pete and I am 30

