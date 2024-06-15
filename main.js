/*assignment 24
//comparision test have at lesat one true statment and one false
//test 1 for equality and uneruality with strings
const string1 : string =`KAINAT`
const string2 : string = `IQBAL`
console.log(string1===string2)
console.log(string1!==string2)
//test 2 using lowercase function
const capitalletter = `ORANGE`
const smallletter = `orange`
console.log(capitalletter.toLowerCase() === smallletter)
console.log(capitalletter.toLowerCase() !== smallletter)*/
//test 3  numerical test equality  and ineqqualty greater than and less than greater than or equal to less than or qual to
var num1 = 19;
var num2 = 26;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //false
console.log(num1 < num2); //true
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true
//test 4 using & and or operator
console.log(num1 < num2 && num1 > num2); //false
console.log(num1 > num2 || num1 < num2); //true
