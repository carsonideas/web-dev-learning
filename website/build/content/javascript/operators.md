# JavaScript Operators

Operators are symbols that perform operations on variables and values. JavaScript has various types of operators that allow you to manipulate data in different ways.

<div class="callout info">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    What are Operators?
  </div>
  <div class="callout-content">
    <p>Think of operators as the verbs of JavaScript. They take values (nouns, called operands) and perform actions on them to produce a result.</p>
    <p>Example: In <code>5 + 2</code>, <code>+</code> is the operator, and <code>5</code> and <code>2</code> are the operands.</p>
  </div>
</div>

## Arithmetic Operators

Arithmetic operators perform mathematical operations on numeric values:

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Arithmetic Operations</h3>
  </div>
  <div class="interactive-demo-content overflow-x-auto">
    <table class="w-full text-sm">
      <thead>
        <tr>
          <th class="p-2 bg-gray-800">Operator</th>
          <th class="p-2 bg-gray-800">Description</th>
          <th class="p-2 bg-gray-800">Example</th>
          <th class="p-2 bg-gray-800">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="p-2 font-mono">+</td><td class="p-2">Addition</td><td class="p-2 font-mono">5 + 2</td><td class="p-2 font-mono">7</td></tr>
        <tr><td class="p-2 font-mono">-</td><td class="p-2">Subtraction</td><td class="p-2 font-mono">5 - 2</td><td class="p-2 font-mono">3</td></tr>
        <tr><td class="p-2 font-mono">*</td><td class="p-2">Multiplication</td><td class="p-2 font-mono">5 * 2</td><td class="p-2 font-mono">10</td></tr>
        <tr><td class="p-2 font-mono">/</td><td class="p-2">Division</td><td class="p-2 font-mono">5 / 2</td><td class="p-2 font-mono">2.5</td></tr>
        <tr><td class="p-2 font-mono">%</td><td class="p-2">Modulus (remainder)</td><td class="p-2 font-mono">5 % 2</td><td class="p-2 font-mono">1</td></tr>
        <tr><td class="p-2 font-mono">**</td><td class="p-2">Exponentiation (ES6)</td><td class="p-2 font-mono">5 ** 2</td><td class="p-2 font-mono">25</td></tr>
        <tr><td class="p-2 font-mono">++</td><td class="p-2">Increment</td><td class="p-2 font-mono">let x = 5; x++;</td><td class="p-2 font-mono">x becomes 6</td></tr>
        <tr><td class="p-2 font-mono">--</td><td class="p-2">Decrement</td><td class="p-2 font-mono">let x = 5; x--;</td><td class="p-2 font-mono">x becomes 4</td></tr>
      </tbody>
    </table>
  </div>
</div>

### Examples

```javascript
let a = 10;
let b = 3;

let sum = a + b;        // 13
let difference = a - b;  // 7
let product = a * b;     // 30
let quotient = a / b;    // 3.3333...
let remainder = a % b;   // 1
let power = a ** b;      // 1000 (10^3)

// Increment and decrement
let count = 0;
count++;                 // count is now 1 (post-increment)
++count;                 // count is now 2 (pre-increment)
count--;                 // count is now 1 (post-decrement)
--count;                 // count is now 0 (pre-decrement)
```

### Pre vs Post Increment/Decrement

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Pre vs Post Increment</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4">
        <h4 class="font-bold mb-2">Post-Increment (<code>x++</code>)</h4>
        <p class="text-sm mb-2">Assigns the current value first, then increments.</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm mb-2">
          let x = 5;<br>
          let y = x++;
        </div>
        <p class="text-sm">Result: <code>y</code> is 5, <code>x</code> becomes 6</p>
      </div>
      <div class="card p-4">
        <h4 class="font-bold mb-2">Pre-Increment (<code>++a</code>)</h4>
        <p class="text-sm mb-2">Increments first, then assigns the new value.</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm mb-2">
          let a = 5;<br>
          let b = ++a;
        </div>
        <p class="text-sm">Result: <code>b</code> is 6, <code>a</code> becomes 6</p>
      </div>
    </div>
  </div>
</div>

```javascript
let x = 5;
let y = x++;  // y = 5, x = 6 (assigns first, then increments)

let a = 5;
let b = ++a;  // b = 6, a = 6 (increments first, then assigns)
```

## Assignment Operators

