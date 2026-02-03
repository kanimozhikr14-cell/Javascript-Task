// 1.
var name = prompt("Enter your name");
alert("Hi "+ name + "Welcome to Javascript Training")
console.log("Hi "+ name + ",Welcome to Javascript Training")


// 2.
console.log(500);
console.error(500);
console.warn(500);
console.clear();

// 3.
var name = "Kanimozhi"
var age = 35
var value = true;
var notDefined;
var a=null;
console.log(name, typeof name);
console.log(age, typeof age);
console.log(value, typeof value);
console.log(notDefined, typeof notDefined);
console.log(a, typeof a);

// 4.
let a = 20;
let b = 5;
console.log("Addition", a+b);
console.log("Subtraction", a-b);
console.log("Multiplication", a*b);
console.log("Division", a/b);
console.log("Modulus", a%b);
console.log("Exponent", a**b);

// 5.

let a = 5;

console.log("Pre-increment:", ++a);   // 6
console.log("Post-increment:", a++);  // 6
console.log("After post-increment a =", a); // 7

console.log("Pre-decrement:", --a);   // 6
console.log("Post-decrement:", a--);  // 6
console.log("After post-decrement a =", a); // 5

// 6.
let num = 10;
console.log("Initial value:", num);

num += 5;
console.log("Number:", num);

num -= 3;
console.log("Number:", num);

num *= 2;
console.log("Number:", num);

num /= 4;
console.log("Number:", num);

num %= 3;
console.log("Number:", num);


//7.
let language = ['HTML', 'CSS', 'JavaScript', 'React'];

console.log("First element:", language[0]);
console.log("Second element:", language[1]);
console.log("Last element:", language[language.length - 1]);
console.log("Total elements:", language.length);


// 8.
let language = ['HTML', 'CSS', 'JavaScript', 'React'];

language.push('NodeJS');
console.log("After adding element:", language);

language.pop();
console.log("After removing last element:", language);

// 9.
let student = {
  name: "Kani",
  age: 21,
  course: "JavaScript",
  city: "Chennai"
};
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);
console.log("City:", student.city);

// 10.
let company = {
  companyName: "The Stackly",
  trainer: {
    name: "Naveenkumar",
    subject: "JavaScript"
  }
};

console.log("Company Name:", company.companyName);
console.log("Trainer Name:", company.trainer.name);
console.log("Trainer Subject:", company.trainer.subject);