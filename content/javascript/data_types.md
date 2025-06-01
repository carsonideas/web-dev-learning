# JavaScript Data Types

In JavaScript, data types define the kinds of values that variables can hold. Understanding data types is fundamental to programming in JavaScript, as they determine how data is stored and manipulated.

## Primitive Data Types

JavaScript has 7 primitive data types:

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Symbol (added in ES6)
7. BigInt (added in ES2020)

Let's explore each one in detail:

### 1. String

Strings represent textual data and are enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``).

```javascript
let singleQuotes = 'Hello, World!';
let doubleQuotes = "Hello, World!";
let backticks = `Hello, World!`;
```

**Template Literals (ES6)**

Backticks allow for template literals, which enable:
- Multi-line strings
- String interpolation (embedding expressions)

```javascript
let name = "John";
let greeting = `Hello, ${name}!
Welcome to JavaScript.`;

console.log(greeting);
// Outputs:
// Hello, John!
// Welcome to JavaScript.
```

**String Properties and Methods**

Strings have built-in properties and methods:

```javascript
let text = "Hello, World!";

// Properties
console.log(text.length); // 13

// Methods
console.log(text.toUpperCase()); // "HELLO, WORLD!"
console.log(text.toLowerCase()); // "hello, world!"
console.log(text.indexOf("World")); // 7
console.log(text.slice(0, 5)); // "Hello"
console.log(text.replace("World", "JavaScript")); // "Hello, JavaScript!"
console.log(text.split(", ")); // ["Hello", "World!"]
```

### 2. Number

The Number type represents both integer and floating-point numbers.

```javascript
let integer = 42;
let float = 3.14;
let negative = -10;
let exponent = 2.5e6; // 2.5 million
```

**Special Number Values**

```javascript
let infinity = Infinity; // Represents mathematical infinity
let negInfinity = -Infinity; // Represents negative infinity
let notANumber = NaN; // Represents "Not a Number"
```

**Number Methods**

```javascript
let num = 123.456;

console.log(num.toFixed(2)); // "123.46" (rounds to 2 decimal places)
console.log(num.toPrecision(4)); // "123.5" (4 significant digits)
console.log(Number.isInteger(num)); // false
console.log(Number.parseInt("42px")); // 42 (parses integer from string)
console.log(Number.parseFloat("3.14text")); // 3.14 (parses float from string)
```

### 3. Boolean

Booleans represent logical values: `true` or `false`.

```javascript
let isActive = true;
let isLoggedIn = false;
```

Booleans are often the result of comparisons:

```javascript
let x = 10;
let y = 5;

console.log(x > y); // true
console.log(x === y); // false
console.log(x !== y); // true
```

### 4. Undefined

A variable that has been declared but not assigned a value has the value `undefined`.

```javascript
let notDefined;
console.log(notDefined); // undefined

function noReturn() {
  // No return statement
}
console.log(noReturn()); // undefined
```

### 5. Null

`null` represents the intentional absence of any object value.

```javascript
let empty = null;
console.log(empty); // null
```

**Note**: While `undefined` represents a variable that hasn't been assigned a value, `null` represents an intentional absence of value.

### 6. Symbol

Symbols (introduced in ES6) are unique and immutable primitive values, often used as object property keys.

```javascript
const id = Symbol('id');
const user = {
  name: 'John',
  [id]: 12345 // Using the symbol as a property key
};

console.log(user[id]); // 12345
```

Symbols are always unique:

```javascript
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false
```

### 7. BigInt

BigInt (introduced in ES2020) represents integers of arbitrary precision.

```javascript
const bigNumber = 1234567890123456789012345n; // Note the 'n' at the end
const anotherBigNumber = BigInt("9007199254740991");

console.log(bigNumber + 1n); // 1234567890123456789012346n
```

## Reference Data Types

In addition to primitive types, JavaScript has reference types:

### 1. Object

Objects are collections of key-value pairs.

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  greet: function() {
    return `Hello, my name is ${this.firstName} ${this.lastName}`;
  }
};

console.log(person.firstName); // "John"
console.log(person["lastName"]); // "Doe"
console.log(person.greet()); // "Hello, my name is John Doe"
```

### 2. Array

Arrays are ordered collections of values.

```javascript
let colors = ["red", "green", "blue"];
let mixed = [1, "hello", true, null, { name: "object" }];

console.log(colors[0]); // "red"
console.log(mixed.length); // 5
```

**Array Methods**

```javascript
let fruits = ["apple", "banana", "orange"];

