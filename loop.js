/*
Loop is used to traverse a collection of things as long as a condition remains true
 e.g array, string, object.
There are different kinds of loop
1. for loop
2. while loop
3. do while loop
4. for of loop
5. for in loop
Some array methods that also looop through collections
a. forEach() method
b. map() method
*/
// For loop
/*
syntax(Guiding rule or principle) of the for loop
for(initialization;condition;increment/decrement){
// Loop body
}
*/
const name = "John Doe"
// console.log(name[0])
// console.log(name[1])
// console.log(name[2])
// console.log(name.length)
// console.log(name)
for(let i = 0; i<name.length; i+=1){
    console.log(name[i])
}
const fruits = ["Apple","Banana","Cherry","Orange"]
for(let demo = 0; demo<fruits.length;demo++){
    console.log(fruits[demo])
}
console.log("*******************************")
// Looping the fruits array from the back using the for loop
for(let j =fruits.length-1; j>=0; j-=1 ){
    console.log(fruits[j])
}
/*
        ASSIGNMENT
1. Loop through name variable from letter 'e'
2. Loop through location variavle from letter 'a'
3. Loop through numarray from the first element i.e 1
*/
// While loop
/*
    syntax
    initialization
    while(condition){
    // loop body
    increment/decrement
    }
*/
const location = "Gwarinpa"
// looping through location using while loop
let i = 0
while(i<location.length){
    console.log(location[i])
    i++
}
console.log("*******************************")
const foods = ["Rice","Beans","Garri","Yam"]
// Looping the foods from the back using the while loop
let j = foods.length-1 // initialization
while(j>=0){
    console.log(foods[j].toUpperCase())
    j-=1
}
console.log("*******************************")

// do while loop
/*
        syntax
initialization
do{
// loop body
}while(condition)
The down side of a do while loop is that it will always print out the first element
*/
const num = [1,2,3,4,5,6,7,8,9]
let k = num.length-1
do{
    console.log(num[k])
    k-=1
}while(k>=0)
console.log("*******************************")

// for of loop: This is an easy way of doing for loop with batteries i.e plug and play
/*
        syntax
for(let variable(element) in array){
 // loop body
}
*/
const states = ["Abia","Imo","FCT","Enugu"]
for(let i of states){
    console.log(i)
}

// for in loop
/*
This is usually used to loop through an objects
for(let key in object){
    // key
    or
    // object[key]
}
*/
const student = {
    name:"Peter Doe",
    email:"peterdoe@gmail.com",
    age:20
}
console.log(student)
for(let i in student){
    // console.log(i)
    console.log(`${i} => ${student[i]}`)
}
