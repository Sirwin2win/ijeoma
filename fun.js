/*
A function is a block of code that does a task. First we declare(function definition) a
 function and then we start calling the function.
  Ways of defining a function
  1. function expression e.g 
const greet = function(){
    console.log("Good afternoon")
}
2. function declaration e.g
function greet1(){
console.log("Good day")
}
        PARAMETERS & ARGUEMENTS
Parameters are variables used to declare a fucntion
Arguements are values assigned to the parameters during function definition


*/
// function definition using function expression
const greet = function(){
    console.log("Good day, Ijeoma")
}
// function call ; we call a function by the function name a parenthesis in front
greet()
// function definition using function declaration
function keelee(){
    console.log("Ndewoo, Imela")
}
// function call
keelee()
// Parameters and arguements
const hola = function(name){ // Here 'name' is called a parameter
    console.log("Good day, "+name) // concatination
}
// calling the function with arguement
hola("Loveth")
hola("Emeka")
// Let's say the name is already a variable
const DBname = "Joel Doe"
hola(DBname)
// function definition
const adding = function(a,b){ 
    console.log(a+b)
}
// call
adding(3,5)
adding(5,6)
// minus fn
const sub = function(m,n){
    console.log(m-n)
}

const sub1 = (m,n)=> m-n
// call
sub(5,2)
sub(2,5)
console.log(sub1(2,5))
/*
        ASSIGNMENT
1. write a function that multiplies numbers
2. write a function that devides numbers
3. const num1 = '23456' loop and return //65432
4. write a function that solves the area of rectangles
5. write a function that solves the area of a trapezium 
Hint(half* (a+b)*h)
where half = 0.5
*/
// return statement
const square = function(n){
    return n**2
}
// call
console.log(square(2))
const salute = function(name){
    return name
}
// call
console.log(salute("Ijeoma"))
const salute1 = function(name){
    return "I greet you, "+name; // concatination
}
console.log(salute1("Ijeoma"))
const hello = function(m){
    return `I greet you, ${m}` 
}
console.log(hello("Uche"))
// A function that returns the sum of array of numbers
const sum = function(n){
    let container = 0
    for(let i = 0; i<n.length; i++){
            // console.log(n[i])
            container += n[i]
    }
    return container;
}
console.log(sum([1,2,3,4,5,6,1]))
const aha = "Ijeoma"
const rev = function(n){
    let cont = ''
    for(let i =  n.length-1; i>=0;i--){
        cont +=n[i]
    }
    return cont
}
console.log(rev("Ijeoma"))
// palindrome e.g eve, mum, civic, racecar
const pal = function(n){
    let drum = ''
    for(let i = n.length-1;i>=0;i--){
        drum +=n[i]
    }

    if(n===drum){
        return `${n} is a palindrome`
    }else{
        return `${n} is not a palindrome`
    }
}
console.log(pal('eve'))
console.log(pal('ijeoma'))
console.log(pal('civic'))
// function for getting areas of shapes
const angle = function(base,height){ // half*base*height
    return 0.5*base*height
}

console.log(angle(3,15))

const circle = function(r){ // pi*(r**2)
    let pi = 3.14
    return pi*(r**2)
}
console.log(circle(4))