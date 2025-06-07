# JavaScript Control Flow

Control flow is how we direct the execution of our code based on certain conditions. JavaScript provides several structures to control the flow of execution in your programs.

<div class="callout info">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    What is Control Flow?
  </div>
  <div class="callout-content">
    <p>Control flow determines the order in which statements are executed in a program. Think of it as a roadmap that guides your code's execution path based on conditions and decisions.</p>
  </div>
</div>

## Conditional Statements

Conditional statements allow you to execute different blocks of code based on specified conditions.

### if Statement

The `if` statement executes a block of code if a specified condition is true.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">if Statement Flow</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="flex flex-col md:flex-row items-center justify-center gap-4">
      <div class="bg-gray-800 p-3 rounded text-center">
        <div class="font-mono mb-2">if (condition) {<br>&nbsp;&nbsp;// code<br>}</div>
      </div>
      <div class="flex flex-col items-center">
        <div class="w-32 p-2 border border-gray-700 rounded mb-4">Condition</div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col items-center">
          <div class="w-24 p-2 border border-green-500 rounded mb-2">True</div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
          <div class="w-24 p-2 bg-green-900/30 border border-green-500 rounded">Execute code</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-24 p-2 border border-red-500 rounded mb-2">False</div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <div class="w-24 p-2 bg-red-900/30 border border-red-500 rounded">Skip code</div>
        </div>
      </div>
    </div>
  </div>
</div>

```javascript
if (condition) {
  // code to be executed if the condition is true
}
```

Example:
```javascript
let hour = 14;

if (hour < 12) {
  console.log("Good morning!");
}
```

### if...else Statement

The `if...else` statement executes one block of code if a condition is true and another block if the condition is false.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">if...else Statement Flow</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="flex flex-col md:flex-row items-center justify-center gap-4">
      <div class="bg-gray-800 p-3 rounded text-center">
        <div class="font-mono mb-2">if (condition) {<br>&nbsp;&nbsp;// code A<br>} else {<br>&nbsp;&nbsp;// code B<br>}</div>
      </div>
      <div class="flex flex-col items-center">
        <div class="w-32 p-2 border border-gray-700 rounded mb-4">Condition</div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col items-center">
          <div class="w-24 p-2 border border-green-500 rounded mb-2">True</div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
          <div class="w-24 p-2 bg-green-900/30 border border-green-500 rounded">Execute<br>code A</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-24 p-2 border border-red-500 rounded mb-2">False</div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
          <div class="w-24 p-2 bg-red-900/30 border border-red-500 rounded">Execute<br>code B</div>
        </div>
      </div>
    </div>
  </div>
</div>

```javascript
if (condition) {
  // code to be executed if the condition is true
} else {
  // code to be executed if the condition is false
}
```

Example:
```javascript
let hour = 14;

if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon/evening!");
}
```

### if...else if...else Statement

The `if...else if...else` statement executes different blocks of code for more than two conditions.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Multiple Conditions</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="bg-gray-800 p-3 rounded mb-4">
      <div class="font-mono text-sm">
        if (condition1) {<br>
        &nbsp;&nbsp;// code block 1<br>
        } else if (condition2) {<br>
        &nbsp;&nbsp;// code block 2<br>
        } else {<br>
        &nbsp;&nbsp;// code block 3<br>
        }
      </div>
    </div>
    <div class="relative py-4">
      <div class="absolute left-0 inset-y-0 w-1 bg-gray-700"></div>
      <ul class="space-y-6 pl-8">
        <li class="relative">
          <div class="absolute -left-7 mt-1.5 h-5 w-5 rounded-full bg-indigo-500 border-4 border-gray-900"></div>
          <p class="font-bold">Check condition1</p>
          <p class="text-sm">If true → Execute code block 1 and exit</p>
          <p class="text-sm">If false → Continue to next check</p>
        </li>
        <li class="relative">
          <div class="absolute -left-7 mt-1.5 h-5 w-5 rounded-full bg-indigo-500 border-4 border-gray-900"></div>
          <p class="font-bold">Check condition2</p>
          <p class="text-sm">If true → Execute code block 2 and exit</p>
          <p class="text-sm">If false → Continue to else block</p>
        </li>
        <li class="relative">
          <div class="absolute -left-7 mt-1.5 h-5 w-5 rounded-full bg-indigo-500 border-4 border-gray-900"></div>
          <p class="font-bold">Execute else block</p>
          <p class="text-sm">Execute code block 3 (default case)</p>
        </li>
      </ul>
    </div>
  </div>
</div>

```javascript
if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if condition1 is false and condition2 is true
} else {
  // code to be executed if both condition1 and condition2 are false
}
```

Example:
```javascript
let hour = 14;

if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}
```

### switch Statement

The `switch` statement selects one of many code blocks to be executed based on a value.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">switch Statement</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="flex flex-col md:flex-row items-center justify-center gap-4">
      <div class="bg-gray-800 p-3 rounded text-center">
        <div class="font-mono text-sm mb-2">
          switch (expression) {<br>
          &nbsp;&nbsp;case value1:<br>
          &nbsp;&nbsp;&nbsp;&nbsp;// code<br>
          &nbsp;&nbsp;&nbsp;&nbsp;break;<br>
          &nbsp;&nbsp;case value2:<br>
          &nbsp;&nbsp;&nbsp;&nbsp;// code<br>
          &nbsp;&nbsp;&nbsp;&nbsp;break;<br>
          &nbsp;&nbsp;default:<br>
          &nbsp;&nbsp;&nbsp;&nbsp;// code<br>
          }
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div class="w-32 p-2 border border-gray-700 rounded mb-4">Expression</div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex items-center">
          <div class="w-24 p-2 border border-blue-500 rounded">value1?</div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <div class="w-24 p-2 bg-blue-900/30 border border-blue-500 rounded">Code 1</div>
        </div>
        <div class="flex items-center">
          <div class="w-24 p-2 border border-purple-500 rounded">value2?</div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <div class="w-24 p-2 bg-purple-900/30 border border-purple-500 rounded">Code 2</div>
        </div>
        <div class="flex items-center">
          <div class="w-24 p-2 border border-gray-500 rounded">default</div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <div class="w-24 p-2 bg-gray-700 border border-gray-500 rounded">Default code</div>
        </div>
      </div>
    </div>
  </div>
</div>

```javascript
switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  default:
    // code to be executed if expression doesn't match any cases
}
```

Example:
```javascript
let day = new Date().getDay();

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}
```

<div class="callout warning">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    Don't Forget the break!
  </div>
  <div class="callout-content">
    <p>Without the <code>break</code> statement, code execution will "fall through" to the next case, even if that case doesn't match the expression. This is sometimes useful for shared code blocks, but usually leads to unexpected behavior.</p>
  </div>
</div>

#### Important Notes About switch

1. The `break` statement is important. Without it, the code will continue executing into the next case.
2. The `default` case is optional and runs if no case matches.
3. Multiple cases can share the same code block:

```javascript
let day = new Date().getDay();
let dayType;

switch (day) {
  case 0:
  case 6:
    dayType = "Weekend";
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    dayType = "Weekday";
    break;
  default:
    dayType = "Invalid day";
}
```

## Loops

Loops are used to execute a block of code multiple times.

<div class="callout info">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    When to Use Loops
  </div>
  <div class="callout-content">
    <p>Use loops when you need to:</p>
    <ul class="list-disc pl-5 space-y-1">
      <li>Perform the same action on each item in an array</li>
      <li>Repeat an action a specific number of times</li>
      <li>Process data until a condition is met</li>
      <li>Iterate through properties of an object</li>
    </ul>
  </div>
</div>

### for Loop

The `for` loop repeats a block of code a specified number of times.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">for Loop Anatomy</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="bg-gray-800 p-3 rounded mb-4">
      <div class="font-mono text-center">for (<span class="text-blue-400">initialization</span>; <span class="text-green-400">condition</span>; <span class="text-purple-400">increment</span>) { ... }</div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="card p-4 border-l-4 border-l-blue-500">
        <h4 class="font-bold text-blue-400 mb-2">Initialization</h4>
        <p class="text-sm">Executed once before the loop starts.</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm mt-2">
          let i = 0;
        </div>
      </div>
      <div class="card p-4 border-l-4 border-l-green-500">
        <h4 class="font-bold text-green-400 mb-2">Condition</h4>
        <p class="text-sm">Checked before each iteration. Loop continues while true.</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm mt-2">
          i < 5;
        </div>
      </div>
      <div class="card p-4 border-l-4 border-l-purple-500">
        <h4 class="font-bold text-purple-400 mb-2">Increment</h4>
        <p class="text-sm">Executed after each iteration.</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm mt-2">
          i++;
        </div>
      </div>
    </div>
  </div>
</div>

```javascript
for (initialization; condition; increment/decrement) {
  // code to be executed
}
```

Example:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}
```

This will output:
```
Iteration 0
Iteration 1
Iteration 2
Iteration 3
Iteration 4
```

### for...in Loop

The `for...in` loop iterates over the properties of an object.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">for...in Loop Visualization</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="flex flex-col md:flex-row items-center justify-center gap-4">
      <div class="bg-gray-800 p-3 rounded">
        <div class="font-mono text-sm">
          const person = {<br>
          &nbsp;&nbsp;firstName: "John",<br>
          &nbsp;&nbsp;lastName: "Doe",<br>
          &nbsp;&nbsp;age: 30<br>
          };<br><br>
          for (let key in person) {<br>
          &nbsp;&nbsp;console.log(`${key}: ${person[key]}`);<br>
          }
        </div>
      </div>
      <div class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
      <div class="bg-gray-800 p-3 rounded">
        <div class="text-green-400 font-mono text-sm">
          firstName: John<br>
          lastName: Doe<br>
          age: 30
        </div>
      </div>
    </div>
  </div>
</div>

```javascript
for (let key in object) {
  // code to be executed
}
```

Example:
```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

for (let prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}
```

This will output:
```
firstName: John
lastName: Doe
age: 30
```

### for...of Loop

The `for...of` loop iterates over iterable objects like arrays, strings, etc.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">for...of vs for...in</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4">
        <h4 class="font-bold text-blue-400 mb-2">for...of</h4>
        <p class="text-sm mb-2">Iterates over <strong>values</strong> of iterable objects.</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm mb-2">
          const colors = ["red", "green", "blue"];<br><br>
          for (let color of colors) {<br>
          &nbsp;&nbsp;console.log(color);<br>
          }
        </div>
        <p class="text-xs">Output: "red", "green", "blue"</p>
      </div>
      <div class="card p-4">
        <h4 class="font-bold text-purple-400 mb-2">for...in</h4>
        <p class="text-sm mb-2">Iterates over <strong>properties</strong> of objects.</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm mb-2">
          const colors = ["red", "green", "blue"];<br><br>
          for (let index in colors) {<br>
          &nbsp;&nbsp;console.log(index);<br>
          }
        </div>
        <p class="text-xs">Output: "0", "1", "2"</p>
      </div>
    </div>
  </div>
</div>

```javascript
for (let value of iterable) {
  // code to be executed
}
```

Example:
```javascript
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}
```

This will output:
```
red
green
blue
```

### while Loop

The `while` loop executes a block of code as long as a specified condition is true.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">while Loop Flow</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="flex flex-col items-center">
      <div class="w-32 p-2 border border-gray-700 rounded mb-4">Condition</div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="flex flex-col items-center">
          <div class="w-24 p-2 border border-green-500 rounded mb-2">True</div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
          <div class="w-24 p-2 bg-green-900/30 border border-green-500 rounded">Execute code</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-24 p-2 border border-red-500 rounded mb-2">False</div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <div class="w-24 p-2 bg-red-900/30 border border-red-500 rounded">Exit loop</div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
      <div class="text-center mt-2">Return to check condition</div>
    </div>
  </div>
</div>

```javascript
while (condition) {
  // code to be executed
}
```

Example:
```javascript
let i = 0;

