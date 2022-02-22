// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// I believe that .push will make so that the variable "indigo" will be added to the array at the end. Thus, the output will be tangerine, magenta, lilac, daffodil, indigo.

// b) Verify and explain: It would seem that instead of adding the term at the end, the code still added a value which makes it total of 5 values but only output the number 5.


// --------------------1) What will this log?

const cohort = "Alpha 2022"
// console.log(cohort.length)

// a) Your answer:
// I believe that .length shows you the total index of the string. Thus, Alpha 2022 has 9 places. Thus the output will be 9.

// b) Verify and explain: The output was 10, and the correct definition of what .lenth does is that it is an informational command that returns the numbers of elements in the array.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:
//I believe that the output of this code will be "Hello World" 4 times. Greeting is the variable that was created to invoke "Hello World" and the 4 is the number of times we would like to invoke the variable.

// b) Verify and explain:
// The output was o. I believe what happen is that the code calculated the index of the string. Thus, by writing 4, the output will be the fourth location of the index which was o.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer:
// The output will likely be Ruby because Ruby is located at the index of 1.

// b) Verify and explain:
// The output was Ruby. I believe that explanation is that by writing in that second line of code const index = 1. That line of code specifies what variable is located at the index of 1. So by specifying in console.log(langauges[index]) the output will return Ruby and not the whole array.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:
// I believe that the output will be SATURDAY, SUNDAY. I believe that this built-in-method makes it so that the output of the variables are all uppercase.

// b) Verify and explain: It would seem that the command toUpperCase does not work in an array but only a string. Thus, an error will show as the output.



// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer:
// I believe that the output will be undefined. Since typeof dataTypes was no defined as a variable.

// b) Verify and explain:
// The output was just number. I believe it returned number because .length shows only the numerical output by calculating the number of places of index that has been filled plus 1. But typeof indicates the type of varialble in your code. Thus, by removing .length it should return something different which was object.
