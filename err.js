/*
Error handling is a way to manage error in such a way that it does not cause app crash.
We can do that using 
try{
// a code you are trying out
}catch (error){
    // error to be sent if there's an error
}
either e, err, or error. They're the same
This is an error object
It has two properties
1. name i.e e.name or err.name or error.name
2. message i.e e.message or err.message, or error.message
*/
// const name = "John Doe"
try {
    console.log(name)
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}
console.log("Hello world")