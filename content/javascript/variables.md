# JavaScript Variables

Variables are containers for storing data values. In JavaScript, there are several ways to declare variables, each with its own characteristics and use cases.

## What are Variables?

Think of variables as labeled boxes where you can store information that your program needs to remember. For example, you might want to store a user's name, age, or the result of a calculation.

## Declaring Variables in JavaScript

JavaScript provides three ways to declare variables:

1. `var` - The original way (pre-ES6)
2. `let` - Block-scoped variable (introduced in ES6)
3. `const` - Block-scoped constant (introduced in ES6)

Let's explore each one:

### 1. Using `var`

```javascript
var name = "John";
var age = 25;
var isStudent = true;
```

**Characteristics of `var`:**
- Function-scoped (not block-scoped)
- Can be redeclared without error
- Can be updated
- Hoisted to the top of its scope (declaration, not initialization)

**Example of `var` scope:**

```javascript
function exampleFunction() {
  var x = 10;
  if (true) {
    var x = 20;  // Same variable as above!
    console.log(x);  // Outputs: 20
  }
  console.log(x);  // Outputs: 20 (not 10!)
}
```

### 2. Using `let`

```javascript
let name = "John";
let age = 25;
let isStudent = true;
```

**Characteristics of `let`:**
- Block-scoped
- Cannot be redeclared within the same scope
- Can be updated
- Not hoisted in the same way as `var`

**Example of `let` scope:**

```javascript
function exampleFunction() {
  let x = 10;
  if (true) {
    let x = 20;  // Different variable than outside the block
    console.log(x);  // Outputs: 20
  }
  console.log(x);  // Outputs: 10
}
```

### 3. Using `const`

```javascript
const PI = 3.14159;
const MAX_USERS = 100;
const USER_ROLE = "admin";
```

**Characteristics of `const`:**
- Block-scoped
- Cannot be redeclared
- Cannot be reassigned after initialization
- Must be initialized when declared
- Not hoisted in the same way as `var`

**Example of `const`:**

```javascript
const PI = 3.14159;
// PI = 3.14; // This would cause an error: Assignment to constant variable

// However, for objects and arrays, the content can be modified:
const person = { name: "John" };
person.name = "Jane"; // This works!
person.age = 25; // This also works!

const numbers = [1, 2, 3];
numbers.push(4); // This works!
// numbers = [5, 6, 7]; // This would cause an error
```

## Variable Naming Rules

When naming variables in JavaScript, follow these rules:

1. Names can contain letters, digits, underscores, and dollar signs
2. Names must begin with a letter, $ or _ (not a number)
3. Names are case-sensitive (`myVar` and `myvar` are different variables)
4. Reserved words (like JavaScript keywords) cannot be used as names

**Examples of valid variable names:**
```javascript
let firstName = "John";
let last_name = "Doe";
let $price = 19.99;
let _counter = 0;
```

**Examples of invalid variable names:**
```javascript
let 123abc = "invalid";    // Cannot start with a number
let my-variable = "invalid"; // Hyphens are not allowed
let let = "invalid";       // Cannot use reserved keywords
```

## Variable Naming Conventions

While not enforced by JavaScript, these conventions help make your code more readable:

1. **camelCase** for variables and functions
   ```javascript
   let firstName = "John";
   let totalAmount = 99.95;
   ```

2. **PascalCase** for classes and constructor functions
   ```javascript
   class User {
     constructor(name) {
       this.name = name;
     }
   }
   ```

3. **UPPER_SNAKE_CASE** for constants
   ```javascript
   const MAX_USERS = 100;
   const API_KEY = "abc123xyz";
   ```

4. Use descriptive names that explain what the variable contains
   ```javascript
   // Good
   let userAge = 25;
   
   // Not so good
   let a = 25;
   ```

## Variable Declaration Without Assignment

You can declare variables without assigning a value. In this case, the variable will have a value of `undefined`.

```javascript
let age;
console.log(age); // Outputs: undefined

age = 25;
console.log(age); // Outputs: 25
```

## Multiple Variable Declarations

You can declare multiple variables in one statement:

```javascript
// Using let
let name = "John", age = 25, isStudent = true;

// Using const
const PI = 3.14159, MAX_USERS = 100;

// Using var
var x = 5, y = 10, z = 15;
```

However, for better readability, it's often recommended to declare each variable on its own line:

```javascript
let name = "John";
let age = 25;
let isStudent = true;
```

## Best Practices for Using Variables

1. **Use `const` by default** - If a variable doesn't need to be reassigned, use `const`
2. **Use `let` when needed** - When you need to reassign a variable, use `let`
3. **Avoid `var`** - In modern JavaScript, prefer `let` and `const` over `var`
4. **Declare variables at the top** of their scope for better readability
5. **Initialize variables** when declaring them when possible
6. **Use descriptive names** that clearly indicate the purpose of the variable

## Try It Yourself

Here's a simple exercise to practice using variables:

```javascript
// Declare variables to store information about a person
const firstName = "Your Name";
let age = 25;
let isStudent = true;

// Create a greeting message using these variables
let greeting = "Hello, my name is " + firstName + ". I am " + age + " years old.";
if (isStudent) {
  greeting += " I am currently a student.";
} else {
  greeting += " I am not a student.";
}

// Output the greeting
console.log(greeting);

// Try changing the values and see how the greeting changes
```

In the next section, we'll explore JavaScript data types to understand what kinds of values can be stored in variables.
