//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/
'use strict'
// Dog Constructor & Prototype
function Dog (name, color, status) {
    this.name= name;
    this.color= color;
    this.status= status;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Dog("Sadie", "black", "normal");
console.log(sadie);


let moonshine = new Dog("Moonshine", undefined, );
console.log(moonshine);


let atticus = new Dog("Atticus");
console.log(atticus);

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, pet) {
    this.name= name;
    // this.pet = pet;
    this.pet = function (dog){
        dog.status = "happy";
    }
}

// Instances of Human
// Needed: mason, julia

let mason = new Human("Mason", sadie);
console.log(mason.name);
console.log("petname: ", mason.pet);


let julia = new Human("Julia", "Moonshine");
console.log(julia.name);
