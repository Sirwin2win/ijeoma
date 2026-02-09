/*
Arrow functions are short form of function in JavaScript.
Arrow functions are not function declaration rather function expression
Arrow functions are not object methods
*/
// Old method
const cube = function(n){
    return n**3 // n*n*n
}
console.log(cube(2))
console.log(cube(3))
// using arrow function
const cube2 = n => n**3
console.log(cube2(2))
console.log(cube2(5))
// area of a trapezium
const trapezium = (a,b,h) => 0.5*(a+b)*h
console.log(trapezium(4,6,10))

// equation using arrow function
const eqn = (a,b,c)=>{
let rut = (b**2-4*a*c)**0.5
let x1 = (-b+rut)/2*a
let x2 = (-b-rut)/2*a
let name = 'uche'
return `The value for X1 is ${x1} while X2 is ${x2}`
} 
console.log(eqn(1,-5,6))
// greet
const greet = ()=> 'Good day'
console.log(greet())
// hola
const hola = (n) => `Hola, ${n}`
console.log(hola("Emeka"))
/*
    ASSIGNMENT
1. write a function that multiplies numbers
2. write a function that devides numbers
3. write a function that solves the area of rectangles
4. write a function that solves the area of a triangle
5. write a function that solves the area of a circle
Use arrow function in the above
*/