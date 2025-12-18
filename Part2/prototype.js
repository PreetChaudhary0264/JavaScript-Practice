function multiplyBy5(num){
    return num * 5;
}
console.log(multiplyBy5(10)); // Output: 50
multiplyBy5.power = 2;
console.log(multiplyBy5.power); // Output: 2        behind the seen sub kuch object hi hai

function User(name,score){
    this.name = name;
    this.score = score;
}   

User.prototype.incrementScore = function(){
    this.score++;
}
User.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}

const user1 = User("Alice", 100);   //bina nerw keywod ke wo printme ko read nhi kr payega...error dega
//hmne function call krke jab user1 ko pass kiya to hmne user1 ko btaya nhi ki hmare pass additional properties bhi hain jo hmne prototype me diye hain
//iske liye hme new keyword use krna padta hai
//new keyword se hm ek naya object create krte hain jiska prototype User function ke prototype se linked hota hai

const user2 = new User("Alice", 100); 
user2.printMe(); // Output: Score is 100
user2.incrementScore();

// User("Bob", 150).printMe();   //ye nhi chalge kyuki prototype access krne ke lioye object bhi hona chahiye //ye error dega kyuki User function ko bina new ke call kiya gaya hai, isliye ye undefined return karega aur printMe method call karne par error aayega

let arr = ["hulk","thor","ironman"];

let heroPower = {
    name:"hulk",
    power:100
}
Object.prototype.getPower = function(){  //yha pe hmne top level prr apna function inject kr diya hai   to ab ye function sare objects ke liye available hoga (function,arrays,strings sabke liye)
    console.log("getPower is present in all objects");
}
heroPower.getPower() // Output: 100
arr.getPower() ;



//********** Prototypeal inheritance***********************************

const teacher = {
    name: "John",
}

const tsSupport = {
    isTS: true,
    __proto__: teacher   //ab tsSupport ka prototype teacher ho gya hai...yani tsSupport ab teacher ki properties ko access kr payega  (this is old method of setting prototype)
}

//this is new method of setting prototype
Object.setPrototypeOf(tsSupport, teacher);  //ab tsSupport ka prototype teacher ho gya hai...yani tsSupport ab teacher ki properties ko access kr payega