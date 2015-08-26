function foo() {
  this.baz = "baz";
  console.log(this.bar + " " + baz); // prints undefined undefined
}

var bar = "bar";
var baz = new foo();  // ???

// What happends when a new keyword is called in JS?
//  1. A new object is created out of thin air "POOF!"
//  2. The poof object is bound/linked to another object
//  3. The poof object is bound as the this keyword
//  4. if no return out of the function, a 'return this' will be implicitly added




// Four questions to ask
// 1. Was the function called with the new keyword? // wins all the time
// 2. was it called with call or apply specifying an explicit this
// 3. was the function called via a containing/owning object 
// 4. DEFAULT: global object
 
