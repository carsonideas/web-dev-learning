# JavaScript Coding Challenge: FizzBuzz

## Challenge Description

Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

## Learning Objectives
- Practice conditional statements
- Work with loops
- Understand modulo operator
- Implement a classic programming challenge

## Step-by-Step Solution Guide

### Step 1: Set up the loop

First, we need to create a loop that counts from 1 to 100:

```javascript
for (let i = 1; i <= 100; i++) {
  // Code will go here
}
```

### Step 2: Implement the conditional logic

Now, we need to check if the number is divisible by 3, 5, or both:

```javascript
for (let i = 1; i <= 100; i++) {
  // Check if the number is divisible by both 3 and 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  // Check if the number is divisible by 3
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  // Check if the number is divisible by 5
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  // If none of the above conditions are met, print the number
  else {
    console.log(i);
  }
}
```

### Step 3: Optimize the solution (optional)

We can make our solution more efficient by checking for divisibility by both 3 and 5 first:

```javascript
for (let i = 1; i <= 100; i++) {
  let output = "";
  
  if (i % 3 === 0) {
    output += "Fizz";
  }
  
  if (i % 5 === 0) {
    output += "Buzz";
  }
  
  console.log(output || i);
}
```

This approach builds the output string based on the conditions and only prints the number if no conditions are met.

## Try It Yourself

Now it's your turn! Try implementing the FizzBuzz challenge on your own. Here's a template to get you started:

```javascript
// Your FizzBuzz solution here
function fizzBuzz() {
  // Write your code here
}

fizzBuzz();
```

## Common Mistakes to Avoid

1. **Order of conditions**: Make sure to check for divisibility by both 3 and 5 first, otherwise numbers like 15 will only match the first condition they meet.

2. **Using the wrong operator**: Remember that `%` (modulo) gives you the remainder after division, not the result of division.

3. **Off-by-one errors**: Make sure your loop starts at 1 and goes up to and including 100.

4. **Forgetting to output the number**: If a number isn't divisible by 3 or 5, you should output the number itself.

## Variations to Try

Once you've completed the basic challenge, try these variations:

1. **Custom range**: Allow the function to accept start and end parameters instead of hardcoding 1 to 100.

2. **Custom divisors**: Allow the function to accept custom divisors and words instead of just 3/5 and Fizz/Buzz.

3. **Return instead of console.log**: Modify the function to return an array of results instead of printing them.

4. **DOM manipulation**: Create a web page that displays the FizzBuzz results in a formatted list.

## Solution

Here's the complete solution:

```javascript
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
```

Or the optimized version:

```javascript
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = "";
    
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    
    console.log(output || i);
  }
}

fizzBuzz();
```

Happy coding!
