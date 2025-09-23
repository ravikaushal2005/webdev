// type 
/*
1 stack memory (primitive data type)
2 heap memory (non primitive data type)
   
*/

let name="ravi"  // stack memory (primitive data type)
let myName=name // stack memory (primitive data type)
console.log(name)      //O/P ravi
console.log(myName)  //O/P ravi

name="kaushal"    // change name variable value
console.log(name)      
console.log(myName)    


// heap memory (non primitive data type)


let obj1={name:"ravi",
     age:20
    }  

let obj2=obj1  // both point to same object in heap memory

let obj=obj1  // both point to same object in heap memory
console.log(obj1)      //O/P { name: 'ravi', age: 24 }
console.log(obj2)      //O/P { name: 'ravi', age: 24 }
console.log(obj)       //O/P { name: 'ravi', age: 24 }

obj1.name="kaushal"  // change obj1 name property value
console.log(obj1)      //O/P { name: 'kaushal', age: 24 }
console.log(obj2)      //O/P { name: 'kaushal', age: 24 }
console.log(obj)       //O/P { name: 'kaushal', age: 24 }

obj1.age=24  // change obj1 age property value
obj1.name="ravi kaushal" // change obj1 name property value
console.log(obj1)      //O/P { name: 'ravi kaushal', age: 24 }
console.log(obj2)      //O/P { name: 'ravi kaushal', age: 24 }
console.log(obj)       //O/P { name: 'ravi kaushal', age: 24 }