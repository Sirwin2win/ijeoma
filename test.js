const name = "John Doe"
let i = 0
while(i<name.length){ // while(0<8)
    console.log(name[i])
    i+=1
}
console.log("***********************")
// console.log(name.length-1)
// Looping the name variable from e
let j = name.length-1 //initialization
while(j>=0){  // condition
    console.log(name[j]) // what we're sending to the console(body)
    j-- // decrement
}
/*
for(initialization;constion;increment/decrement){
// body
}
*/
console.log("***********************")
const location = "Loveth"
for(let i = 0; i<location.length;i++){
    console.log(location[i])
}
console.log("***********************")
for(let j = location.length-1;j>=0;j-=1){
    console.log(location[j])
}
console.log("***********************")
const fruits = ["Apple","Banana","Cherry","Guava"]
for(let demo = fruits.length-1;demo>=0;demo--){
    console.log(fruits[demo].toLowerCase())
}
console.log("***********************")
/*
        ASSIGNMENT
1. Given the array const num = [4,5,6,7,8,9]
Loop from the back of the array to the first element
2. const state = "Imo"
a. find the length
b. Loop from both front and back using while
c. loop from both front and back using for loop
*/