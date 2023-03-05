//class -es5

//var Person = function(){

//}

class Person {
    constructor(name='Guest',year){
        this.name = name;
        this.year = year;
        console.log('constructer çalıştı.');
    }

    calculateAge(){
        return new Date().getFullYear()-this.year;
    }

    greeting(text){
        return `${text}, My name is ${this.name} `;
    }

}

//nesne - object



const p = new Person("Ömer",1998);
const p2 = new Person();
console.log(p.greeting('Hello'));
console.log(p2.greeting('Good Morning'));

console.log(p.calculateAge());
console.log(p2.calculateAge());
console.log(p);