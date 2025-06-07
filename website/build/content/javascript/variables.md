# JavaScript Variables

Variables are containers for storing data values. In JavaScript, variables are declared using `var`, `let`, or `const` keywords.

<div class="callout info">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    What are Variables?
  </div>
  <div class="callout-content">
    <p>Think of variables as labeled boxes where you can store different types of values. The label (variable name) helps you find and use what's inside the box later in your code.</p>
  </div>
</div>

## Variable Declaration and Initialization

In JavaScript, you can declare variables in three ways:

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Three Ways to Declare Variables</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="card p-4 border-l-4 border-l-yellow-500">
        <h4 class="font-bold text-yellow-400 mb-2">var</h4>
        <p class="text-sm mb-2">The original way (pre-2015)</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          <span class="text-yellow-400">var</span> name = <span class="text-green-400">"John"</span>;
        </div>
      </div>
      
      <div class="card p-4 border-l-4 border-l-blue-500">
        <h4 class="font-bold text-blue-400 mb-2">let</h4>
        <p class="text-sm mb-2">Modern way for changeable values</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          <span class="text-blue-400">let</span> age = <span class="text-purple-400">30</span>;
        </div>
      </div>
      
      <div class="card p-4 border-l-4 border-l-red-500">
        <h4 class="font-bold text-red-400 mb-2">const</h4>
        <p class="text-sm mb-2">Modern way for fixed values</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          <span class="text-red-400">const</span> PI = <span class="text-purple-400">3.14159</span>;
        </div>
      </div>
    </div>
  </div>
</div>

### Using `var` (older method)

```javascript
var name = "John";
var age = 30;
var isStudent = false;
```

### Using `let` (introduced in ES6)

```javascript
let name = "John";
let age = 30;
let isStudent = false;
```

### Using `const` (for constants, introduced in ES6)

```javascript
const PI = 3.14159;
const MAX_SIZE = 100;
const COMPANY_NAME = "Acme Corp";
```

## Differences Between var, let, and const

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Comparison Chart</h3>
  </div>
  <div class="interactive-demo-content overflow-x-auto">
    <table class="w-full text-sm">
      <thead>
        <tr>
          <th class="p-2 bg-gray-800">Feature</th>
          <th class="p-2 bg-gray-800 text-yellow-400">var</th>
          <th class="p-2 bg-gray-800 text-blue-400">let</th>
          <th class="p-2 bg-gray-800 text-red-400">const</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="p-2 font-medium">Scope</td>
          <td class="p-2">Function or global</td>
          <td class="p-2">Block</td>
          <td class="p-2">Block</td>
        </tr>
        <tr>
          <td class="p-2 font-medium">Hoisting</td>
          <td class="p-2">Hoisted with <code>undefined</code></td>
          <td class="p-2">Hoisted but not initialized</td>
          <td class="p-2">Hoisted but not initialized</td>
        </tr>
        <tr>
          <td class="p-2 font-medium">Reassignment</td>
          <td class="p-2">✅ Allowed</td>
          <td class="p-2">✅ Allowed</td>
          <td class="p-2">❌ Not allowed</td>
        </tr>
        <tr>
          <td class="p-2 font-medium">Redeclaration</td>
          <td class="p-2">✅ Allowed</td>
          <td class="p-2">❌ Not allowed</td>
          <td class="p-2">❌ Not allowed</td>
        </tr>
        <tr>
          <td class="p-2 font-medium">When to use</td>
          <td class="p-2">Legacy code only</td>
          <td class="p-2">When value needs to change</td>
          <td class="p-2">Default choice</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

### Scope

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Scope Visualization</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
      <div class="font-mono text-sm mb-2">// Function scope</div>
      <div class="p-3 bg-gray-900 rounded-lg border border-gray-700 mb-4">
        <div class="font-mono text-sm">function example() {</div>
        <div class="pl-4 font-mono text-sm">
          <span class="text-yellow-400">var</span> functionScoped = <span class="text-green-400">"I'm available in the entire function"</span>;
        </div>
        
        <div class="mt-2 p-3 bg-gray-800 rounded-lg border border-gray-700">
          <div class="font-mono text-sm">// Block scope (if statement)</div>
          <div class="font-mono text-sm">if (true) {</div>
          <div class="pl-4 font-mono text-sm">
            <span class="text-yellow-400">var</span> stillFunctionScoped = <span class="text-green-400">"I'm also available in the entire function"</span>;
          </div>
          <div class="pl-4 font-mono text-sm">
            <span class="text-blue-400">let</span> blockScoped = <span class="text-green-400">"I'm only available in this if block"</span>;
          </div>
          <div class="pl-4 font-mono text-sm">
            <span class="text-red-400">const</span> alsoBlockScoped = <span class="text-green-400">"I'm also only available in this if block"</span>;
          </div>
          <div class="font-mono text-sm">}</div>
          
          <div class="mt-2 font-mono text-sm">// Here:</div>
          <div class="pl-4 font-mono text-sm">// ✅ Can access: functionScoped, stillFunctionScoped</div>
          <div class="pl-4 font-mono text-sm">// ❌ Cannot access: blockScoped, alsoBlockScoped</div>
        </div>
        
        <div class="font-mono text-sm">}</div>
      </div>
    </div>
  </div>
