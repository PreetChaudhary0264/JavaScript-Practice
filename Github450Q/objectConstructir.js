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

console.log(ans);

function add(one,two,three){
    console.log(one);
    
}
add(1)
