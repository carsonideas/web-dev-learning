# JavaScript Data Types

JavaScript has several built-in data types that are fundamental to understanding how to work with data in the language. These data types can be categorized into two main groups: primitive types and reference types.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Data Type Categories</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4 border-l-4 border-l-indigo-500">
        <h4 class="font-bold text-indigo-400 mb-2">Primitive Types</h4>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>String</li>
          <li>Number</li>
          <li>Boolean</li>
          <li>Undefined</li>
          <li>Null</li>
          <li>Symbol (ES6)</li>
          <li>BigInt (ES2020)</li>
        </ul>
        <p class="text-xs mt-2">Immutable, passed by value.</p>
      </div>
      
      <div class="card p-4 border-l-4 border-l-purple-500">
        <h4 class="font-bold text-purple-400 mb-2">Reference Types</h4>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Object</li>
          <li>Array</li>
          <li>Function</li>
          <li>Date</li>
          <li>RegExp</li>
        </ul>
        <p class="text-xs mt-2">Mutable, passed by reference.</p>
      </div>
    </div>
  </div>
</div>

## Primitive Data Types

Primitive data types are the basic building blocks of JavaScript. They are immutable (cannot be changed) and are passed by value.

### 1. String

Strings represent textual data and are enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``).

```javascript
// String examples
let firstName = 'John';
let lastName = "Doe";
let greeting = `Hello, ${firstName} ${lastName}!`; // Template literal (ES6)

console.log(greeting); // "Hello, John Doe!"
```

