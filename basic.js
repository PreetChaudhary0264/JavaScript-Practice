const first = "preet"
let second = 12
city = "hapur"

console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(NaN));


let dummy = "33abc"

let valueNumber = Number(second)
console.log(typeof(valueNumber));

let ss = Number(dummy)
// console.log(ss); //NaN  => convert to hpo kayga number me but jab value dekhoge tum NaN aaygi bcoz dummy pure number nhi hai

let dum = null
let s = Number(dum)
// console.log(s); // null 0 me convert ho jayga

let d = undefined
let d2 = Number(d)
// console.log(d2); //NaN aayga

// true/false => 0 or 1 me convert ho jayga

//Boolean and String me bhi convert ho jayga



//*******************operations*****************

// console.log(null > 0); //false
// console.log(nul == 0);//false
// console.log(null >= 0);//true
//the reason is that comparison converts null to a number,treating it as 0
//undefined ke sath in tino ka ans false hi aayga


// console.log("2" == 2);//true
// console.log("2" === 2);//false

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);//false => symbol me chahe value same bhi pass kro wo hmeha unique hi rhengi

const game = "hitesh"
const game2 = new String('hitesh')


const num = 100
// console.log(num.toFixed(2));

const otherNum = 123.89
// console.log(otherNum.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER); 


// console.log(Math.max(3,4));
// console.log(Math.ceil(4.2));
// console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;
// console.log(Math.floor(Math.random() * (max-min+1))+min);

console.log(Math.floor(Math.random() * (max-min+1)+min));

//************DATES************************ */

let date = new Date()
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());

let date2 = new Date(2025,10,11)
console.log(date2.toDateString());

let date3 = new Date("10-11-2025")

let time = Date.now()
console.log(time);
// console.log(date3.getTime()); //now we can compare with time(miliseconds me hai sab kuch)

//second me convert krne ke liye
// console.log(Math.floor(Date.now()/1000));
// console.log(date3.getMonth());