</div>

### Example of Scope Differences

```javascript
function scopeExample() {
  if (true) {
    var varVariable = "I am var";
    let letVariable = "I am let";
    const constVariable = "I am const";
  }
  
  console.log(varVariable);    // "I am var" - accessible outside the block
  console.log(letVariable);    // Error! Not accessible outside the block
  console.log(constVariable);  // Error! Not accessible outside the block
}
```

### Reassignment

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Reassignment Visualization</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="card p-4">
        <h4 class="font-bold text-yellow-400 mb-2">var</h4>
        <div class="space-y-2">
          <div class="flex items-center">
            <div class="w-24 h-10 bg-gray-700 rounded flex items-center justify-center mr-2">
              <span class="font-mono">x</span>
            </div>
            <span class="mx-2">=</span>
            <div class="w-12 h-10 bg-blue-700 rounded flex items-center justify-center">
              <span class="font-mono">10</span>
            </div>
          </div>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div class="flex items-center">
            <div class="w-24 h-10 bg-gray-700 rounded flex items-center justify-center mr-2">
              <span class="font-mono">x</span>
            </div>
            <span class="mx-2">=</span>
            <div class="w-12 h-10 bg-green-700 rounded flex items-center justify-center">
              <span class="font-mono">20</span>
            </div>
          </div>
          <p class="text-center text-green-400 mt-2">✓ Valid</p>
        </div>
      </div>
      
      <div class="card p-4">
        <h4 class="font-bold text-blue-400 mb-2">let</h4>
        <div class="space-y-2">
          <div class="flex items-center">
            <div class="w-24 h-10 bg-gray-700 rounded flex items-center justify-center mr-2">
              <span class="font-mono">y</span>
            </div>
            <span class="mx-2">=</span>
            <div class="w-12 h-10 bg-blue-700 rounded flex items-center justify-center">
              <span class="font-mono">10</span>
            </div>
          </div>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div class="flex items-center">
            <div class="w-24 h-10 bg-gray-700 rounded flex items-center justify-center mr-2">
              <span class="font-mono">y</span>
            </div>
            <span class="mx-2">=</span>
            <div class="w-12 h-10 bg-green-700 rounded flex items-center justify-center">
              <span class="font-mono">20</span>
            </div>
          </div>
          <p class="text-center text-green-400 mt-2">✓ Valid</p>
        </div>
      </div>
      
      <div class="card p-4">
        <h4 class="font-bold text-red-400 mb-2">const</h4>
        <div class="space-y-2">
          <div class="flex items-center">
            <div class="w-24 h-10 bg-gray-700 rounded flex items-center justify-center mr-2">
              <span class="font-mono">z</span>
            </div>
            <span class="mx-2">=</span>
            <div class="w-12 h-10 bg-blue-700 rounded flex items-center justify-center">
              <span class="font-mono">10</span>
            </div>
          </div>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div class="flex items-center">
            <div class="w-24 h-10 bg-gray-700 rounded flex items-center justify-center mr-2">
              <span class="font-mono">z</span>
            </div>
            <span class="mx-2">=</span>
            <div class="w-12 h-10 bg-red-700 rounded flex items-center justify-center">
              <span class="font-mono">20</span>
            </div>
          </div>
          <p class="text-center text-red-400 mt-2">✗ Error!</p>
        </div>
      </div>
    </div>
  </div>
</div>

```javascript
var x = 10;
x = 20;  // Valid

let y = 10;
y = 20;  // Valid

const z = 10;
z = 20;  // Error! Cannot reassign a constant
```

### Hoisting

All declarations in JavaScript are hoisted (moved to the top of their scope), but their behavior differs:

<div class="callout warning">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    Understanding Hoisting
  </div>
  <div class="callout-content">
    <p>Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution. This can lead to unexpected results if you're not careful!</p>
  </div>
