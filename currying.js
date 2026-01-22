function add(a,b,c){
    return a+b+c;
}

const sum = (a => b => c => a+b+c)  //currying
const ans = sum(1)(2)(3);
console.log(ans);
