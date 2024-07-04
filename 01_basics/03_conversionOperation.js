let score = "33abc"

console.log(typeof score)

let scoreInNumber = Number(score)
console.log(typeof scoreInNumber)   //number
console.log(scoreInNumber)  //NaN   // number mai convert kiya isko isliye
// if score = null           0
//            undefined     NaN
//              true        1
//              "adg"       NaN

let isTrue = 1
let boolIsTrue = Boolean(isTrue)

console.log(boolIsTrue);

let s = ""
let st = Boolean(s)
console.log(st)
console.log(typeof st)


// 1: true
// 0: false
// "chahat": true
// "": false

let num = 33
let number = String(num)
console.log(number)
console.log(typeof number)