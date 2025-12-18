function mul(val){
    return val*2
}
console.log(mul(2));
mul.power = 2;
console.log(mul.power);  //behind the seen sab kuch obj hai string function array

function User(name,age){
    this.name = name;
    this.age = age
    return "hello"
}

User.prototype.printMe = function(){
    console.log(`User age is ${this.age}`);
}

const obj = new User("preet",20)
console.log(obj.printMe());

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise1 is resolved")
    },2000)
})
// promise.then((val)=> console.log(val))
// .catch((err)=>console.error(err))
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promise2 is rejected")
    },2000)
})

Promise.all([promise1,promise2]).then((res)=>{console.log(res)}).catch((err)=>console.error(err));