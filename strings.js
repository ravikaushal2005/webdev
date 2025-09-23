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
  