Assignment operators assign values to JavaScript variables.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Assignment Shortcuts</h3>
  </div>
  <div class="interactive-demo-content overflow-x-auto">
    <table class="w-full text-sm">
      <thead>
        <tr>
          <th class="p-2 bg-gray-800">Operator</th>
          <th class="p-2 bg-gray-800">Example</th>
          <th class="p-2 bg-gray-800">Equivalent To</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="p-2 font-mono">=</td><td class="p-2 font-mono">x = y</td><td class="p-2 font-mono">x = y</td></tr>
        <tr><td class="p-2 font-mono">+=</td><td class="p-2 font-mono">x += y</td><td class="p-2 font-mono">x = x + y</td></tr>
        <tr><td class="p-2 font-mono">-=</td><td class="p-2 font-mono">x -= y</td><td class="p-2 font-mono">x = x - y</td></tr>
        <tr><td class="p-2 font-mono">*=</td><td class="p-2 font-mono">x *= y</td><td class="p-2 font-mono">x = x * y</td></tr>
        <tr><td class="p-2 font-mono">/=</td><td class="p-2 font-mono">x /= y</td><td class="p-2 font-mono">x = x / y</td></tr>
        <tr><td class="p-2 font-mono">%=</td><td class="p-2 font-mono">x %= y</td><td class="p-2 font-mono">x = x % y</td></tr>
        <tr><td class="p-2 font-mono">**=</td><td class="p-2 font-mono">x **= y</td><td class="p-2 font-mono">x = x ** y</td></tr>
      </tbody>
    </table>
  </div>
</div>

### Examples

```javascript
let x = 10;

x += 5;   // x = 15
x -= 3;   // x = 12
x *= 2;   // x = 24
x /= 4;   // x = 6
x %= 4;   // x = 2
x **= 3;  // x = 8 (2^3)
```

## Comparison Operators

Comparison operators compare values and return a boolean result (true or false):

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Comparing Values</h3>
  </div>
  <div class="interactive-demo-content overflow-x-auto">
    <table class="w-full text-sm">
      <thead>
        <tr>
          <th class="p-2 bg-gray-800">Operator</th>
          <th class="p-2 bg-gray-800">Description</th>
          <th class="p-2 bg-gray-800">Example</th>
          <th class="p-2 bg-gray-800">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="p-2 font-mono">==</td><td class="p-2">Equal to (value)</td><td class="p-2 font-mono">5 == "5"</td><td class="p-2 font-mono text-green-400">true</td></tr>
        <tr><td class="p-2 font-mono">===</td><td class="p-2">Equal to (value and type)</td><td class="p-2 font-mono">5 === "5"</td><td class="p-2 font-mono text-red-400">false</td></tr>
        <tr><td class="p-2 font-mono">!=</td><td class="p-2">Not equal to (value)</td><td class="p-2 font-mono">5 != "6"</td><td class="p-2 font-mono text-green-400">true</td></tr>
        <tr><td class="p-2 font-mono">!==</td><td class="p-2">Not equal to (value or type)</td><td class="p-2 font-mono">5 !== "5"</td><td class="p-2 font-mono text-green-400">true</td></tr>
        <tr><td class="p-2 font-mono">&gt;</td><td class="p-2">Greater than</td><td class="p-2 font-mono">5 &gt; 3</td><td class="p-2 font-mono text-green-400">true</td></tr>
        <tr><td class="p-2 font-mono">&lt;</td><td class="p-2">Less than</td><td class="p-2 font-mono">5 &lt; 3</td><td class="p-2 font-mono text-red-400">false</td></tr>
        <tr><td class="p-2 font-mono">&gt;=</td><td class="p-2">Greater than or equal to</td><td class="p-2 font-mono">5 &gt;= 5</td><td class="p-2 font-mono text-green-400">true</td></tr>
        <tr><td class="p-2 font-mono">&lt;=</td><td class="p-2">Less than or equal to</td><td class="p-2 font-mono">5 &lt;= 4</td><td class="p-2 font-mono text-red-400">false</td></tr>
      </tbody>
    </table>
  </div>
</div>

### Examples

```javascript
let a = 5;
let b = "5";
let c = 10;

console.log(a == b);    // true (values are equal)
console.log(a === b);   // false (values are equal but types are different)
console.log(a != c);    // true (values are not equal)
console.log(a !== b);   // true (types are different)
console.log(a > c);     // false (5 is not greater than 10)
console.log(a < c);     // true (5 is less than 10)
console.log(a >= 5);    // true (5 is equal to 5)
console.log(c <= 10);   // true (10 is equal to 10)
```

