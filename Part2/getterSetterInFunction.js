function User(name, age) {
    this.name = name;
    this.age = age;
}

Object.defineProperty(this,'name',{
    get:function(){
        return this.name
    },
    set:function(newName){
        this.name = newName;
    }
})
Object.defineProperty(this,'age',{
    get:function(){
        return this.age
    },
    set:function(newAge){
        this.age = newAge;
    }
})
const user = new User("alice",30);
console.log(user.name);
user.name = "bob";
console.log(user.name);

//now in objects

const UserObj = {
    name:"alice",
    age:30,

    get  getName(){
        return this.name
    },
    set setName(newName){
        this.name = newName;
    }
}

const tea = Object.create(UserObj)
console.log(tea.getName);
tea.setName = "preet"
console.log(tea.getName);


