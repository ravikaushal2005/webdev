const score = 100;
console.log(score);     // 100

const balance = new Number(100); // not prefer // object // o/p: [Number: 100]
console.log(balance); 

console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00  prefer toFixed for decimal point and use in e-commerce site for price 


const balance1 = 100.1234;
console.log(balance1.toPrecision(4)); // 100.0  // total length 4 (including decimal point)

const otherNumber = 123456789;
console.log(otherNumber.toLocaleString("en-IN")); // 12,34,56,789  // for india
console.log(otherNumber.toLocaleString("en-US")); // 123,456,789  // for US