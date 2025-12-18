//singleton object
const user1 = new Object()  //declaring object using constructor
//object literal
const user2 = {}

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d",isLoggedIn:"true"}

const obj3 = {...obj1,...obj2}
// console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));
console.log(obj3.hasOwnProperty('9'));

//destructuring
const {isLoggedIn} = obj3