### Strict vs Loose Equality

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Strict (===) vs Loose (==) Equality</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4">
        <h4 class="font-bold mb-2">Loose Equality (<code>==</code>)</h4>
        <p class="text-sm mb-2">Compares values after type conversion.</p>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li><code>5 == "5"</code> → <span class="text-green-400">true</span></li>
          <li><code>0 == false</code> → <span class="text-green-400">true</span></li>
          <li><code>null == undefined</code> → <span class="text-green-400">true</span></li>
        </ul>
        <p class="text-xs mt-2 text-yellow-400">Can lead to unexpected results!</p>
      </div>
      <div class="card p-4">
        <h4 class="font-bold mb-2">Strict Equality (<code>===</code>)</h4>
        <p class="text-sm mb-2">Compares both value and type.</p>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li><code>5 === "5"</code> → <span class="text-red-400">false</span></li>
          <li><code>0 === false</code> → <span class="text-red-400">false</span></li>
          <li><code>null === undefined</code> → <span class="text-red-400">false</span></li>
        </ul>
        <p class="text-xs mt-2 text-green-400">Recommended for predictable results.</p>
      </div>
    </div>
  </div>
</div>

```javascript
console.log(0 == false);    // true (both convert to falsy values)
console.log(0 === false);   // false (number vs boolean)
console.log("" == false);   // true (both convert to falsy values)
console.log("" === false);  // false (string vs boolean)
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

<div class="callout tip">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
    Best Practice
  </div>
  <div class="callout-content">
    <p>Always use strict equality (<code>===</code> and <code>!==</code>) to avoid unexpected type conversions and make your code more reliable.</p>
  </div>
</div>

## Logical Operators

Logical operators perform logical operations and return a boolean result (or one of the operands in short-circuiting):

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Logical Operations</h3>
  </div>
  <div class="interactive-demo-content overflow-x-auto">
    <table class="w-full text-sm">
      <thead>
        <tr>
          <th class="p-2 bg-gray-800">Operator</th>
          <th class="p-2 bg-gray-800">Description</th>
          <th class="p-2 bg-gray-800">Example</th>
          <th class="p-2 bg-gray-800">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="p-2 font-mono">&&</td><td class="p-2">Logical AND</td><td class="p-2 font-mono">true && false</td><td class="p-2 font-mono text-red-400">false</td></tr>
        <tr><td class="p-2 font-mono">||</td><td class="p-2">Logical OR</td><td class="p-2 font-mono">true || false</td><td class="p-2 font-mono text-green-400">true</td></tr>
        <tr><td class="p-2 font-mono">!</td><td class="p-2">Logical NOT</td><td class="p-2 font-mono">!true</td><td class="p-2 font-mono text-red-400">false</td></tr>
      </tbody>
    </table>
  </div>
</div>

### Examples

```javascript
let isAdult = true;
let hasPermission = false;

// AND operator - both conditions must be true
console.log(isAdult && hasPermission);  // false

// OR operator - at least one condition must be true
console.log(isAdult || hasPermission);  // true

// NOT operator - inverts the boolean value
console.log(!isAdult);  // false
```

### Short-Circuit Evaluation

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Short-Circuiting Explained</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4">
        <h4 class="font-bold mb-2">Logical AND (<code>&&</code>)</h4>
        <p class="text-sm mb-2">Stops and returns the first <strong>falsy</strong> value encountered, or the last value if all are truthy.</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          <code>0 && "Hello"</code> → <span class="text-red-400">0</span><br>
          <code>"Hi" && "World"</code> → <span class="text-green-400">"World"</span>
        </div>
      </div>
      <div class="card p-4">
        <h4 class="font-bold mb-2">Logical OR (<code>||</code>)</h4>
        <p class="text-sm mb-2">Stops and returns the first <strong>truthy</strong> value encountered, or the last value if all are falsy.</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          <code>"" || "Hello"</code> → <span class="text-green-400">"Hello"</span><br>
          <code>false || 0</code> → <span class="text-red-400">0</span>
        </div>
      </div>
    </div>
  </div>
</div>

```javascript
// AND short-circuit
console.log(0 && "Hello");        // 0 (stops at first falsy value)
console.log("Hello" && "World");  // "World" (all values are truthy)