</div>

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Hoisting Behavior</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4">
        <h4 class="font-bold text-yellow-400 mb-2">var hoisting</h4>
        <div class="mb-4">
          <p class="font-bold mb-1">What you write:</p>
          <div class="bg-gray-900 p-2 rounded font-mono text-sm">
            console.log(x);<br>
            var x = 5;
          </div>
        </div>
        <div>
          <p class="font-bold mb-1">How JavaScript executes it:</p>
          <div class="bg-gray-900 p-2 rounded font-mono text-sm">
            var x = undefined; // Hoisted and initialized<br>
            console.log(x); // Outputs: undefined<br>
            x = 5;
          </div>
        </div>
      </div>
      
      <div class="card p-4">
        <h4 class="font-bold text-blue-400 mb-2">let/const hoisting</h4>
        <div class="mb-4">
          <p class="font-bold mb-1">What you write:</p>
          <div class="bg-gray-900 p-2 rounded font-mono text-sm">
            console.log(y);<br>
            let y = 5;
          </div>
        </div>
        <div>
          <p class="font-bold mb-1">How JavaScript executes it:</p>
          <div class="bg-gray-900 p-2 rounded font-mono text-sm">
            // y is hoisted but not initialized<br>
            // "Temporal Dead Zone" for y starts<br>
            console.log(y); // Error: Cannot access before initialization<br>
            let y = 5; // TDZ ends
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```javascript
console.log(x);  // undefined (hoisted but initialized as undefined)
var x = 5;

console.log(y);  // Error! Cannot access before initialization
let y = 5;
```

## Variable Naming Rules

<div class="callout info">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    Naming Rules
  </div>
  <div class="callout-content">
    <ol class="list-decimal pl-5 space-y-1">
      <li>Names can contain letters, digits, underscores, and dollar signs</li>
      <li>Names must begin with a letter, $ or _</li>
      <li>Names are case-sensitive (<code>myVar</code> and <code>myvar</code> are different)</li>
      <li>Reserved words (like JavaScript keywords) cannot be used as names</li>
    </ol>
  </div>
</div>

### Valid Variable Names
```javascript
let firstName = "John";
let last_name = "Doe";
let $price = 9.99;
let _count = 5;
```

### Invalid Variable Names
```javascript
let 1stName = "John";    // Cannot start with a digit
let my-name = "John";    // Cannot use hyphen
let var = "Variable";    // Cannot use reserved word
```

## Best Practices for Variables

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div class="card p-4">
    <div class="text-xl text-indigo-400 mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <h3 class="font-bold mb-2">Use descriptive names</h3>
    <div class="bg-gray-900 p-2 rounded font-mono text-sm mb-2">
      <span class="text-red-400">// Bad</span><br>
      let x = 5;
    </div>
    <div class="bg-gray-900 p-2 rounded font-mono text-sm">
      <span class="text-green-400">// Good</span><br>
      let userAge = 5;
    </div>
  </div>
  
  <div class="card p-4">
    <div class="text-xl text-indigo-400 mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <h3 class="font-bold mb-2">Use camelCase for variables</h3>
    <div class="bg-gray-900 p-2 rounded font-mono text-sm">
      let firstName = "John";<br>
      let isUserLoggedIn = true;
    </div>
  </div>
  
  <div class="card p-4">
    <div class="text-xl text-indigo-400 mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <h3 class="font-bold mb-2">Use UPPERCASE for constants</h3>
    <div class="bg-gray-900 p-2 rounded font-mono text-sm">
      const MAX_USERS = 50;<br>
      const API_KEY = "abc123";
    </div>
  </div>
  
  <div class="card p-4">
    <div class="text-xl text-indigo-400 mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <h3 class="font-bold mb-2">Use const by default</h3>
    <div class="bg-gray-900 p-2 rounded font-mono text-sm">
      // If value won't change, use const<br>
      const API_URL = "https://api.example.com";<br><br>
      // If value might change, use let<br>
      let counter = 0;
    </div>
  </div>
</div>

## Variable Data Types

