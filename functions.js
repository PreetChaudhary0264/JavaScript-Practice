function dummy(a,b,...nums){
   return a+b+nums.reduce((sum,val)=> sum+val ,0)
}
const res = dummy(2,3,4,5,6)
// console.log(res);

const arr = [1,2,3,4,5,6,7]
arr.forEach((val)=>{
   // console.log(val);
   
});

const plus = [1,2,3,4,5]
plus.forEach((val,index,plus)=>{
   plus[index] = val * 2;
})
// console.log(plus);

const minus = [5,5,5,5,5];
minus.forEach((val,i,minus)=>{
   minus[i] = val-2;
})


;(function neww(){
   // console.log("BIDI PEELO");
     
})();
//arrow function prr bhi kaam krta hai

((name)=>{
   // console.log(`{DB Connected ${name}}`);
   
})("preet")

//falsy values
// false
// 0
// -0
// BigInt
// 0n
// ""
// null
// undefined
// NaN

//Nullish Coalescing Operator(??) : null undefined se bachane ke liye

let val;
// val = 5 ?? 10

val = undefined ?? 10
console.log(val);
