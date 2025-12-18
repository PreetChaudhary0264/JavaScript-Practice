function setUsername(username){
    this.username = username;
    console.log("called");
}  //jaise hi ye function complete hoga to udd jayga and iska context bhi khtam ho jayga ..to username set nhi hoga isliye hme call krte waqt uss function ka this pass krte hai ..taki ye wala function jo this use krega wo uss wale function ka ho
// When you call a normal function, it creates its own this, not related to the object you are building.

//  .call(this, ...) forces the function to use the caller’s this.

function createUser(username,email,password){
    setUsername.call(this,username);
    this.email = email;
    this.password = password;
}

const obj = new createUser('alice','alice@gmail.com','alice123');
console.log(obj);
