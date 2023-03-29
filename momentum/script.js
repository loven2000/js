const amIFat = null;
let something;

console.log(something, amIFat);

function sayHello(nameOfPerson, age){
    console.log('hello my name is ' + nameOfPerson + " and I'm " + age);
}

sayHello('nico', 10);
sayHello('dal', 23);
sayHello('lynn', 21);

function plus(a, b){
    console.log(a + b);
}

function divide(a, b){
    console.log(a / b);
}

plus(8 ,60);
divide(98, 20);

const player = {
    name: "nico",
    sayhello: function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you!");
    }
}

console.log(player.name);
player.sayhello("lynn");
player.sayhello("nico");

const calculator = {
    add: function(a, b){
        console.log(a + b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    divide: function(a, b){
        console.log(a / b);
    }
};

calculator.add(5, 1);
calculator.minus(5, 1);
calculator.divide(2, 8);