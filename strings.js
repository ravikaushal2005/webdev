 const name="ravi"
 const age=19

//  console.log("my name is "+name+" and my age is "+age)  // old way not prefer


//   console.log(`my name is ${name} and my age is ${age}`)  // prefer way (template string)   note= use backtick ` not single quote ' or double quote "
//   // most use backend development (node js)

  const fullName= new String("ravi")  // not prefer


//   console.log(fullName[0])  // r
  console.log(fullName.__proto__)  // all string methods


//  console.log(name.length)  // 4
//   console.log(name.toUpperCase())  // RAVI   convert lower  to  uper
//  console.log(name.toLowerCase())  // ravi    convert uper   to  lower
 console.log(name.slice(0,2))  // ra   
  console.log(name.slice(-3,4))  // vi
 console.log(name.slice(1,4))  // avi
//  console.log(name.slice(1))  // avi


console.log(name.charAt(2)) 
console.log(name.indexOf('v')) // 2
  

const newString= "    ravi kumar    "
console.log(newString)  //     ravi kumar
console.log(newString.trim())  // ravi kumar   remove extra space from start and end


const newString2= "ravi kumar "
console.log(newString2.replace("kumar","kaushal"))  // ravi kaushal   // replace kumar to kaushal

const url = "https://www.ravi.com/ravi%20kaushal"
console.log(url.replace("%20","-"))  // https://www.ravi.com/ravi-kaushal   // replace %20 to -

console.log(url.includes("ravi"))  // true   // check ravi is present or not
console.log(url.includes("kaushal"))  //true   // check kaushal is present or


const clientname= "ravi-kumar-kaushal "
console.log(clientname.split("-"))  // [ 'ravi', 'kumar',  ]   // split string to array