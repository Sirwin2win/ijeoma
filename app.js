/*
A variable is like a container for storing values.
There are three ways of variable declaration in Javascript
1. var. This is the old one and it works for both scopes
2. let. This works for a local scope
3. const. acts like a constant and works for a global scope
    Javascript Scope 
This talks about where a variable is declared e.g inside a function, loop, or outside
example of a js function
const greet = function(){
    let name = "John Doe"
    console.log('Good morning Mr'+name)
}
    Choosing of variable names
1. Pascal Case e.g FirstName
2. camel Case e.g firstName
3. snake Cae e.g fist_name
 Data Types
1. string => ''/""
2. number
3. array=> []
4. object => {}
5. boolean => true/false
    Operators in Js
Operators are used to carry out operations on variables
1. Arithmetic Oerators: +,-,/,*,**,%
2. Assignment operators : =,=+,=-,=/,=*,=**,=%
3. Comparison operators : ==,===,>,<,>=,<=,!=,!==
4. Logical Operators : || , &
*/
const name = "Peter Doe"
const greet = function(){
    let name = "John Doe"
    console.log('Good morning Mr '+name)
}
greet()
const age = 20
var email = 'john@gmail.com'
console.log(age)
console.log(email)
const fname = 'John'
const info = "Ms Loveths's laptop is ios"
console.log(typeof age)
console.log(typeof fname)
console.log(email.toUpperCase())
console.log(name.toUpperCase())
const fruits = ["Apple","Banana"]
const isMonday = true
console.log(typeof fruits)
console.log(typeof isMonday)
// 1. Arithmetic Oerators: +,-,/,*,**,%
let a = 2
let b = 3
let c = 5
console.log(a+b)
console.log(c-1)
console.log(c*a)
console.log(c/a)
console.log(c**a)
console.log(c%a)
console.log(10%a)
//2. Assignment operators : =,+=,-=,/=,*=,**=,%=
let l = 3
let m = 5
let n = 4
console.log(l+=3) // let l = l+3. note l = 6
console.log(m-=2) // let m = m-2
console.log(l/=2)  // let l = l/2
console.log(n*=2)  // let n = n*2
console.log(n**=2) // let n = n**2
console.log(l%=2)  // let l = l%2

//3. Comparison operators : ==,===,>,<,>=,<=,!=,!==    re-assign
let x = 3
let y = 5
let z = 6
let w = '3'
let u = 5
console.log(x==y)
console.log(x==w)
console.log(x===w)
console.log(y>x)
console.log(z<x)
console.log(y<=u) // y<u || y==u || y<x
console.log(y<u || y==u || y<x)
console.log(x != y)
console.log(x !== w)

//  4. Logical Operators : || , &
let e = 4
let f = 5
let g = 7
console.log(e<f || g>e) // true
console.log(e<f && g>e) // true
console.log(f<e || e>g)  // false
// logical or || returns true if any comparison is
//  true while logical and && returns false if any is false

const num = [1,2,3,4,5,6]
let container = 0
for(let i = 0; i<num.length; i++){
    container+=num[i]
}
console.log(container)