<div class="callout tip">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
    Template Literals
  </div>
  <div class="callout-content">
    <p>Backticks (`` ` ``) allow for embedded expressions (like <code>${firstName}</code>) and multi-line strings, making string creation more flexible.</p>
  </div>
</div>

#### String Properties and Methods

```javascript
let text = "JavaScript is amazing";

// Properties
console.log(text.length); // 22

// Methods
console.log(text.toUpperCase()); // "JAVASCRIPT IS AMAZING"
console.log(text.toLowerCase()); // "javascript is amazing"
console.log(text.indexOf("is")); // 11
console.log(text.slice(0, 10)); // "JavaScript"
console.log(text.replace("amazing", "awesome")); // "JavaScript is awesome"
console.log(text.split(" ")); // ["JavaScript", "is", "amazing"]
```

### 2. Number

Numbers in JavaScript represent both integer and floating-point values.

```javascript
// Number examples
let integer = 42;
let float = 3.14;
let negative = -10;
let exponent = 2.5e6; // 2.5 million
let binary = 0b1010; // 10 in binary
let octal = 0o744; // 484 in octal
let hex = 0xFF; // 255 in hexadecimal
```

#### Special Number Values

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Special Numbers</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="card p-4 text-center">
        <div class="text-4xl font-bold text-blue-400 mb-2">∞</div>
        <p class="font-mono">Infinity</p>
        <p class="text-xs">(e.g., 1 / 0)</p>
      </div>
      <div class="card p-4 text-center">
        <div class="text-4xl font-bold text-blue-400 mb-2">-∞</div>
        <p class="font-mono">-Infinity</p>
        <p class="text-xs">(e.g., -1 / 0)</p>
      </div>
      <div class="card p-4 text-center">
        <div class="text-4xl font-bold text-red-400 mb-2">NaN</div>
        <p class="font-mono">Not a Number</p>
        <p class="text-xs">(e.g., "hello" / 2)</p>
      </div>
    </div>
  </div>
</div>

```javascript
let infinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN; // Result of invalid calculations

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log("hello" / 2); // NaN
```

#### Number Methods

```javascript
let num = 123.456;

console.log(num.toString()); // "123.456"
console.log(num.toFixed(2)); // "123.46" (rounds to 2 decimal places)
console.log(num.toPrecision(4)); // "123.5" (4 significant digits)
console.log(Number.isInteger(num)); // false
console.log(Number.isNaN(NaN)); // true
```

### 3. Boolean

Booleans represent logical values: `true` or `false`.

```javascript
let isActive = true;
let isLoggedIn = false;

// Expressions that evaluate to boolean values
let isGreater = 5 > 3; // true
let isEqual = 5 === "5"; // false
```

#### Truthy and Falsy Values

In JavaScript, values can be evaluated as either "truthy" or "falsy" in boolean contexts:

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Truthy vs Falsy</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4 border-l-4 border-l-red-500">
        <h4 class="font-bold text-red-400 mb-2">Falsy Values</h4>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li><code>false</code></li>
          <li><code>0</code></li>
          <li><code>""</code> (empty string)</li>
          <li><code>null</code></li>
          <li><code>undefined</code></li>
          <li><code>NaN</code></li>
        </ul>
      </div>
      <div class="card p-4 border-l-4 border-l-green-500">
        <h4 class="font-bold text-green-400 mb-2">Truthy Values</h4>
        <p class="text-sm">Everything else, including:</p>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li><code>true</code></li>
          <li>Any number other than 0</li>
          <li>Any non-empty string</li>
          <li>Arrays (even empty ones)</li>
          <li>Objects (even empty ones)</li>
        </ul>
      </div>
    </div>
  </div>
</div>

```javascript
if ("hello") {
  console.log("This will execute because 'hello' is truthy");
}

if (0) {
  console.log("This won't execute because 0 is falsy");
}
```

### 4. Undefined

`undefined` represents a variable that has been declared but not assigned a value.

```javascript
let undefinedVar;
console.log(undefinedVar); // undefined

function noReturn() {
  // No return statement
}
console.log(noReturn()); // undefined
```

### 5. Null

`null` represents the intentional absence of any object value.

```javascript
let emptyValue = null;
console.log(emptyValue); // null
```

<div class="callout info">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    Null vs Undefined
  </div>
  <div class="callout-content">
    <p>Think of <code>undefined</code> as an accidental emptiness (like a box that hasn't been filled yet), while <code>null</code> is a deliberate emptiness (like a box that you intentionally emptied).</p>
  </div>
</div>

### 6. Symbol (ES6)

Symbols are unique and immutable primitive values, often used as object property keys.

```javascript
const id = Symbol('id');
const user = {
  name: 'John',
  [id]: 12345
};

console.log(user[id]); // 12345
console.log(Symbol('id') === Symbol('id')); // false, each Symbol is unique
```

### 7. BigInt (ES2020)

BigInt represents integers with arbitrary precision, beyond the safe integer limit of Number.

```javascript
const bigNumber = 1234567890123456789012345n; // Note the 'n' suffix
const result = bigNumber + 1n;

console.log(result); // 1234567890123456789012346n
```

## Reference Data Types

Reference types are more complex data structures that store collections of data and functionality. They are mutable and are passed by reference.

<div class="callout warning">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    Passed by Reference vs Passed by Value
  </div>
  <div class="callout-content">
    <p>When you assign a primitive type, you copy the value. When you assign a reference type, you copy the reference (like a pointer to the actual data). This means changing a reference type through one variable affects all variables referencing the same data.</p>
  </div>
</div>

### 1. Object

Objects are collections of key-value pairs (properties and methods).

```javascript
// Object literal
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  greet: function() {
    return `Hello, my name is ${this.firstName} ${this.lastName}`;
  }
};

console.log(person.firstName); // "John"
console.log(person['lastName']); // "Doe"
console.log(person.greet()); // "Hello, my name is John Doe"
```

#### Object Methods

```javascript
const person = { name: 'John', age: 30 };

// Object methods
console.log(Object.keys(person)); // ["name", "age"]
console.log(Object.values(person)); // ["John", 30]
console.log(Object.entries(person)); // [["name", "John"], ["age", 30]]

// Cloning an object
const personCopy = Object.assign({}, person);
const personCopy2 = { ...person }; // Spread operator (ES6)
```

### 2. Array

Arrays are ordered collections of values.

```javascript
// Array literal
const fruits = ['apple', 'banana', 'orange'];

