const obj = {
    name:"preet",
    age:45
}
for(let [key,value] of Object.entries(obj)){
    console.log(key,value);
}

const arr = ["a", "b", "c"];
for (const [index, value] of arr.entries()) {
  console.log(index, value);
}

Object.entries(obj).forEach(([key,value],index)=>{
    console.log(index , key,value);
})

console.log(Object.keys(obj).length)

function sum(){
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    console.log(total);
}
console.log(sum(1,2,3));

function test(){
    console.log(arguments instanceof Array);
}
test(1,2,3)

const d1 = new Date();
const d2 = new Date();
console.log(d1 === d2);
console.log(d1.getTime() === d2.getTime());


var str = "This is a \n very lengthy \n sentence!";
console.log(str);

function test2(num1,num2,num3,num4){
    return num1+num2+num3+num4
}
console.log(test2.length)

loop1:for(let i = 0; i < 5; i++){
    for(let j = 0; j < 2; j++){
        if(i == 1 && j == 1)break loop1;
        console.log(i,j);
    }
}

function detectmob() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}