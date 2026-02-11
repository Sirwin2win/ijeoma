/*
Array is a special kind of variable that can hold more than one value at a time.
The values inside the array container are called 'elements or members' of the array
Array elements are indexed from 0, for the first element, 1 for second...
For the length, we count from 1 to the end
Array can hold any data type
Ways of creating JavaScript array
1. Using array literal
2. Array object or he new keyword
*/
const fruits = ["Apple","Banana","Cherry"] // array literal
// console.log(fruits[0])
const greet = function(){
    return "Good day"
}
const arr = [true,"Ade",25,greet,["Apple","Yam"],{name:'John Doe',age:20}]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3]()) // This calls the greet function which is the 3rd index
console.log(arr[4][1]) // returns array ["Apple","Yam"]
console.log(arr[5].age)  // returns an object { name: 'John Doe', age: 20 }
// CRUD => Create Read Update Delete
// Create an array using array literal []
const num = []
console.log(num)
num[0] = "Apple"
num[1] = "Banana"
console.log(num)
const foods = ["Garri","Akpu","Yam"]
const no = [10]
console.log(no)
console.log(no.length)
// Create using array object
const names = new Array("Uche","Emeka")
console.log(names)
const no2 = new Array(10)
console.log(no2)
console.log(no2.length)
// Reading of array elements
/*
Ways reading array elements
1. By it's index
2. By reading the entire array together i.e console.log(fruits)
3. By loop
*/
// By index
console.log(fruits[0])
// By reading the entire array
console.log(fruits)
// By loop; using any loop type of your choice
for(let i =0;i<fruits.length;i++){
    console.log(fruits[i])
}
// Updating the arrya elements
const erimeri = ["Ofe","Anu","Akpu","ji"]
erimeri[0] = "Osikapa"
erimeri[4] = "Anyu"
console.log(erimeri)
// Updating an array using loop
for(let v = 0; v<erimeri.length;v++){
    if(erimeri[v]==='Akpu'){
        console.log(erimeri[v]='Ofe')
        // console.log(erimeri[v].toUpperCase())
    }
}
// delete array
erimeri.pop()
// delete erimeri[1]
console.log(erimeri)
// multidimensional array or array of arrays
const multi = [[1,2],[3,4],[5,6]]
console.log(multi[0])
console.log(multi[1])
console.log(multi[2])
// print 3 from the array
console.log(multi[1][1])
console.log(multi[2][1])
/*
  ASSIGNMENT
1. Given the array; const = students =[["Uche","Ike"],["Ada","Chidinma"],["Amaka","Uju"]]
 Change "Chidinma" to "Ijeoma"
2. Loop through the students array and get the individual values
*/
// Looping through array of arrays
// applying nested loop to sum the array elements
let count = 0
for(let i = 0; i<multi.length;i++){
    // console.log(multi[i])
    for(let j = 0;j<multi[i].length;j++){
        count+=multi[i][j]
        // console.log(multi[i][j])
    }
}
console.log(count)
// Looping again
// const multi = [[1,2],[3,4],[5,6]]
for(let i = 0;i<multi.length;i++){
    // console.log(multi[i])
    for(let j = 0; j<multi[i].length;j++){
        console.log(multi[i][j])
    }
}