console.log(fruits[0]); // "apple"
console.log(fruits.length); // 3

// Arrays can hold mixed data types
const mixed = [1, 'hello', true, { name: 'John' }, [1, 2, 3]];
```

#### Array Methods

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Common Array Methods</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="card p-4">
        <h4 class="font-bold mb-2">Adding/Removing</h4>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li><code>push()</code>: Add to end</li>
          <li><code>pop()</code>: Remove from end</li>
          <li><code>unshift()</code>: Add to beginning</li>
          <li><code>shift()</code>: Remove from beginning</li>
          <li><code>splice()</code>: Add/remove anywhere</li>
        </ul>
      </div>
      <div class="card p-4">
        <h4 class="font-bold mb-2">Iterating</h4>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li><code>forEach()</code>: Loop over elements</li>
          <li><code>map()</code>: Create new array by transforming</li>
          <li><code>filter()</code>: Create new array with matching elements</li>
          <li><code>reduce()</code>: Combine elements into single value</li>
        </ul>
      </div>
      <div class="card p-4">
        <h4 class="font-bold mb-2">Finding</h4>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li><code>find()</code>: Get first matching element</li>
          <li><code>findIndex()</code>: Get index of first match</li>
          <li><code>includes()</code>: Check if element exists</li>
          <li><code>indexOf()</code>: Get index of element</li>
        </ul>
      </div>
    </div>
  </div>
</div>

```javascript
const numbers = [1, 2, 3, 4, 5];

// Adding/removing elements
numbers.push(6); // Add to end: [1, 2, 3, 4, 5, 6]
numbers.pop(); // Remove from end: [1, 2, 3, 4, 5]
numbers.unshift(0); // Add to beginning: [0, 1, 2, 3, 4, 5]
numbers.shift(); // Remove from beginning: [1, 2, 3, 4, 5]
numbers.splice(2, 1, 'a'); // Replace element: [1, 2, 'a', 4, 5]

// Iterating
numbers.forEach(num => console.log(num));

// Transforming
const doubled = numbers.map(num => num * 2); // [2, 4, 'a2', 8, 10]
const evenNumbers = numbers.filter(num => typeof num === 'number' && num % 2 === 0); // [2, 4]
const sum = numbers.reduce((total, num) => typeof num === 'number' ? total + num : total, 0); // 12

// Finding elements
const found = numbers.find(num => num > 3); // 4
const index = numbers.findIndex(num => num === 'a'); // 2
```

### 3. Function

Functions are reusable blocks of code that perform a specific task.

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression
const square = function(x) {
  return x * x;
};

// Arrow function (ES6)
const cube = x => x * x * x;

console.log(greet('John')); // "Hello, John!"
console.log(square(4)); // 16
console.log(cube(3)); // 27
```

#### Functions as First-Class Citizens

In JavaScript, functions are first-class citizens, meaning they can be treated like any other value.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Functions are Values!</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="card p-4">
        <h4 class="font-bold mb-2">Assign to Variables</h4>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          const myFunc = () => { ... };
        </div>
      </div>
      <div class="card p-4">
        <h4 class="font-bold mb-2">Pass as Arguments</h4>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          button.addEventListener('click', myFunc);
        </div>
      </div>
      <div class="card p-4">
        <h4 class="font-bold mb-2">Return from Functions</h4>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          function createGreeter() {<br>
          &nbsp;&nbsp;return () => { ... };<br>
          }
        </div>
      </div>
    </div>
  </div>
</div>

```javascript
// Function as an argument
function executeOperation(operation, a, b) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(executeOperation(add, 5, 3)); // 8
console.log(executeOperation(multiply, 5, 3)); // 15

// Function returning a function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### 4. Date

The Date object represents a single moment in time.

```javascript
const now = new Date();
console.log(now); // Current date and time

const specificDate = new Date('2023-01-15T12:30:00');
console.log(specificDate); // Sun Jan 15 2023 12:30:00