// OR short-circuit
console.log("" || "Hello");       // "Hello" (returns first truthy value)
console.log("Hello" || "World");  // "Hello" (stops at first truthy value)
```

### Nullish Coalescing Operator (??)

The nullish coalescing operator (`??`) returns the right-hand operand when the left-hand operand is `null` or `undefined` (specifically those two, not other falsy values like `0` or `""`).

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Nullish Coalescing (<code>??</code>) vs OR (<code>||</code>)</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4">
        <h4 class="font-bold mb-2">Nullish Coalescing (<code>??</code>)</h4>
        <p class="text-sm mb-2">Only triggers for <code>null</code> or <code>undefined</code>.</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          <code>null ?? "Default"</code> → <span class="text-green-400">"Default"</span><br>
          <code>undefined ?? "Default"</code> → <span class="text-green-400">"Default"</span><br>
          <code>0 ?? "Default"</code> → <span class="text-blue-400">0</span><br>
          <code>"" ?? "Default"</code> → <span class="text-blue-400">""</span>
        </div>
      </div>
      <div class="card p-4">
        <h4 class="font-bold mb-2">Logical OR (<code>||</code>)</h4>
        <p class="text-sm mb-2">Triggers for any falsy value.</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          <code>null || "Default"</code> → <span class="text-green-400">"Default"</span><br>
          <code>undefined || "Default"</code> → <span class="text-green-400">"Default"</span><br>
          <code>0 || "Default"</code> → <span class="text-green-400">"Default"</span><br>
          <code>"" || "Default"</code> → <span class="text-green-400">"Default"</span>
        </div>
      </div>
    </div>
  </div>
</div>

```javascript
let name = null;
let displayName = name ?? "Guest";  // "Guest"

let count = 0;
let displayCount = count ?? 10;     // 0 (count is 0, which is not null or undefined)
let displayCountOr = count || 10;   // 10 (count is 0, which is falsy)
```

## Conditional (Ternary) Operator

The conditional operator is a shorthand for the `if-else` statement:

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Ternary Operator Flow</h3>
  </div>
  <div class="interactive-demo-content text-center">
    <div class="font-mono bg-gray-800 p-3 rounded inline-block mb-4">condition ? valueIfTrue : valueIfFalse</div>
    <div class="flex justify-center items-center space-x-4">
      <div class="w-24 p-2 border border-gray-700 rounded">Condition</div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <div class="relative">
        <div class="w-24 p-2 border border-green-500 rounded mb-2">True?</div>
        <div class="w-24 p-2 border border-red-500 rounded">False?</div>
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute -right-6 top-3 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute -right-6 bottom-3 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <div class="relative">
        <div class="w-24 p-2 bg-green-900/30 border border-green-500 rounded mb-2">valueIfTrue</div>
        <div class="w-24 p-2 bg-red-900/30 border border-red-500 rounded">valueIfFalse</div>
      </div>
    </div>
  </div>
</div>

```javascript
// Syntax: condition ? expressionIfTrue : expressionIfFalse

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"

// Equivalent if-else statement
let status2;
if (age >= 18) {
  status2 = "Adult";
} else {
  status2 = "Minor";
}
```

## String Operators

The `+` operator can also be used to concatenate strings:

```javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;  // "John Doe"

// String concatenation with assignment
let greeting = "Hello, ";
greeting += fullName;  // "Hello, John Doe"
```

<div class="callout warning">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    `+` Operator Overloading
  </div>
  <div class="callout-content">
    <p>The <code>+</code> operator behaves differently depending on the operands. If either operand is a string, it performs string concatenation. Otherwise, it performs numeric addition.</p>
    <p><code>5 + 2</code> → 7 (Number addition)</p>
    <p><code>"5" + 2</code> → "52" (String concatenation)</p>
    <p><code>5 + "2"</code> → "52" (String concatenation)</p>
  </div>
</div>

## Type Operators

JavaScript has operators for checking types:

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Type Checking Operators</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4">
        <h4 class="font-bold mb-2"><code>typeof</code></h4>
        <p class="text-sm mb-2">Returns a string indicating the type of the unevaluated operand.</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          <code>typeof 42</code> → "number"<br>
          <code>typeof "hi"</code> → "string"<br>
          <code>typeof {}</code> → "object"<br>
          <code>typeof null</code> → "object" (bug!)<br>
          <code>typeof undefined</code> → "undefined"
        </div>
      </div>
      <div class="card p-4">
        <h4 class="font-bold mb-2"><code>instanceof</code></h4>
        <p class="text-sm mb-2">Checks if an object is an instance of a particular class or constructor.</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          <code>[] instanceof Array</code> → true<br>
          <code>{} instanceof Object</code> → true<br>
          <code>new Date() instanceof Date</code> → true<br>
          <code>[] instanceof Object</code> → true (Arrays inherit from Object)
        </div>
      </div>
    </div>
  </div>
</div>

```javascript
console.log(typeof 42);           // "number"
console.log(typeof "Hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (this is a known JavaScript bug)
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){});  // "function"

