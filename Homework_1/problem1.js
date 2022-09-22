"use strict";

let person = {
  name: "Daniel",
  sayHello: function () {
    console.log(this);
  },
  child: {
    sayHello: function () {
      console.log(this.name);
    },
  },
};

// person.sayHello(); // person object
// person.child.sayHello(); // undefined

// Solution 1 : (10 lane) change to console.log(person.name);
              
// Solution 2 : (16 lane) change to person.child.sayHello.apply(person);

// Solution 3 : (16 lane) change to person.child.sayHello.call(person);

// Solution 4 : (16 lane) person.child.sayHello.call(person)();

