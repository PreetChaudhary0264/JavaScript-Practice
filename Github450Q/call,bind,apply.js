function one(username){
    this.username = username
    console.log("Function called");
    
}
function two(username,age){
    one.call(this,username)
    this.age = age;
}

const obj = new two("preet",20);
console.log(obj.age);
console.log(obj.username);

const obj1 = {
    name:"preet"
}
const obj2 = {
    name:"ankit"
}

function dummy(greeting1,greeting2){
    console.log(`${greeting1} ${this.name}! ${greeting2}`);
}
const ans = dummy.call(obj1,"Hello","How are you?")
dummy.call(obj2,"Hello","Howe are you?");
dummy.apply(obj1,["Hello","How are you?"])

const func = dummy.bind(obj2);
func("Hello","How are you?")


console.log(NaN === NaN); 
console.log(+0 === -0);

function test(){
    console.log(arguments);
}
test(1,2)

const funcw = ()=>{
    console.log(arguments);
}
// funcw(1,2)

//currying function **********************

function add(a,b,c){   //normal function
    return a+b+c;
}

function addNum(a){
    return function one1(b){
        return function two2(c){
            return a+b+c;
        }
    }
}

console.log(addNum(1)(2)(3));

function memoization(){
   let cache = {}
   return (value)=>{
    if(value in cache){
      console.log("fetcing from cache");
      return cache[value];
   }else{
      console.log("Computing new result");
      cache[value] = value * 5;
      return cache[value]
   }
   }
}

const addition = memoization()
console.log(addition(5));
console.log(addition(10));
console.log(addition(5));