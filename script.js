// // complete this js code
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.greet = function(){
// 	console.log(`Hello, my name is ${this.name}, I am ${this.age} year old`);
// }
// function Employee(name, age, jobTitle) {
// 	Person.call (this, name , age);
// 	this.jobTitle = jobTitle;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.jobGreet = function(){
// 	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
// };
// // Do not change code below this line
// window.Person = Person;
// window.Employee = Employee;

// Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Employee class that inherits from Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the Person constructor
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Example usage
const person = new Person("Alice", 25);
person.greet(); // Output: Hello, my name is Alice, I am 25 years old.

const employee = new Employee("Bob", 30, "Manager");
employee.greet(); // Output: Hello, my name is Bob, I am 30 years old.
employee.jobGreet(); // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.