// instanceof
let arr = [1, 2, 3];
console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true (arrays are also objects)
```

## Bitwise Operators

Bitwise operators perform operations on the binary representations of numbers. These are less commonly used in typical web development but are important in certain low-level or performance-critical scenarios.

<div class="callout info">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    Bitwise Operations
  </div>
  <div class="callout-content">
    <p>These operators treat their operands as sequences of 32 bits (zeros and ones) and perform operations bit by bit.</p>
    <p>Example: <code>5 & 1</code> (Bitwise AND)</p>
    <p><code>5 = 0101</code><br><code>1 = 0001</code><br><code>-------</code><br><code>& = 0001</code> (which is 1)</p>
  </div>
</div>

| Operator | Description | Example |
|----------|-------------|---------|
| `&` | Bitwise AND | `5 & 1` returns `1` |
| `\|` | Bitwise OR | `5 \| 1` returns `5` |
| `^` | Bitwise XOR | `5 ^ 1` returns `4` |
| `~` | Bitwise NOT | `~5` returns `-6` |
| `<<` | Left shift | `5 << 1` returns `10` |
| `>>` | Right shift | `5 >> 1` returns `2` |
| `>>>` | Unsigned right shift | `5 >>> 1` returns `2` |

## Operator Precedence

Operators have different precedence levels that determine the order of evaluation. Higher precedence operators are evaluated before lower precedence operators.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Operator Precedence Hierarchy (Simplified)</h3>
  </div>
  <div class="interactive-demo-content">
    <ol class="list-decimal pl-5 space-y-2 text-sm">
      <li>Grouping: <code>()</code></li>
      <li>Member Access: <code>.</code>, <code>[]</code>, Function Call: <code>()</code>, <code>new</code></li>
      <li>Increment/Decrement: <code>++</code>, <code>--</code>, Logical NOT: <code>!</code>, <code>typeof</code></li>
      <li>Exponentiation: <code>**</code></li>
      <li>Multiplication/Division/Modulus: <code>*</code>, <code>/</code>, <code>%</code></li>
      <li>Addition/Subtraction: <code>+</code>, <code>-</code></li>
      <li>Comparison: <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>, <code>instanceof</code></li>
      <li>Equality: <code>==</code>, <code>!=</code>, <code>===</code>, <code>!==</code></li>
      <li>Logical AND: <code>&&</code></li>
      <li>Logical OR: <code>||</code></li>
      <li>Nullish Coalescing: <code>??</code></li>
      <li>Conditional (Ternary): <code>? :</code></li>
      <li>Assignment: <code>=</code>, <code>+=</code>, <code>-=</code>, etc.</li>
    </ol>
    <p class="text-xs mt-2">Higher numbers mean lower precedence. Use parentheses <code>()</code> to explicitly control the order.</p>
  </div>
</div>

### Example of Precedence

```javascript
let result = 2 + 3 * 4;  // 14, not 20, because * has higher precedence than +
let result2 = (2 + 3) * 4;  // 20, parentheses override precedence

// Complex example
let x = 5;
let y = 10;
let z = 15;
let result3 = x + y * z / 5 + x * y;  // 5 + (10 * 15) / 5 + (5 * 10) = 5 + 30 + 50 = 85
```

## Practice Exercises

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Operator Challenges</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="tabs">
      <div class="tab active">Exercise 1</div>
      <div class="tab">Exercise 2</div>
      <div class="tab">Exercise 3</div>
    </div>
    
    <div class="p-4 bg-gray-800 rounded-lg">
      <h4 class="font-bold mb-2">Arithmetic Operations</h4>
      <p class="mb-4">Calculate the area and perimeter of a rectangle with width 7 and height 4.</p>
      <div class="code-editor">
        <div class="code-editor-header">
          <span class="text-sm font-medium">Your Solution</span>
        </div>
        <div class="code-editor-content">
          <pre class="language-javascript">
let width = 7;
let height = 4;

// Calculate area (width * height)
let area = width * height;

// Calculate perimeter (2 * (width + height))
let perimeter = 2 * (width + height);

console.log("Area:", area); // Should be 28
console.log("Perimeter:", perimeter); // Should be 22
          </pre>
        </div>
      </div>
    </div>
  </div>
</div>

## Summary

Operators are the workhorses of JavaScript, allowing you to perform calculations, comparisons, logical checks, and assignments. Understanding their types, behavior, and precedence is crucial for writing correct and efficient code.

<div class="mt-8 p-4 bg-indigo-900/30 border border-indigo-500 rounded-lg">
  <h3 class="text-xl font-bold mb-2">Ready to continue?</h3>
  <p class="mb-4">Next, we'll explore how to control the flow of your program using conditional statements and loops.</p>
  <div class="flex justify-between">
    <a href="#/topic/javascript/data_types" class="btn-secondary inline-flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
      Previous: Data Types
    </a>
    <a href="#/topic/javascript/control_flow" class="btn-primary inline-flex items-center">
      Next: Control Flow
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
