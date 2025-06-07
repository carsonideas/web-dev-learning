# Dynamic vs. Static Typing

Understanding the difference between dynamic and static typing is fundamental to appreciating why TypeScript exists and what benefits it provides over JavaScript.

<div class="callout info">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    Key Concept
  </div>
  <div class="callout-content">
    <p>The main difference: <strong>Dynamic typing</strong> checks types during runtime (when your program is running), while <strong>static typing</strong> checks types during compile time (before your program runs).</p>
  </div>
</div>

## What is Type Checking?

Before diving into dynamic vs. static typing, let's understand what "type checking" means:

Type checking is the process of verifying and enforcing constraints on the types of values in a program. It ensures that operations are performed on compatible types, preventing type-related errors.

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Type Checking Visualized</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4 text-center">
        <div class="text-4xl font-bold text-green-400 mb-2">✓</div>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm mb-2">
          let a = 5;<br>
          let b = 10;<br>
          let c = a + b; // 15
        </div>
        <p class="text-xs">Compatible types: number + number</p>
      </div>
      <div class="card p-4 text-center">
        <div class="text-4xl font-bold text-red-400 mb-2">✗</div>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm mb-2">
          let a = 5;<br>
          let b = "hello";<br>
          let c = a.toUpperCase(); // Error!
        </div>
        <p class="text-xs">Incompatible: number doesn't have toUpperCase()</p>
      </div>
    </div>
  </div>
</div>

## Dynamic Typing (JavaScript)

JavaScript is a dynamically typed language, which means:

1. **Runtime Type Checking**: Types are checked during program execution (at runtime)
2. **Variable Types Can Change**: A variable can hold different types of values during its lifetime
3. **No Type Declaration Required**: You don't need to specify types when declaring variables

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Dynamic Typing in Action</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="code-editor">
      <div class="code-editor-header">
        <span class="text-sm font-medium">JavaScript Example</span>
      </div>
      <div class="code-editor-content">
        <pre class="language-javascript">
// JavaScript (Dynamically Typed)
let value = 42;        // value is a number
console.log(typeof value); // "number"

value = "Hello";       // Now value is a string
console.log(typeof value); // "string"

value = true;          // Now value is a boolean
console.log(typeof value); // "boolean"

value = { name: "John" }; // Now value is an object
console.log(typeof value); // "object"
        </pre>
      </div>
    </div>
    <div class="mt-4 p-3 bg-gray-900 rounded">
      <div class="text-green-400 font-mono text-sm">
        "number"<br>
        "string"<br>
        "boolean"<br>
        "object"
      </div>
    </div>
  </div>
</div>

### Pros of Dynamic Typing:

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Advantages of Dynamic Typing</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Flexibility</h4>
        </div>
        <p class="text-sm">Variables can hold any type of value, allowing for more flexible code patterns.</p>
      </div>
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Rapid Development</h4>
        </div>
        <p class="text-sm">Less code to write, faster prototyping, and quicker iteration.</p>
      </div>
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Less Ceremony</h4>
        </div>
        <p class="text-sm">No need for type declarations or annotations, reducing boilerplate code.</p>
      </div>
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Duck Typing</h4>
        </div>
        <p class="text-sm">"If it walks like a duck and quacks like a duck, it's a duck" - focus on behavior over type.</p>
      </div>
    </div>
  </div>
</div>

### Cons of Dynamic Typing:

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Disadvantages of Dynamic Typing</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Runtime Errors</h4>
        </div>
        <p class="text-sm">Type errors are discovered only when the code runs, potentially in production.</p>
      </div>
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Less IDE Support</h4>
        </div>
        <p class="text-sm">Limited autocompletion and refactoring capabilities in development tools.</p>
      </div>
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Hidden Bugs</h4>
        </div>
        <p class="text-sm">Type-related bugs can lurk in rarely-executed code paths.</p>
      </div>
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Documentation Overhead</h4>
        </div>
        <p class="text-sm">Need to document expected types manually in comments or documentation.</p>
      </div>
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Harder Maintenance</h4>
        </div>
        <p class="text-sm">More difficult to understand and refactor large codebases without type information.</p>
      </div>
    </div>
  </div>
</div>

## Static Typing (TypeScript)

TypeScript is a statically typed language, which means:

1. **Compile-Time Type Checking**: Types are checked before the program runs (during compilation)
2. **Variable Types Are Fixed**: Once a variable is declared with a type, it can only hold values of that type
3. **Type Declarations Required**: You need to specify types (or let them be inferred)

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Static Typing in Action</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="code-editor">
      <div class="code-editor-header">
        <span class="text-sm font-medium">TypeScript Example</span>
      </div>
      <div class="code-editor-content">
        <pre class="language-typescript">