JavaScript is a dynamically typed language, which means variables can hold values of any type:

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">JavaScript Data Types</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="card p-4 border-l-4 border-l-green-500">
        <h4 class="font-bold text-green-400 mb-2">String</h4>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          let name = <span class="text-green-400">"John"</span>;
        </div>
        <p class="text-xs mt-2">Text values in quotes</p>
      </div>
      
      <div class="card p-4 border-l-4 border-l-blue-500">
        <h4 class="font-bold text-blue-400 mb-2">Number</h4>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          let age = <span class="text-blue-400">30</span>;
        </div>
        <p class="text-xs mt-2">Integers and decimals</p>
      </div>
      
      <div class="card p-4 border-l-4 border-l-purple-500">
        <h4 class="font-bold text-purple-400 mb-2">Boolean</h4>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          let isStudent = <span class="text-purple-400">false</span>;
        </div>
        <p class="text-xs mt-2">true or false values</p>
      </div>
      
      <div class="card p-4 border-l-4 border-l-yellow-500">
        <h4 class="font-bold text-yellow-400 mb-2">Object</h4>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          let person = {<br>
          &nbsp;&nbsp;firstName: <span class="text-green-400">"John"</span>,<br>
          &nbsp;&nbsp;lastName: <span class="text-green-400">"Doe"</span><br>
          };
        </div>
        <p class="text-xs mt-2">Collections of key-value pairs</p>
      </div>
      
      <div class="card p-4 border-l-4 border-l-red-500">
        <h4 class="font-bold text-red-400 mb-2">Array</h4>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          let hobbies = [<span class="text-green-400">"reading"</span>, <span class="text-green-400">"coding"</span>];
        </div>
        <p class="text-xs mt-2">Ordered collections of values</p>
      </div>
      
      <div class="card p-4 border-l-4 border-l-gray-500">
        <h4 class="font-bold text-gray-400 mb-2">Null/Undefined</h4>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          let nothing = <span class="text-gray-400">null</span>;<br>
          let undefined_var;
        </div>
        <p class="text-xs mt-2">Absence of value</p>
      </div>
    </div>
  </div>
</div>

```javascript
let name = "John";       // String
let age = 30;            // Number
let isStudent = false;   // Boolean
let person = {           // Object
  firstName: "John",
  lastName: "Doe"
};
let hobbies = ["reading", "swimming", "coding"];  // Array
let nothing = null;      // Null
let undefined_var;       // Undefined
```

## Interactive Example: Working with Variables

Try modifying this code to see how variables work:

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Try It: Counter Example</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="code-editor">
      <div class="code-editor-header">
        <span class="text-sm font-medium">Interactive Counter</span>
        <div class="code-editor-actions">
          <button class="code-editor-action bg-indigo-700 hover:bg-indigo-600" title="Run code">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="code-editor-content">
        <pre class="language-javascript">
// Declare variables
let count = 0;
const MAX_COUNT = 10;

// Function to increment count
function incrementCount() {
  if (count < MAX_COUNT) {
    count++;
    console.log(`Count is now: ${count}`);
  } else {
    console.log(`Maximum count of ${MAX_COUNT} reached!`);
  }
}

// Call the function multiple times
incrementCount();  // Count is now: 1
incrementCount();  // Count is now: 2

// Try adding more incrementCount() calls
// or changing the MAX_COUNT value!
        </pre>
      </div>
    </div>
  </div>
</div>

## Common Mistakes with Variables

<div class="callout warning">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    Watch Out For These Common Mistakes
  </div>
  <div class="callout-content">
    <p>Even experienced developers can make these errors. Learning to recognize them will save you debugging time!</p>
  </div>
</div>

### 1. Forgetting to declare variables

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
  <div class="card p-4">
    <h4 class="font-bold text-red-400 mb-2">❌ Bad</h4>
    <div class="bg-gray-900 p-2 rounded font-mono text-sm">
      function addNumbers() {<br>
      &nbsp;&nbsp;result = a + b;  // Undeclared variable<br>
      &nbsp;&nbsp;return result;<br>
      }
    </div>
  </div>
  
  <div class="card p-4">
    <h4 class="font-bold text-green-400 mb-2">✅ Good</h4>
    <div class="bg-gray-900 p-2 rounded font-mono text-sm">
      function addNumbers(a, b) {<br>
      &nbsp;&nbsp;let result = a + b;<br>
      &nbsp;&nbsp;return result;<br>
      }
    </div>
  </div>
</div>

### 2. Using const for values that need to change

```javascript
// This will cause an error
const score = 0;
score = 10;  // Error! Cannot reassign a constant
```