while (i < 5) {
  console.log(`Iteration ${i}`);
  i++;
}
```

This will output:
```
Iteration 0
Iteration 1
Iteration 2
Iteration 3
Iteration 4
```

### do...while Loop

The `do...while` loop is similar to the `while` loop, but it executes the code block once before checking the condition.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">do...while vs while</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4">
        <h4 class="font-bold text-blue-400 mb-2">while</h4>
        <p class="text-sm mb-2">Checks condition <strong>before</strong> executing code.</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm mb-2">
          let i = 10;<br><br>
          while (i < 5) {<br>
          &nbsp;&nbsp;console.log(i);<br>
          &nbsp;&nbsp;i++;<br>
          }
        </div>
        <p class="text-xs">Output: (nothing, condition is false initially)</p>
      </div>
      <div class="card p-4">
        <h4 class="font-bold text-purple-400 mb-2">do...while</h4>
        <p class="text-sm mb-2">Executes code <strong>once</strong> before checking condition.</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm mb-2">
          let i = 10;<br><br>
          do {<br>
          &nbsp;&nbsp;console.log(i);<br>
          &nbsp;&nbsp;i++;<br>
          } while (i < 5);
        </div>
        <p class="text-xs">Output: 10 (executes once even though condition is false)</p>
      </div>
    </div>
  </div>
</div>

```javascript
do {
  // code to be executed
} while (condition);
```

Example:
```javascript
let i = 0;