// Adding elements
fruits.push("mango"); // Adds to the end
fruits.unshift("strawberry"); // Adds to the beginning

// Removing elements
fruits.pop(); // Removes from the end
fruits.shift(); // Removes from the beginning

// Other useful methods
console.log(fruits.join(", ")); // "apple, banana, orange"
console.log(fruits.includes("banana")); // true
console.log(fruits.indexOf("orange")); // 2

// Higher-order array methods
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
let evens = numbers.filter(num => num % 2 === 0); // [2, 4]
let sum = numbers.reduce((total, num) => total + num, 0); // 15
```

### 3. Function

Functions are objects that can be called to perform actions.

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression
const sayGoodbye = function(name) {
  return `Goodbye, ${name}!`;
};

// Arrow function (ES6)
const multiply = (a, b) => a * b;

console.log(greet("John")); // "Hello, John!"
console.log(sayGoodbye("John")); // "Goodbye, John!"
console.log(multiply(2, 3)); // 6
```

### 4. Date

The Date object represents a single moment in time.

```javascript
const now = new Date();
console.log(now); // Current date and time

const specificDate = new Date("2023-01-15T12:30:00");
console.log(specificDate); // Sun Jan 15 2023 12:30:00

console.log(now.getFullYear()); // Current year
console.log(now.getMonth()); // Current month (0-11)
console.log(now.getDate()); // Current day of month
```

### 5. RegExp

Regular expressions are patterns used to match character combinations in strings.

```javascript
const pattern = /hello/i; // 'i' flag makes it case-insensitive
const text = "Hello, World!";

console.log(pattern.test(text)); // true
console.log(text.match(pattern)); // ["Hello"]
```

## Type Checking

You can check the type of a value using the `typeof` operator:

```javascript
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known JavaScript quirk)
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof 42n); // "bigint"
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are objects in JavaScript)
console.log(typeof function(){}); // "function"
```

**Note**: `typeof null` returns `"object"`, which is considered a bug in JavaScript, but it's maintained for legacy reasons.

## Type Conversion

JavaScript provides several ways to convert between types:

### String Conversion

```javascript
// To string
let num = 42;
let str1 = String(num); // "42"
let str2 = num.toString(); // "42"
let str3 = num + ""; // "42" (implicit conversion)
```

### Number Conversion

```javascript
// To number
let str = "42";
let num1 = Number(str); // 42
let num2 = parseInt(str); // 42
let num3 = parseFloat("3.14"); // 3.14
let num4 = +"42"; // 42 (unary plus operator)

// Failed conversions
console.log(Number("hello")); // NaN
console.log(parseInt("years: 10")); // NaN
console.log(parseInt("10 years")); // 10 (parses until invalid character)
```

### Boolean Conversion

```javascript
// To boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(!!42); // true (double negation)
```

## Truthy and Falsy Values

In JavaScript, values are considered either "truthy" or "falsy" when used in a boolean context:

**Falsy values:**
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

**Truthy values:**
- Everything else, including:
  - `true`
  - Any number other than 0
  - Any non-empty string
  - All objects and arrays (even empty ones)

```javascript
if ("hello") {
  console.log("This will run because 'hello' is truthy");
}

if (0) {
  console.log("This won't run because 0 is falsy");
}
```

## Try It Yourself

Here's an exercise to practice working with different data types:

```javascript
// Create variables with different data types
const myString = "JavaScript is fun";
const myNumber = 42;
const myBoolean = true;
const myNull = null;
let myUndefined;
const mySymbol = Symbol("unique");
const myBigInt = 1234567890123456789n;
const myObject = { name: "John", age: 30 };
const myArray = [1, 2, 3, 4, 5];
const myFunction = function() { return "Hello!"; };

// Print the type of each variable
console.log("myString is a", typeof myString);
console.log("myNumber is a", typeof myNumber);
console.log("myBoolean is a", typeof myBoolean);
console.log("myNull is a", typeof myNull);
console.log("myUndefined is a", typeof myUndefined);
console.log("mySymbol is a", typeof mySymbol);
console.log("myBigInt is a", typeof myBigInt);
console.log("myObject is a", typeof myObject);
console.log("myArray is a", typeof myArray);
console.log("myFunction is a", typeof myFunction);

// Try some type conversions
console.log("myNumber to string:", String(myNumber));
console.log("myString to number:", Number(myString));
console.log("myBoolean to string:", String(myBoolean));
console.log("myArray to string:", String(myArray));
```

Understanding JavaScript's data types is essential for writing effective code. In the next section, we'll explore operators and how they work with different data types.
