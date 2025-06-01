# Dynamic vs. Static Typing

Understanding the difference between dynamic and static typing is fundamental to appreciating why TypeScript exists and what benefits it provides over JavaScript.

## What is Type Checking?

Before diving into dynamic vs. static typing, let's understand what "type checking" means:

Type checking is the process of verifying and enforcing constraints on the types of values in a program. It ensures that operations are performed on compatible types, preventing type-related errors.

## Dynamic Typing (JavaScript)

JavaScript is a dynamically typed language, which means:

1. **Runtime Type Checking**: Types are checked during program execution (at runtime)
2. **Variable Types Can Change**: A variable can hold different types of values during its lifetime
3. **No Type Declaration Required**: You don't need to specify types when declaring variables

### Example of Dynamic Typing in JavaScript:

```javascript
// JavaScript (Dynamically Typed)
let value = 42;        // value is a number
console.log(typeof value); // "number"

value = "Hello";       // Now value is a string
console.log(typeof value); // "string"

value = true;          // Now value is a boolean
console.log(typeof value); // "boolean"

value = { name: "John" }; // Now value is an object
console.log(typeof value); // "object"
```

### Pros of Dynamic Typing:

1. **Flexibility**: Variables can hold any type of value
2. **Rapid Development**: Less code to write, faster prototyping
3. **Less Ceremony**: No need for type declarations or annotations
4. **Duck Typing**: "If it walks like a duck and quacks like a duck, it's a duck"

### Cons of Dynamic Typing:

1. **Runtime Errors**: Type errors are discovered only when the code runs
2. **Less IDE Support**: Limited autocompletion and refactoring capabilities
3. **Hidden Bugs**: Type-related bugs can lurk in rarely-executed code paths
4. **Documentation Overhead**: Need to document expected types manually
5. **Harder Maintenance**: More difficult to understand and refactor large codebases

## Static Typing (TypeScript)

TypeScript is a statically typed language, which means:

1. **Compile-Time Type Checking**: Types are checked before the program runs (during compilation)
2. **Variable Types Are Fixed**: Once a variable is declared with a type, it can only hold values of that type
3. **Type Declarations Required**: You need to specify types (or let them be inferred)

### Example of Static Typing in TypeScript:

```typescript
// TypeScript (Statically Typed)
let value: number = 42;  // value is explicitly typed as a number
console.log(typeof value); // "number"

value = "Hello";  // Error: Type 'string' is not assignable to type 'number'

// To allow multiple types, you can use a union type
let flexibleValue: number | string = 42;
flexibleValue = "Hello";  // This is now allowed
```

### Pros of Static Typing:

1. **Early Error Detection**: Catch type errors during development, not in production
2. **Better IDE Support**: Enhanced autocompletion, navigation, and refactoring
3. **Self-Documenting Code**: Types serve as documentation
4. **Safer Refactoring**: Compiler catches places that need updates when types change
5. **Better for Large Codebases**: Easier to understand and maintain complex systems

### Cons of Static Typing:

1. **More Verbose**: Requires additional type annotations
2. **Learning Curve**: Takes time to learn the type system
3. **Development Overhead**: Initial setup and configuration required
4. **Less Flexibility**: Some dynamic patterns are harder to express
5. **Compilation Step**: Extra build step before running the code

## Type Inference

TypeScript mitigates some of the verbosity of static typing through type inference, which means the compiler can automatically determine types in many cases:

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

```typescript
// Gradually adding types
let age: number = 30;  // Typed
let name = "John";     // Type inferred
let data: any = fetchData();  // Opt out of type checking
```

## Real-World Example

Let's look at a real-world example that demonstrates the difference between dynamic and static typing:

### JavaScript (Dynamic Typing):

```javascript
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
```

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

### Choose Dynamic Typing (JavaScript) When:

1. Building small scripts or prototypes
2. Working on projects with short lifespans
3. Maximum flexibility is needed
4. The team is more comfortable with dynamic languages
5. Rapid development is prioritized over long-term maintenance

### Choose Static Typing (TypeScript) When:

1. Building large applications
2. Working with multiple developers
3. Creating long-lived codebases
4. Building libraries or frameworks for others
5. Prioritizing code quality and maintainability
6. The team has experience with statically typed languages

## Conclusion

Neither dynamic nor static typing is inherently "better" - they represent different trade-offs:

- **Dynamic typing** offers flexibility and speed of development at the cost of runtime safety
- **Static typing** offers safety and maintainability at the cost of some flexibility and initial development speed

TypeScript attempts to give you the best of both worlds by:
1. Providing static typing for JavaScript
2. Making the type system optional and gradual
3. Allowing you to use `any` to opt out when needed
4. Offering powerful type inference to reduce verbosity

In the next sections, we'll explore TypeScript's type system in more detail and learn how to leverage its features effectively.
