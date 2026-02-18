/*
An object is a variable that can store both values and function. And it does that in a key/value pair
Object key/value is called a property
Everything in JavaScript is an object
 Ways of declaring objects
1. object literal
2. new keyword
3. function constructor
 A method is a function inside an object
*/
// Object declarationg USing the object literal
// CRUD
const students = {
    name:"Peter Doe",
    age:20,
    email:"peterdoe@gmail.com"
}
// read
console.log(students)
// read object using dot(.) notation
console.log(students.name)
console.log(students.age)
console.log(students.email)
// read objects using square brackets[]
console.log("*****************")
console.log(students['name'])
console.log(students['age'])
console.log(students['email'])
// read objects by loop(using for in loop)
for(let v in students){
    console.log(`${v} => ${students[v]}`)
}
// create object with empty brackets {}
const car = {}
console.log(car)
car.name = "Toyota"
car.color = "gray"
car.year = 2026
console.log(car)
// Using new keyword
const animal = new Object({
    name:"Lion",
    color:"Brown"
})
animal.legs = 4
console.log(animal)
// Updating objects
car.color = 'red'
console.log(car)

// Deleting an object
delete car.year
console.log(car)

const person = {
    "last name":"Mary Doe",
    year:2001,
    email:"marydoe@gmail.com",
    details:function(){ // method
        return `My name is ${this["last name"]}, I was born in ${this.year}. Email me on ${this.email}`
    },
    age: function(n){ // method
        return `I am ${n-this.year} years old`;
    }

}

console.log(person["last name"])
console.log(person.details())
console.log(person.age(2026))
// Declaring an object using a function constructor
// Here first we define the constructor function
function Human(name,age,email){
    this.name = name
    this.age = age
    this.email = email
    this.details = function(){
        return `I am ${this.name} by name and I am also ${this.age} years old.`
    }
}
// Secondly, we initialize objects from the constructor function
const eze = new Human("Eze Uchenna",25,"ezeuchenna@gmail.com")
console.log(eze.name)
console.log(eze.details())
const ola = new Human("Olaniyi Adetokumbo",30,"olaade@gmail.com")
console.log(ola.email)
console.log(ola.details())
// Built in methods in javascript e.g toString(), slice(), splice(), find(), map(), toUpperCase(), toLowerCase()
const name = "John Doe"
const num = '25'
console.log(name.toUpperCase())
const val = Number(num) // casting means converting from one data type to another
console.log(typeof val)
/*
            ASSIGNMENT
1. Given an object const friend = {
        name:"Joy Doe",
        email:'joydoe@gmail.com',
        year:2002
}
i. Change friend's name to any name of yur choice
ii. how old is friend, using a method
iii. add a new key called favColor to friend and assign orange color to it
2. Loop through friend object
*/