### 3. Confusion about object mutability with const

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Object Mutability with const</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4">
        <h4 class="font-bold text-green-400 mb-2">✅ Valid</h4>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm mb-2">
          const user = { name: "John" };<br>
          user.name = "Jane";  // Changing a property
        </div>
        <div class="flex items-center">
          <div class="w-16 h-16 bg-gray-700 rounded flex items-center justify-center mr-4">
            <span class="font-mono">user</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <div class="w-32 h-16 bg-yellow-700/50 rounded p-2">
            <div class="font-mono text-xs">name: "Jane"</div>
          </div>
        </div>
        <p class="text-xs mt-2">The reference to the object stays the same, only the content changes</p>
      </div>
      
      <div class="card p-4">
        <h4 class="font-bold text-red-400 mb-2">❌ Invalid</h4>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm mb-2">
          const user = { name: "John" };<br>
          user = { name: "Jane" };  // Error!
        </div>
        <div class="flex items-center">
          <div class="w-16 h-16 bg-gray-700 rounded flex items-center justify-center mr-4">
            <span class="font-mono">user</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <div class="w-32 h-16 bg-yellow-700/50 rounded p-2">
            <div class="font-mono text-xs">name: "Jane"</div>
          </div>
        </div>
        <p class="text-xs mt-2">Cannot reassign the variable to a new object</p>
      </div>
    </div>
  </div>
</div>

### 4. Variable shadowing

```javascript
let x = 10;

function example() {
  let x = 20;  // This creates a new variable that shadows the outer x
  console.log(x);  // 20
}

example();
console.log(x);  // 10 (outer x is unchanged)
```

## Practice Exercises

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Try These Exercises</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="tabs">
      <div class="tab active">Exercise 1</div>
      <div class="tab">Exercise 2</div>
      <div class="tab">Exercise 3</div>
    </div>
    
    <div class="p-4 bg-gray-800 rounded-lg">
      <h4 class="font-bold mb-2">Basic Variable Declaration</h4>
      <p class="mb-4">Declare three variables using let, var, and const with appropriate values, then print them to the console.</p>
      <div class="code-editor">
        <div class="code-editor-header">
          <span class="text-sm font-medium">Your Solution</span>
        </div>
        <div class="code-editor-content">
          <pre class="language-javascript">
// Declare your variables here
// Example:
let name = "Your Name";
var age = 25;
const IS_STUDENT = true;

// Print to console
console.log(name);
console.log(age);
console.log(IS_STUDENT);
          </pre>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="callout tip">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
    Pro Tip
  </div>
  <div class="callout-content">
    <p>When in doubt about whether to use <code>let</code> or <code>const</code>, start with <code>const</code>. If you later find that you need to reassign the variable, you can change it to <code>let</code>. This practice helps prevent accidental reassignments and makes your code more predictable.</p>
  </div>
</div>

## Summary

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Key Takeaways</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4">
        <h4 class="font-bold mb-2">Variable Declaration</h4>
        <ul class="list-disc pl-5 space-y-1">
          <li>Use <code>var</code> for legacy code only</li>
          <li>Use <code>let</code> for variables that change</li>
          <li>Use <code>const</code> for variables that don't change</li>
        </ul>
      </div>
      
      <div class="card p-4">
        <h4 class="font-bold mb-2">Scope Rules</h4>
        <ul class="list-disc pl-5 space-y-1">
          <li><code>var</code> is function-scoped</li>
          <li><code>let</code> and <code>const</code> are block-scoped</li>
          <li>Block scope includes if statements, loops, etc.</li>
        </ul>
      </div>
      
      <div class="card p-4">
        <h4 class="font-bold mb-2">Best Practices</h4>
        <ul class="list-disc pl-5 space-y-1">
          <li>Use descriptive variable names</li>
          <li>Use camelCase for variables and functions</li>
          <li>Use UPPERCASE for constants</li>
          <li>Always declare variables before using them</li>
        </ul>
      </div>
      
      <div class="card p-4">
        <h4 class="font-bold mb-2">Common Pitfalls</h4>
        <ul class="list-disc pl-5 space-y-1">
          <li>Forgetting to declare variables</li>
          <li>Using <code>const</code> for values that need to change</li>
          <li>Confusion about object mutability with <code>const</code></li>
          <li>Variable shadowing</li>
        </ul>
      </div>
    </div>
  </div>
</div>

By understanding variables and following best practices, you'll write cleaner, more maintainable JavaScript code.

<div class="mt-8 p-4 bg-indigo-900/30 border border-indigo-500 rounded-lg">
  <h3 class="text-xl font-bold mb-2">Ready to continue?</h3>
  <p class="mb-4">In the next lesson, we'll explore JavaScript data types in more detail.</p>
  <div class="flex justify-between">
    <a href="#/topic/javascript/including_javascript" class="btn-secondary inline-flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
      Previous: Including JavaScript
    </a>
    <a href="#/topic/javascript/data_types" class="btn-primary inline-flex items-center">
      Next: Data Types
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
