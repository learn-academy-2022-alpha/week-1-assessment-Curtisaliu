// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

// Pseudo code
// Create a function named boilingPoint
// Made a decision tree, use conditional to check boiling points
// Input: any number
// Output = 42 is below the boiling point, 350 is above the boiling point, and 212 is at boiling point
// return the string if the number is below the boiling point, at the boiling point, or above boiling point.

// const boilingPoint = (number) => {
//   if(number === 212) {
//     return `212 is at boiling point`
//   } else if (number < 212) {
//     return `${number} is below boiling point`
//   } else if (number > 212) {
//     return `${number} is above boiling point`
//   }
// }
//
// console.log(boilingPoint(temp1))
// console.log(boilingPoint(temp2))
// console.log(boilingPoint(temp3))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// Pseduo code
// create a variable named comboArrays
// let comboArray equal both arrays concatted together
// console log with .length to find the length
// Input
// output = 10

// const comboArrays = myNumbers1.concat(myNumbers2)
// console.log(comboArrays.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ahplA"

const currentCohort = "Alpha 2022"

//Pseudo Code
// Create a new variable that invokes currentCohort
// Next convert the string to an array
// reverse the desired elements
// join the elements back together as a string

// const chicken = currentCohort.split('')
// console.log(chicken.reverse().join(''))


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

// Pseudo code
// create a for-loop.
// Set i = 0, set the length of myArray as the end, set the incrementation as i++
// insert a decision tree to decide whether it is odd or even
// input
// output

// for(let i = 0; i < myArray.length; i++){
//   if(myArray[i] % 2 !== 0){
//     console.log("odd")
//   } else {
//     console.log("even")
//   }
// }



// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

//Pseudo code
// Create a function named results
// results will take in two parameters: num1 and num2
// make a conditional in which num1 is greater than number2
//Input: the two sets
//return: should be if num1 is greater than num2, then num 1 will minus number2
//else if return should be vise-versa
//output: 42, 3



const results = (num1,num2) => {
  if (num1 > num2) {
    return (num1 - num2)
  } else if (num2 > num1) {
    return (num2 - num1)
  } else {
    return 0
  }
}
console.log(results(number1,number2))
console.log(results(number3,number4))
