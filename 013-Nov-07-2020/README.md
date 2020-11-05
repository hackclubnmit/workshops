# TypeScript : Get Started

### What is TypeScript?

  TypeScript is a Superset of JavaScript developed by Microsoft.TypeScript is a language that is a superset of JavaScript: JS syntax is therefore legal TS. Syntax refers to the way we write text to form a program. For example, this code has a syntax error because it’s missing a ):
```$
let a = (4
//')' expected.
```
  TypeScript doesn’t consider any JavaScript code to be an error because of its syntax. This means you can take any working JavaScript code and put it in a TypeScript file without worrying about exactly how it is written. It compiles to plain JavaScript. TypeScript can be easily integrated into JavaScript projects.These are designed for larger applications.
  
### What Does TypeScript Offer?
 
TypeScript offers the following :

- Static Type Checking
- Class Based Objects
- Modularity
- ES6 Features
- Syntax closer to java and other high level languages
  

### Static Type Checking

 With TypeScript we can check and assign variable ,  parameter and function types. It is completely optional. It helps us to find and prevent bugs and stop future issues from happening. This helps to make our code much more readable and descriptive.

### TypeScript Types

- String 
  
  Textual data is one of the fundamental part of creating programs in JavaScript for webpages and servers.like JavaScript, TypeScript also uses double quotes (") or single quotes (') to enclose string data.       
  ```$
  let remark: string="Excellent";
  remark="Excellent";
  ```             

- Number

  The floating point numbers get the type number, while BigIntegers get the type bigint. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
  ```$
   let decimal: number = 1;
   let hex: number = 0xf00d;
   let binary: number = 0b1110;
   let octal: number = 0o445;
   let big: bigint = 100n;
   ```
  
- Boolean
  
  The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.
  ```$
  let isDone: boolean = false;
  ```
- Array
  
  TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. In the first, you use the type of the elements followed by [] to denote an array of that element type:
   ```$
   let list: number[] = [1, 2, 3];
   ```
   The second way uses a generic array type:
    ```$
   let list: Array<number> = [1, 2, 3];
   ```
- Any

  The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation.
  ```$
  declare function getValue(key: string): any;
  // OK, return value of 'getValue' is not checked
  const str: string = getValue("myString");
  ```

  
- Void
  
  void is the absence of having any type at all.This is the return type of functions that do not return a value:
  ```$
  function warnUser(): void {
  console.log("This is my warning message");
  }
  ```
- Null
  
  Much like void, it is not extremely useful on their own. By default null is subtype of all other types. That means you can assign null to something like number.
  ```$
  let n: null = null;
  ```
- Tuple
  
  Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:
   ```$
  // Declare a tuple type
  let x: [string, number];
  // Initialize it
  x = ["hello", 10]; // OK
  // Initialize it incorrectly
  x = [10, "hello"]; // Error
  ```
- Enum
  
  A helpful addition to the standard set of datatypes from JavaScript is the enum. Data type consisting of an unordered set of named values
  ```$
  enum Color {
    Red,
    Green,
    Blue,
  }
  let c: Color = Color.Green;
  ```
- Generics
    

### Class Based Objects

- Object Oriented Programming in JSI
- No Prototypes
- Encapsulation
- Inheritance
- Modifiers

### TypeScript Compiler (tsc)

- Written in TypeScript itself
- Compiles .ts files to .js
- Installed as an NPM package (Node.js)
- Supports ES6 Syntax

### Install  TypeScript

```$
npm install -g typescript
 ``` 

### References

| Type | Links |
| ------ | ------ |
| TypeScript Docs | https://www.typescriptlang.org/docs/handbook/intro.html |
| Deep Dive by Basarat Ali Syed | https://basarat.gitbook.io/typescript/ |
| By Microsoft | https://github.com/microsoft/TypeScript |

 





