const arr = [1,2,3];
arr.sayHii=()=>{
    console.log(`hello my dear`);
}
let crr = [1,2,3,4,5];
crr.__proto__.print = ()=>{
    console.log(`hello to the arry :`);
}

//Functions in oops

function personMake (name,age){
    const info  = {
        name:name,
        age:age,
        talk(){
            console.log(`hiii ${this.name}`);
        }
    }
    return info;
}
let p1 = personMake("Dev",18);

//constructors 

// function Person (name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){
//     console.log(`|Hi my ame is ${this.name} |`);
// }

// let p2 = new Person("siva",23);
// let p3 = new Person("rana",22);

//classes with constructor

class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talking(){
        console.log(`talking to ${this.name}`);
    }
}

let hii = new Person ("Divyansh",18);

class Parent {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi I'm ${this.name} !`);
    }
}
class Child extends Parent{
    constructor(name,age,IQ){
        super(name,age);
        this.IQ=IQ;
    }
}

const inherit = new Child ("Divyansh",18,9);