// Date methods
console.log(now.getFullYear()); // e.g., 2023
console.log(now.getMonth()); // 0-11 (0 = January)
console.log(now.getDate()); // 1-31
console.log(now.getDay()); // 0-6 (0 = Sunday)
console.log(now.getHours()); // 0-23
console.log(now.getMinutes()); // 0-59
console.log(now.getTime()); // milliseconds since Jan 1, 1970
```

### 5. RegExp

Regular expressions are patterns used to match character combinations in strings.

```javascript
// Regular expression literal
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// Using the RegExp constructor
const phonePattern = new RegExp('^\\d{3}-\\d{3}-\\d{4}$');

// Testing patterns
console.log(emailPattern.test('user@example.com')); // true
console.log(phonePattern.test('123-456-7890')); // true
```

## Type Checking and Conversion

### Checking Types

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Using `typeof`</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="card p-2 text-center">
        <p class="font-mono text-sm">typeof "hello"</p>
        <p class="text-green-400 font-bold">"string"</p>
      </div>
      <div class="card p-2 text-center">
        <p class="font-mono text-sm">typeof 42</p>
        <p class="text-blue-400 font-bold">"number"</p>
      </div>
      <div class="card p-2 text-center">
        <p class="font-mono text-sm">typeof true</p>
        <p class="text-purple-400 font-bold">"boolean"</p>
      </div>
      <div class="card p-2 text-center">
        <p class="font-mono text-sm">typeof undefined</p>
        <p class="text-gray-400 font-bold">"undefined"</p>
      </div>
      <div class="card p-2 text-center">
        <p class="font-mono text-sm">typeof null</p>
        <p class="text-red-400 font-bold">"object" (!)</p>
      </div>
      <div class="card p-2 text-center">
        <p class="font-mono text-sm">typeof {}</p>
        <p class="text-yellow-400 font-bold">"object"</p>
      </div>
      <div class="card p-2 text-center">
        <p class="font-mono text-sm">typeof []</p>
        <p class="text-yellow-400 font-bold">"object"</p>
      </div>
      <div class="card p-2 text-center">
        <p class="font-mono text-sm">typeof function(){}</p>
        <p class="text-pink-400 font-bold">"function"</p>
      </div>
    </div>
    <div class="callout warning mt-4">
      <div class="callout-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        `typeof null` is "object"
      </div>
      <div class="callout-content">
        <p>This is a long-standing bug in JavaScript. To check specifically for null, use <code>value === null</code>.</p>
      </div>
    </div>
    <div class="callout info mt-4">
      <div class="callout-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        Checking for Arrays
      </div>
      <div class="callout-content">
        <p>Since <code>typeof []</code> returns "object", use <code>Array.isArray(value)</code> to reliably check if a value is an array.</p>
      </div>
    </div>
  </div>
</div>

```javascript
// Using typeof operator
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known JavaScript bug)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function(){}); // "function"

// For arrays
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false
```

### Type Conversion

#### Implicit Conversion (Coercion)

JavaScript automatically converts types in certain contexts:

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Type Coercion Examples</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4">
        <p class="font-mono text-sm mb-2">"5" + 2</p>
        <p class="text-center text-xl font-bold text-green-400 mb-2">"52"</p>
        <p class="text-xs text-center">Number → String (Concatenation)</p>
      </div>
      <div class="card p-4">
        <p class="font-mono text-sm mb-2">"5" - 2</p>
        <p class="text-center text-xl font-bold text-blue-400 mb-2">3</p>
        <p class="text-xs text-center">String → Number (Subtraction)</p>
      </div>
      <div class="card p-4">
        <p class="font-mono text-sm mb-2">"5" * "2"</p>
        <p class="text-center text-xl font-bold text-blue-400 mb-2">10</p>
        <p class="text-xs text-center">String → Number (Multiplication)</p>
      </div>
      <div class="card p-4">
        <p class="font-mono text-sm mb-2">5 + true</p>
        <p class="text-center text-xl font-bold text-blue-400 mb-2">6</p>
        <p class="text-xs text-center">Boolean → Number (true = 1)</p>
      </div>
    </div>
  </div>
</div>

```javascript
console.log("5" + 2); // "52" (number is converted to string)
console.log("5" - 2); // 3 (string is converted to number)
console.log("5" * "2"); // 10 (strings are converted to numbers)
console.log(5 + true); // 6 (true is converted to 1)
console.log(5 + false); // 5 (false is converted to 0)
```

#### Explicit Conversion

```javascript
// To string
console.log(String(42)); // "42"
console.log((42).toString()); // "42"