// TypeScript (Statically Typed)
let value: number = 42;  // value is explicitly typed as a number
console.log(typeof value); // "number"

// This would cause a compile-time error:
// value = "Hello";  // Error: Type 'string' is not assignable to type 'number'

// To allow multiple types, you can use a union type
let flexibleValue: number | string = 42;
flexibleValue = "Hello";  // This is allowed
console.log(typeof flexibleValue); // "string"
        </pre>
      </div>
    </div>
    <div class="mt-4 p-3 bg-gray-900 rounded">
      <div class="text-green-400 font-mono text-sm">
        "number"<br>
        "string"
      </div>
      <div class="text-red-400 font-mono text-sm mt-2">
        // Error would be caught during compilation, not at runtime
      </div>
    </div>
  </div>
</div>

### Pros of Static Typing:

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Advantages of Static Typing</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Early Error Detection</h4>
        </div>
        <p class="text-sm">Catch type errors during development, not in production.</p>
      </div>
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Better IDE Support</h4>
        </div>
        <p class="text-sm">Enhanced autocompletion, navigation, and refactoring tools.</p>
      </div>
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Self-Documenting Code</h4>
        </div>
        <p class="text-sm">Types serve as built-in documentation for your code.</p>
      </div>
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Safer Refactoring</h4>
        </div>
        <p class="text-sm">Compiler catches places that need updates when types change.</p>
      </div>
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Better for Large Codebases</h4>
        </div>
        <p class="text-sm">Easier to understand and maintain complex systems.</p>
      </div>
    </div>
  </div>
</div>

### Cons of Static Typing:

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Disadvantages of Static Typing</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">More Verbose</h4>
        </div>
        <p class="text-sm">Requires additional type annotations, leading to more code.</p>
      </div>
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Learning Curve</h4>
        </div>
        <p class="text-sm">Takes time to learn the type system and its features.</p>
      </div>
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Development Overhead</h4>
        </div>
        <p class="text-sm">Initial setup and configuration required for projects.</p>
      </div>
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Less Flexibility</h4>
        </div>
        <p class="text-sm">Some dynamic patterns are harder to express with static types.</p>
      </div>
      <div class="card p-4">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          <h4 class="font-bold">Compilation Step</h4>
        </div>
        <p class="text-sm">Extra build step before running the code.</p>
      </div>
    </div>
  </div>
</div>

## Type Inference

TypeScript mitigates some of the verbosity of static typing through type inference, which means the compiler can automatically determine types in many cases:

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Type Inference in TypeScript</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4">
        <h4 class="font-bold text-blue-400 mb-2">Explicit Types</h4>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          let name: string = "John";<br>
          let age: number = 30;<br>
          let isActive: boolean = true;<br>
          let items: string[] = ["apple", "banana"];
        </div>
      </div>
      <div class="card p-4">
        <h4 class="font-bold text-green-400 mb-2">Type Inference</h4>
        <div class="bg-gray-900 p-2 rounded font-mono text-sm">
          let name = "John"; // inferred as string<br>
          let age = 30; // inferred as number<br>
          let isActive = true; // inferred as boolean<br>
          let items = ["apple", "banana"]; // inferred as string[]
        </div>
      </div>
    </div>
  </div>
</div>

