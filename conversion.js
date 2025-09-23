let score = "3"
console.log(typeof score )
console.log(typeof(score))

let valueIntNumber = Number(score)  //conversion
console.log (typeof valueIntNumber) // then  check result 
console.log ( valueIntNumber)  // print 


// let one more example 

let marks ="90a"
console.log(typeof marks )
let grade = Number(marks)
console.log(grade)  // output NaN( non an number) becouse marks is mixture of character and number 

// let supose marks= Null o/p is 0 
// let supose marks= undefined  o/p is NaN 
// if string value op is NaN 
// if boolen value  if true op is 1  or  flase = 0



// "33" => 33
// "33a" => NaN
// true => 1
//false => 0
