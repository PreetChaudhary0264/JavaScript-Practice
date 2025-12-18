const arr = [1,2,3,4,5,true,"hitesh"] //resizeable hota hai
//arr ko copy krne se shallow copy bnti hai

const arr2 = new Array(1,2,3)

// console.log(arr.push(10));
// console.log(arr.length);
// console.log(arr.pop());
// console.log(arr.unshift());  //suru me add ho jaygi time taking hai saari values shift hoti hai
// console.log(arr.shift());
// console.log(arr.includes(9));
// console.log(arr.indexOf(30));

const newArr = arr.join()
console.log(newArr); //strimg me bind kr diya basically convert

const slicedArr = arr.slice(1,3) //new array dega
const splicedArr = arr.splice(1,3)  //main array me se ye portion alag hi nikl jayga


const hero1 = [1,2,3]
const hero2 = [4,5,6]
const allhero = [...hero1,...hero2]//this is spread operator , ya fir concat methid use krlo

const anotherArray = [1,2,3,[4,5,[6,7,[8]]]]
const realAnArray = anotherArray.flat(Infinity) //exact depth deno chaiye jitne tak wo flat kre

console.log(Array.from("Hitesh"));
//object ko array me convert krte tim ebtana pdta hai ki keys ya values ka array bnana hai wrna wo empty array return krega
console.log(Array.from({name:"Hitesh"})); //this will not work
console.log(Object.values({name:"Hitesh"}));
console.log(Object.keys({name:"Hitesh"}));
console.log(Object.entries({name:"Hitesh"})); //array bnega jisme ek element khud array hoga => [['name','Hitesh']]

let score1 = 100
let score2 = 200
console.log(Array.of(score1,score2));
