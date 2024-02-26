export {};

// EXAMPLE 1 - Interpolate Variables in a String in TypeScript

const str = 'Alfred';

// 👇️ const result: string
const result = `Hello ${str}!`;

// 👇️ "Hello Alfred!"
console.log(result);

// ---------------------------------------------------

// // EXAMPLE 2 - Interpolating variables in multi-line strings

// const str1 = 'line 1';
// const str2 = 'line 2';

// const result = `this is ${str1}
// this is ${str2}`;

// console.log(result);
// // 👉️ this is line 1
// // 👉️ this is line 2

// ---------------------------------------------------

// // EXAMPLE 3 - Escaping backtick characters

// const str1 = 'hello';
// const str2 = 'world';

// const result = `${str1}\`${str2}`;

// console.log(result); // 👉️ hello`world

// ---------------------------------------------------

// // EXAMPLE 4 - Calling functions when interpolating strings

// function multiply(a: number, b: number): number {
//   return a * b;
// }

// const result = `10 * 5 is equal to ${multiply(10, 5)}`;

// console.log(result); // 👉️ "10 * 5 is equal to 50"

// ---------------------------------------------------

// // EXAMPLE 5 - Using the ternary operator when interpolating strings

// const str1 = 'world';
// const str2 = 'one';

// // 👇️ const result: string
// const result = `${str1.length > str2.length ? str1 : str2}`;

// console.log(result); // 👉️ "world"

// ---------------------------------------------------

// // EXAMPLE 6 - Using the logical AND (||) and OR (||) operators when interpolating strings

// const num1 = 0;
// const num2 = 50;

// // 👇️ const result: string
// const result = `${num1 || num2}`;

// console.log(result); // 👉️ '50'
