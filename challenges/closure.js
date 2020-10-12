// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: The nested function can access the variable internal because in JS, and in order for functions to obtain closure, functions can reach outside of their local scope into the outsider functions scopes or even further out into the global scope for context.
// this context could include variable declarations or the return values of other functions. For example, myFunction can access its local variables (internal) as well as global scope variables (external). nestedFunction can access its own variables, variables of myFunction as well as variables in global scope. 


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num) {
  let counter = 0;
  if (num === 0) {
    counter = 0;
  } else if (num === 1) {
    counter = 1;
  } else if(num > 0) {
    for (let i = 1; i <= num; i++) {
    counter += i;
  }
  } else {
    for (let i = num; i <= 0; i++) {
      counter += i;
    }
  }
  return counter;
}

summation(4);
summation(-4);