do {
  console.log(`Iteration ${i}`);
  i++;
} while (i < 5);
```

This will output:
```
Iteration 0
Iteration 1
Iteration 2
Iteration 3
Iteration 4
```

## Loop Control Statements

### break Statement

The `break` statement terminates the current loop or switch statement.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">break Statement</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="flex flex-col md:flex-row items-center justify-center gap-4">
      <div class="bg-gray-800 p-3 rounded">
        <div class="font-mono text-sm">
          for (let i = 0; i < 10; i++) {<br>
          &nbsp;&nbsp;if (i === 5) {<br>
          &nbsp;&nbsp;&nbsp;&nbsp;break;<br>
          &nbsp;&nbsp;}<br>
          &nbsp;&nbsp;console.log(i);<br>
          }
        </div>
      </div>
      <div class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
      <div class="bg-gray-800 p-3 rounded">
        <div class="text-green-400 font-mono text-sm">
          0<br>
          1<br>
          2<br>
          3<br>
          4<br>
          <span class="text-red-400">// Loop stops at i=5</span>
        </div>
      </div>
    </div>
  </div>
</div>

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

This will output:
```
0
1
2
3
4
```

### continue Statement

The `continue` statement skips the current iteration of a loop and continues with the next iteration.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">continue Statement</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="flex flex-col md:flex-row items-center justify-center gap-4">
      <div class="bg-gray-800 p-3 rounded">
        <div class="font-mono text-sm">
          for (let i = 0; i < 5; i++) {<br>
          &nbsp;&nbsp;if (i === 2) {<br>
          &nbsp;&nbsp;&nbsp;&nbsp;continue;<br>
          &nbsp;&nbsp;}<br>
          &nbsp;&nbsp;console.log(i);<br>
          }
        </div>
      </div>
      <div class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
      <div class="bg-gray-800 p-3 rounded">
        <div class="text-green-400 font-mono text-sm">
          0<br>
          1<br>
          <span class="text-red-400">// Skips 2</span><br>
          3<br>
          4
        </div>
      </div>
    </div>
  </div>
</div>

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
```

