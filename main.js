// DIGITAL ROOT: This is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer

                    // SOLUTION
// Declare a function
function digitalRoot(num){
    // To reduce the value with more than a digit, the digit must be separated to be into parts
    // and worked on individually.However, to separate the digit, the digit must converted to string

    // To convert the digit to a string
    // let Numstr = num.toString() 

    // Separate the string
    // let splitNumstr = num.split('')

    // Strings cannot be reduced, so the splitted string must be converted into integer
    // let numStrToNum = num.map(Number)

    // sum the converted numeric strings
    // let sumNum = num.reduce((acc,c) => acc + c, 0)

    return num.toString().split('').map(Number).reduce((acc, c) => acc + c, 0)
}
alert(digitalRoot(23))





































//  function digitalRoot(num){
    
//     let sum = num.toString().split('').map(Number).reduce((acc, c) => acc + c, 0)
//     return sum
// }
// console.log(digitalRoot(55)) 


