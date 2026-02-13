/*
Some Useful Array Methods 
toString(),join(),pop(),push(), shift(), unShift(),split()
slice(),splice(),find(), findIndex(),filter(),forEach(),map()
*/
const fruits = ["Apple","Banana","Cherry"]
// Converting an array in to a string using toString()
console.log(fruits.toString())
// join() also converts to string
console.log(fruits.join(";"))
// FIFO(First In First Out) i.e Queue and LIFO(Last In First Out) i.e Stack
// pop() for removing an element from the end or back of an array
console.log(fruits.pop())
console.log(fruits)
// push() is to add an element to the end or back of the array
fruits.push('Guava')
console.log(fruits)
// shift() is used to remove an element at the beginning of an array
fruits.shift()
console.log(fruits)
// unshift() is used to add an element at the beginning of the array
fruits.unshift('Cashew')
console.log(fruits)
// slice() is used to cut out a part of an array
const people = ["Ify","Ugo","Uju","Emy","Uche"]
console.log(people.slice(1,4))
console.log(people.slice(0,3))
// splice() this is used to add or remove an element from an array
/*
splice() has two parameters and an optional third parameter
the first parameter is the start index
the second parmeter is the number of elements to be removed
the third parameter is the element(s) to be added
*/
// remove two elements from the array using splice()
people.splice(1,2)
console.log(people)
// add two elements to the array using splice()
people.splice(1,0,"Joy","Paul")
console.log(people)
/*
 find(), findIndex() and filter() are used for searching from an array
    They have 3 parameters
1. first is the array value
2. second is the array index
3. third is the array itself

[ 'Ify', 'Joy', 'Paul', 'Emy', 'Uche' ]
 These methods uses a function as an argument and the function usually comes with those parameters above
 The callback function 
 */
// callback function examples. A callback function is a function that is called by another function
// add
const add = function(a,b){
    return a+b
}
// multiply
const product = function(m,n){
    return m*n
}
// subtract
const minus = function(i,j){
    return i-j
}
const higher= function(x,y,cb){
    return cb(x,y)
}
console.log(higher(5,6,add))
console.log(higher(5,6,product))
console.log(higher(5,6,minus))

// find() method. take a function with 3 parameters
const foods = ["Rice","Beans","Garri","Yam"]
const item = foods.find((v)=> v==="Yam")
console.log(item)
// findIndex()
const val = foods.findIndex((v)=> v==='Yam')
console.log(val)
// filter()
const num = [4,5,6,7,8,9]
const greater = num.filter((v)=> v>=7) // v reperents 4,5,6,7,8,9
console.log(greater)

// even numbers
const even = num.filter((i)=> i%2==0) // i reperents 4,5,6,7,8,9
console.log(even)
// odd numbers
const odd = num.filter((k)=> k%2 !=0)
console.log(odd)
// examples 
const emails = ["ijeoma@gmail.com","codebyoma@gmail.com","loveth@gmail.com"]
const requestBody = "ijeoma2@gmail.com"
const ite = emails.find((value)=> value===requestBody) // The 'value' represents the array(emails) elements
if(ite){
    console.log("Email already exists on the database")
}else{
    console.log("Register user")
}
/* 
        ASSIGNMENT
1. Given the array const  num2 = [1,13,undefined,12,8,undefined,7,undefined]
find the ones that are real numbers
2. Given const arr = ["Ike","Uche","Eze","Ibe"]
i. use slice to cut out Uche and Eze
ii. use splice to remove Ike
iii. use splice to remove Eze and add Igwe
iv. use find() to check if Igwe exists
v. use findIdex() to get the index of Igwe
Good luck!
*/

// forEach() this runs a function for each member of the array
const numbers = [1,2,3,4,5]
numbers.forEach(function(v,i,a){
    console.log(`${v**2} : ${i} : ${a}`)
})

// map()
const mapNum = numbers.map((v,i,a)=>{
    return `${v**2} => ${i} => ${a}`
})
console.log(mapNum)

// split() converts a string into an array
const hola = 'Have a nice day'
const splited = hola.split(" ")
console.log(splited)