This will output:
```
0
1
3
4
```

## Error Handling

Error handling allows you to gracefully handle errors that might occur during code execution.

<div class="callout warning">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    Why Error Handling Matters
  </div>
  <div class="callout-content">
    <p>Without proper error handling, a single error can crash your entire application. Error handling allows your program to continue running even when unexpected issues occur.</p>
  </div>
</div>

### try...catch...finally

The `try...catch...finally` statement marks a block of statements to try and specifies a response if an exception is thrown.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">try...catch...finally Flow</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="relative py-4">
      <div class="absolute left-0 inset-y-0 w-1 bg-gray-700"></div>
      <ul class="space-y-6 pl-8">
        <li class="relative">
          <div class="absolute -left-7 mt-1.5 h-5 w-5 rounded-full bg-green-500 border-4 border-gray-900"></div>
          <p class="font-bold">try block</p>
          <p class="text-sm">Code that might cause an error</p>
          <div class="bg-gray-900 p-2 rounded font-mono text-xs mt-1">
            try {<br>
            &nbsp;&nbsp;// Risky code here<br>
            }
          </div>
        </li>
        <li class="relative">
          <div class="absolute -left-7 mt-1.5 h-5 w-5 rounded-full bg-red-500 border-4 border-gray-900"></div>
          <p class="font-bold">catch block</p>
          <p class="text-sm">Executes if an error occurs in the try block</p>
          <div class="bg-gray-900 p-2 rounded font-mono text-xs mt-1">
            catch (error) {<br>
            &nbsp;&nbsp;// Handle the error<br>
            }
          </div>
        </li>
        <li class="relative">
          <div class="absolute -left-7 mt-1.5 h-5 w-5 rounded-full bg-blue-500 border-4 border-gray-900"></div>
          <p class="font-bold">finally block</p>
          <p class="text-sm">Always executes, regardless of whether an error occurred</p>
          <div class="bg-gray-900 p-2 rounded font-mono text-xs mt-1">
            finally {<br>
            &nbsp;&nbsp;// Cleanup code here<br>
            }
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

