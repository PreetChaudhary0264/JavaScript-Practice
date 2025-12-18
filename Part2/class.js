class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getAge(){
        return this.age;
    }
}

const user1 = new User("alice",30);
console.log(user1);

//********************************inheritance********************************

class Teacher extends User{
    constructor(name, age, subject){
        super(name, age); //calling parent class constructor
        this.subject = subject;
    }
    teacherName(){
        return this.name;
    }
}

const teacher1 = new Teacher("bob",40,"math");
console.log(teacher1);
console.log(teacher1.getAge());
console.log(teacher1.teacherName());