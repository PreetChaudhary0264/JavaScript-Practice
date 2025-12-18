const chai = {
    name:"ginger",
    price:200,
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{writable:false});
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

chai.name = "masala"; //will not change as writable is false
console.log(chai.name);