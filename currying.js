function add(a,b,c){
    return a+b+c;
}

const sum = (a => b => c => a+b+c)  //currying
const ans = sum(1)(2)(3);
console.log(ans);

function sum2(a){
    return function (b){
        return function (c){
            return a + b+  c;
        }
    }
}

const res = sum2(1)(2)(3)
console.log(res);

