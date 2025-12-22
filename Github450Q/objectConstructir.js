// "use strict"
const obj = {name:"Preet"}

Object.defineProperty(obj,"name",{
    writable:false
})
console.log(obj.name);
obj.name = "faltu"
console.log(obj.name);

const count = {counter:0}

Object.defineProperty(count,"add",{
    set:function (value){   //function name dene se wo sirf debugging and stack traces me help krega
        this.counter += value;
        return this.counter
    }
})
Object.defineProperty(count,"subtract",{
    set:function(value){
        this.counter -= value;
        return this.counter
    }
})
Object.defineProperty(count,"decrement",{
    get:function(){
        this.counter--;
        return this.counter
    }
})
Object.defineProperty(count,"increment",{
    get:function(){
        this.counter++;
        return this.counter
    }
})


function add(one,two,three){
    console.log(one);
    
}
add(1)

const iterable = [1,2,3]   //iterable 
const iterator = iterable[Symbol.iterator]()   //[Symbol.iterator]()   ek object return krta hai fir next() usme obj me se value deta hai
console.log(iterator.next());
console.log(iterator.next());   //next method ek object return krta hai jisme properties hoti hai value and done.
console.log(iterator.next());
console.log(iterator.next());

var x = "100";
var y = +x;
console.log(typeof x, typeof y); // string, number
console.log(x,y);

let arr = []
for(let i = 0; i < 5; arr[i++]=1);

console.log(arr);
