// primitive data types
/*
1 sring -> text ( use '' or "" or ``)
2 number -> integer/float
3 boolean -> true/false
null  -> empty value
undefined  -> not assigned value
bigint  -> large number ( eg - 9007199254740991n)
symbol -> unique VALUE  ( use in react js) 



non primitive data types
1 object -> key value pair ( eg - {name:"ravi", age:24} )
2 array  -> collection of similar/dissimilar data ( eg - [1,2,3,"ravi",true] )
3 function -> block of code ( eg - function name(){ code }  )


*/

 // string
let str1='ravi'
let str2="kaushal"
let str3=`hello ravi kaushal`  // backtick

console.log(str1)
console.log(str2)
console.log(str3)        
console.log(typeof str1)  // to check datatype
console.log(typeof str2)  
console.log(typeof str3)         
console.log(typeof "ravi")
console.log(typeof 'ravi')

// number
let num1=24
let num2=24.5
console.log(num1)
console.log(num2)        
console.log(typeof num1)  
console.log(typeof num2)         
console.log(typeof 24)
console.log(typeof 24.5)

// boolean
let istrue=true
let isfalse=false
console.log(istrue)
console.log(isfalse)        
console.log(typeof istrue)  
console.log(typeof isfalse)         
console.log(typeof true)
console.log(typeof false)
console.log(typeof (5>2))  // true
console.log(typeof (5<2))  // false

// null
let nullvalue=null
console.log(nullvalue)        
console.log(typeof nullvalue)   // bug in js  // object
console.log(typeof null)         // bug in js  // object

// undefined     
let undefvalue=undefined
let undefvalue2
console.log(undefvalue)
console.log(undefvalue2)        
console.log(typeof undefvalue)  
console.log(typeof undefvalue2)         
console.log(typeof undefined)

// bigint
let bigIntvalue=9007199254740991n
console.log(bigIntvalue)        
console.log(typeof bigIntvalue)  
console.log(typeof 9007199254740991n)

// symbol
let symvalue=Symbol("ravi")
console.log(symvalue)                
console.log(typeof symvalue)  
console.log(typeof Symbol("kaushal"))
console.log(typeof Symbol())  // unique value
console.log(Symbol("ravi")==Symbol("ravi"))  // false


// object
let obj={name:"ravi", age:24, istrue:true}
console.log(obj)                
console.log(typeof obj)  
console.log(typeof {name:"kaushal", age:24, istrue:true})

// array
let arr=[1,2,3,4,"ravi", true]
console.log(arr)                
console.log(typeof arr)  
console.log(typeof [1,2,3,4,"kaushal", true])

// function
function add(){
    console.log("hello ravi")
}
add()
console.log(typeof add)  
console.log(typeof function(){})
console.log(typeof function add(){})
console.log(typeof (()=>{}))  // arrow function


// special number
console.log(typeof NaN)  // number
console.log(1/0)  // infinity
console.log(-1/0)  // -infinity
console.log(typeof (1/0))  // number
console.log(typeof (-1/0))  // number
console.log(typeof Infinity)  // number


// type convertion
// 1 string to number
let str="123"    
let num=Number(str)  // prefer to use
console.log(typeof str)  // string
console.log(typeof num)  // number
console.log(num)
console.log(typeof Number("ravi"))  // number  // NaN