// To number
console.log(Number("42")); // 42
console.log(parseInt("42px", 10)); // 42
console.log(parseFloat("3.14")); // 3.14

// To boolean
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(!!"hello"); // true (shorthand for Boolean("hello"))
```

## Practice Exercises

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Test Your Knowledge</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="tabs">
      <div class="tab active">Exercise 1</div>
      <div class="tab">Exercise 2</div>
      <div class="tab">Exercise 3</div>
    </div>
    
    <div class="p-4 bg-gray-800 rounded-lg">
      <h4 class="font-bold mb-2">Type Identification</h4>
      <p class="mb-4">Write a function <code>getType(value)</code> that takes any value and returns its data type as a string (e.g., "string", "number", "array", "object", "null"). Handle the quirks of <code>typeof</code>.</p>
      <div class="code-editor">
        <div class="code-editor-header">
          <span class="text-sm font-medium">Your Solution</span>
        </div>
        <div class="code-editor-content">
          <pre class="language-javascript">
function getType(value) {
  // Handle null first
  if (value === null) {
    return "null";
  }
  
  // Handle arrays
  if (Array.isArray(value)) {
    return "array";
  }
  
  // Use typeof for the rest
  return typeof value;
}

// Test cases
console.log(getType("hello")); // Should be "string"
console.log(getType(123));     // Should be "number"
console.log(getType(true));    // Should be "boolean"
console.log(getType(undefined)); // Should be "undefined"
console.log(getType(null));      // Should be "null"
console.log(getType({}));      // Should be "object"
console.log(getType([]));      // Should be "array"
console.log(getType(function(){})); // Should be "function"
          </pre>
        </div>
      </div>
    </div>
  </div>
</div>

## Summary

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Data Types Recap</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4">
        <h4 class="font-bold mb-2">Primitive Types</h4>
        <p class="text-sm">String, Number, Boolean, Undefined, Null, Symbol, BigInt. Immutable, passed by value.</p>
      </div>
      <div class="card p-4">
        <h4 class="font-bold mb-2">Reference Types</h4>
        <p class="text-sm">Object, Array, Function, Date, RegExp. Mutable, passed by reference.</p>
      </div>
      <div class="card p-4">
        <h4 class="font-bold mb-2">Type Checking</h4>
        <p class="text-sm">Use <code>typeof</code>, <code>Array.isArray()</code>, and <code>=== null</code> for reliable checks.</p>
      </div>
      <div class="card p-4">
        <h4 class="font-bold mb-2">Type Conversion</h4>
        <p class="text-sm">Be aware of implicit coercion. Use explicit conversion (<code>String()</code>, <code>Number()</code>, <code>Boolean()</code>) for clarity.</p>
      </div>
    </div>
  </div>
</div>

Understanding JavaScript's data types is essential for effective programming. Each type has its own characteristics, methods, and use cases that allow you to manipulate data in different ways.

<div class="mt-8 p-4 bg-indigo-900/30 border border-indigo-500 rounded-lg">
  <h3 class="text-xl font-bold mb-2">Ready to continue?</h3>
  <p class="mb-4">Next, we'll dive into JavaScript operators and how they work with different data types.</p>
  <div class="flex justify-between">
    <a href="#/topic/javascript/variables" class="btn-secondary inline-flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
      Previous: Variables
    </a>
    <a href="#/topic/javascript/operators" class="btn-primary inline-flex items-center">
      Next: Operators
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