```javascript
try {
  // code that might throw an error
} catch (error) {
  // code to handle the error
} finally {
  // code that always executes, regardless of whether an error occurred
}
```

Example:
```javascript
try {
  // Attempt to access a property of an undefined variable
  console.log(nonExistentVariable.property);
} catch (error) {
  console.log("An error occurred:", error.message);
} finally {
  console.log("This always executes");
}
```

This will output:
```
An error occurred: Cannot read property 'property' of undefined
This always executes
```

### throw Statement

The `throw` statement creates custom errors.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Custom Error Handling</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="bg-gray-800 p-3 rounded">
      <div class="font-mono text-sm">
        function divide(a, b) {<br>
        &nbsp;&nbsp;if (b === 0) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;throw new Error("Division by zero is not allowed");<br>
        &nbsp;&nbsp;}<br>
        &nbsp;&nbsp;return a / b;<br>
        }<br><br>
        try {<br>
        &nbsp;&nbsp;console.log(divide(10, 0));<br>
        } catch (error) {<br>
        &nbsp;&nbsp;console.log("Error:", error.message);<br>
        }
      </div>
    </div>
    <div class="mt-4 p-3 bg-gray-900 rounded">
      <div class="text-red-400 font-mono">Error: Division by zero is not allowed</div>
    </div>
  </div>
</div>

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Error:", error.message);
}
```

This will output:
```
Error: Division by zero is not allowed
```

## Practical Examples

### Example 1: FizzBuzz

A classic programming challenge:

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">FizzBuzz Challenge</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="bg-gray-800 p-3 rounded mb-4">
      <p class="mb-2">Rules:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm">
        <li>Print numbers from 1 to 100</li>
        <li>For multiples of 3, print "Fizz" instead of the number</li>
        <li>For multiples of 5, print "Buzz" instead of the number</li>
        <li>For multiples of both 3 and 5, print "FizzBuzz"</li>
      </ul>
    </div>
    <div class="code-editor">
      <div class="code-editor-header">
        <span class="text-sm font-medium">FizzBuzz Solution</span>
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
// Print numbers from 1 to 100
// For multiples of 3, print "Fizz" instead of the number
// For multiples of 5, print "Buzz" instead of the number
// For multiples of both 3 and 5, print "FizzBuzz"

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
        </pre>
      </div>
    </div>
  </div>
</div>

### Example 2: Finding Prime Numbers

```javascript
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  
  return true;
}

