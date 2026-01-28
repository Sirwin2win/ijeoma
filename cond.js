/*
Conditional statement is used to monitor and guide our users on the application
Types of conditional statement
1. if
2. if...else
3. switch
4. ternary operator
5. short circuit

        Syntax
    if(true){
    //block of code to run when true
    }

    if(false){
    
    }else{
        // block of code to run when false
        }

*/
// the if statement

const name = 'John Doe'
if(!name){
    console.log("Yes")
}else{
    console.log("See me")
}

if(true){
    console.log("On point")
}else{
    console.log("Another point")
}
// if ...else if...else
const age  = 20
if(age<18){
    console.log("Minor")
}else if(age<65){
    console.log("Civil servant")
}else{
    console.log("You're retired")
}

// switch statement
/*
A switch statement checks some cases to see if there's a mach. If there's a match, it 
returns the corresponding code, if there's no match it returns a default value
*/
// An expression in Javascript is a line of code that returns a value e.g const a = 9; b = 3-2
const d = new Date().getDay() // 0-6 i.e Sun - Sat
// console.log(d)
switch (d) {
    case 0:
        console.log("Happy Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Thank God is Friday")
        break;
    case 6:
        console.log("Weekend")
        break;

    default:
        console.log("No match found")
        break;
}

/*
        ASSIGNMENT
1. Using const t = new Date().getHours() // t runs from 0 - 24
if..else if...else to format the appropriate greeting

*/

// Ternary Oeprator
/*
true?code if true: code if false
*/
const age2 = 20
age2<18?console.log("You're a baby"):console.log("You're an Adult")

const isLogin = false
isLogin?console.log("Welcome back"):console.log("Login")
// short circuit
isLogin && console.log("I biala")