```typescript
// TypeScript with type inference
let name = "John";  // TypeScript infers that name is a string
name = 42;  // Error: Type 'number' is not assignable to type 'string'

let numbers = [1, 2, 3];  // TypeScript infers that numbers is number[]
numbers.push("four");  // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

## Gradual Typing

TypeScript offers gradual typing, which means you can:

1. Add types incrementally to your JavaScript code
2. Use the `any` type to opt out of type checking when needed
3. Mix typed and untyped code

<div class="callout tip">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
    Migration Strategy
  </div>
  <div class="callout-content">
    <p>Gradual typing makes TypeScript perfect for migrating existing JavaScript projects. You can start by adding types to critical parts of your codebase and gradually expand type coverage over time.</p>
  </div>
</div>

```typescript
// Gradually adding types
let age: number = 30;  // Typed
let name = "John";     // Type inferred
let data: any = fetchData();  // Opt out of type checking
```

## Real-World Example

Let's look at a real-world example that demonstrates the difference between dynamic and static typing:

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Shopping Cart Example</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="tabs">
      <div class="tab active">JavaScript</div>
      <div class="tab">TypeScript</div>
    </div>
    
    <div class="p-4 bg-gray-800 rounded-lg">
      <div class="code-editor">
        <div class="code-editor-header">
          <span class="text-sm font-medium">JavaScript Version</span>
        </div>
        <div class="code-editor-content">
          <pre class="language-javascript">
// JavaScript
function calculateTotal(items, tax) {
  let total = 0;
  
  for (const item of items) {
    total += item.price * item.quantity;
  }
  
  return total * (1 + tax);
}

// This works fine
const cartItems = [
  { price: 10, quantity: 2 },
  { price: 15, quantity: 1 }
];
console.log(calculateTotal(cartItems, 0.1)); // 38.5

// But this causes a runtime error
const invalidItems = [
  { cost: 10, qty: 2 },  // Wrong property names
  { price: 15, quantity: 1 }
];
console.log(calculateTotal(invalidItems, 0.1)); // NaN (Runtime error: price is undefined)

// This also causes a runtime error
console.log(calculateTotal(cartItems, "10%")); // NaN (Runtime error: can't multiply by "10%")
          </pre>
        </div>
      </div>
    </div>
  </div>
</div>

### TypeScript (Static Typing):

```typescript
// TypeScript
interface CartItem {
  price: number;
  quantity: number;
}

function calculateTotal(items: CartItem[], tax: number): number {
  let total = 0;
  
  for (const item of items) {
    total += item.price * item.quantity;
  }
  
  return total * (1 + tax);
}

// This works fine
const cartItems: CartItem[] = [
  { price: 10, quantity: 2 },
  { price: 15, quantity: 1 }
];
console.log(calculateTotal(cartItems, 0.1)); // 38.5

// These would be caught at compile time
const invalidItems = [
  { cost: 10, qty: 2 },  // Error: Property 'price' is missing
  { price: 15, quantity: 1 }
];
console.log(calculateTotal(invalidItems, 0.1)); // Compile-time error

console.log(calculateTotal(cartItems, "10%")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

## When to Choose Each Approach

<div class="interactive-demo">
  <div class="interactive-demo-header">
    <h3 class="text-lg font-bold">Making the Right Choice</h3>
  </div>
  <div class="interactive-demo-content">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card p-4 border-l-4 border-l-blue-500">
        <h4 class="font-bold text-blue-400 mb-2">Choose JavaScript When:</h4>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Building small scripts or prototypes</li>
          <li>Working on projects with short lifespans</li>
          <li>Maximum flexibility is needed</li>
          <li>The team is more comfortable with dynamic languages</li>
          <li>Rapid development is prioritized over long-term maintenance</li>
        </ul>
      </div>
      <div class="card p-4 border-l-4 border-l-green-500">
        <h4 class="font-bold text-green-400 mb-2">Choose TypeScript When:</h4>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>Building large applications</li>
          <li>Working with multiple developers</li>
          <li>Creating long-lived codebases</li>
          <li>Building libraries or frameworks for others</li>
          <li>Prioritizing code quality and maintainability</li>
          <li>The team has experience with statically typed languages</li>
        </ul>
      </div>
    </div>
  </div>
</div>

## Conclusion

Neither dynamic nor static typing is inherently "better" - they represent different trade-offs:

- **Dynamic typing** offers flexibility and speed of development at the cost of runtime safety
- **Static typing** offers safety and maintainability at the cost of some flexibility and initial development speed

<div class="callout info">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    TypeScript's Approach
  </div>
  <div class="callout-content">
    <p>TypeScript attempts to give you the best of both worlds by:</p>
    <ol class="list-decimal pl-5 space-y-1">
      <li>Providing static typing for JavaScript</li>
      <li>Making the type system optional and gradual</li>
      <li>Allowing you to use <code>any</code> to opt out when needed</li>
      <li>Offering powerful type inference to reduce verbosity</li>
    </ol>
  </div>
</div>

<div class="mt-8 p-4 bg-indigo-900/30 border border-indigo-500 rounded-lg">
  <h3 class="text-xl font-bold mb-2">Ready to continue?</h3>
  <p class="mb-4">Next, we'll explore TypeScript's type system in more detail and learn how to leverage its features effectively.</p>
  <div class="flex justify-between">
    <a href="#/topic/typescript/introduction" class="btn-secondary inline-flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
      Previous: Introduction to TypeScript
    </a>
    <a href="#/topic/typescript/basic_types" class="btn-primary inline-flex items-center">
      Next: Basic Types
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