// Print all prime numbers from 1 to 50
for (let i = 1; i <= 50; i++) {
  if (isPrime(i)) {
    console.log(`${i} is prime`);
  }
}
```

### Example 3: User Input Validation

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Input Validation with Error Handling</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="code-editor">
      <div class="code-editor-header">
        <span class="text-sm font-medium">Username Validation</span>
      </div>
      <div class="code-editor-content">
        <pre class="language-javascript">
function validateUsername(username) {
  // Username must be at least 5 characters and contain only letters and numbers
  const pattern = /^[a-zA-Z0-9]{5,}$/;
  
  if (!username) {
    throw new Error("Username is required");
  }
  
  if (!pattern.test(username)) {
    throw new Error("Username must be at least 5 characters and contain only letters and numbers");
  }
  
  return true;
}

try {
  // Test with different usernames
  console.log(validateUsername("user123")); // Valid
  console.log(validateUsername("ab")); // Too short
  console.log(validateUsername("user@123")); // Contains special character
} catch (error) {
  console.log("Validation error:", error.message);
}
        </pre>
      </div>
    </div>
  </div>
</div>

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
      <div class="tab">Exercise 4</div>
    </div>
    
    <div class="p-4 bg-gray-800 rounded-lg">
      <h4 class="font-bold mb-2">Grade Calculator</h4>
      <p class="mb-4">Write a program that takes a numerical score and outputs the corresponding letter grade:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm mb-4">
        <li>90-100: A</li>
        <li>80-89: B</li>
        <li>70-79: C</li>
        <li>60-69: D</li>
        <li>Below 60: F</li>
      </ul>
      <div class="code-editor">
        <div class="code-editor-header">
          <span class="text-sm font-medium">Your Solution</span>
        </div>
        <div class="code-editor-content">
          <pre class="language-javascript">
function calculateGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 0 && score < 60) {
    return "F";
  } else {
    return "Invalid score";
  }
}

// Test with different scores
console.log(calculateGrade(95)); // A
console.log(calculateGrade(82)); // B
console.log(calculateGrade(75)); // C
console.log(calculateGrade(65)); // D
console.log(calculateGrade(45)); // F
console.log(calculateGrade(105)); // Invalid score
          </pre>
        </div>
      </div>
    </div>
  </div>
</div>

## Summary

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Control Flow Recap</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4">
        <h4 class="font-bold mb-2">Conditional Statements</h4>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li><code>if</code>: Execute code if condition is true</li>
          <li><code>if...else</code>: Choose between two code blocks</li>
          <li><code>if...else if...else</code>: Choose between multiple code blocks</li>
          <li><code>switch</code>: Select one of many code blocks to execute</li>
        </ul>
      </div>
      <div class="card p-4">
        <h4 class="font-bold mb-2">Loops</h4>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li><code>for</code>: Loop a specific number of times</li>
          <li><code>for...in</code>: Loop through object properties</li>
          <li><code>for...of</code>: Loop through iterable values</li>
          <li><code>while</code>: Loop while condition is true</li>
          <li><code>do...while</code>: Loop at least once, then while condition is true</li>
        </ul>
      </div>
      <div class="card p-4">
        <h4 class="font-bold mb-2">Loop Control</h4>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li><code>break</code>: Exit the loop</li>
          <li><code>continue</code>: Skip current iteration</li>
        </ul>
      </div>
      <div class="card p-4">
        <h4 class="font-bold mb-2">Error Handling</h4>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li><code>try...catch</code>: Handle potential errors</li>
          <li><code>finally</code>: Execute code regardless of errors</li>
          <li><code>throw</code>: Create custom errors</li>
        </ul>
      </div>
    </div>
  </div>
</div>

Understanding control flow is essential for writing effective JavaScript programs. It allows you to make decisions, repeat actions, and handle errors in your code.

<div class="mt-8 p-4 bg-indigo-900/30 border border-indigo-500 rounded-lg">
  <h3 class="text-xl font-bold mb-2">Ready to continue?</h3>
  <p class="mb-4">Next, we'll explore JavaScript functions in detail, including how to define, call, and use them effectively.</p>
  <div class="flex justify-between">
    <a href="#/topic/javascript/operators" class="btn-secondary inline-flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
      Previous: Operators
    </a>
    <a href="#/topic/javascript/functions" class="btn-primary inline-flex items-center">
      Next: Functions
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
