function user(username, age) {
  this.username = username;
  this.age = age;
  return this
}

function object() {}
// const userOne = user('alice', 30);
// const userTwo = user('bob', 40);
// console.log(userOne);
//isiliye we use new keywords => wo hme nya instance ya context deta hai
const userOne = new user('alice', 30);
const userTwo = new user('bob', 40);
console.log(userOne);
console.log(userTwo);

//instance of keyword ******************************
console.log(userOne instanceof user);
console.log(userOne instanceof object);

