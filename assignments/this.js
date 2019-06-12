/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In global binding, the 'this' will = the window/console Object. In the console it will return all of  javaScripts 'under the hood' stuff.
* 2. In Impllicit binding, 'this' = the object before the dot whenever a function is called and preceded by said dot.
* 3. New binding, 'this' = the  new instance of an object created by a constructor function. the 'this' and 'new' keyword works in tandum with each other
* 4. Explicit binding 'explicitly' defines 'this' when using the .call or .apply mehtods in JavaScript.
*
* write out a code example of each explanation above
*/

// use the examples from codepen that your created from Training Kit

// ******* Principle 1

// code example for Window Binding:

// function sayHello(hello) {
//     console.log(this);
//     // return hello; //DO NOT DO THIS!!!!!!
// }
// sayHello('Hola');

// ******* Principle 2

// code example for Implicit Binding

const theObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
    }
};

theObj.sayHello('Jade')


// ******* Principle 3

// code example for New Binding

function Person(name, age, hobby) {
    this.name = name,
    this.age = age,
    this.hobby = hobby
    console.log(`This is ${name}. They are ${age} years old and their favorite hobby is 
    ${hobby}`)
}

const me  = new Person('Jade', 30, 'singing')
const david = new Person('David', 25, 'hiking')

console.log(me);
console.log(david);


// ******* Principle 4 : example from repl.it - https://repl.it/@JadeLopez/Practice-Explicit-binding

// code example for Explicit Binding

const  yourObject = {
    name:'Jade',
    age: '30',
    city: 'Colorado Springs'
}

const thingsYouEnjoy = ['Singing', 'Dancing', 'Reading']

function tellUsAboutYourself(thing1, thing2, thing3){
    return `Hi! My name is ${this.name}, I'm ${this.age}, I live in 
    ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}.`
  }

  tellUsAboutYourself.apply(yourObject,thingsYouEnjoy);