
// //==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function printFoods(){
    for (let i = 0; i < Object.keys(person3).length; i++){
        if (Array.isArray(Object.values(person3)[i])){
            console.log(Object.keys(person3)[i].toUpperCase(),':',)
            Object.values(person3)[i].forEach(x => console.log(x))
        }else if (typeof Object.values(person3)[i] == 'string'){
            console.log(Object.keys(person3)[i].toUpperCase(),':',Object.values(person3)[i])
        }
    }
}
printFoods(person3)





//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

 function Person(name, age) {
        this.name = name;
        this.age = age;


    this.printInfo = () => {
        return`Name: ${this.name} \nAge: ${this.age}`;
        
    }

    this.addYear = () => {
        this.age += 1;
        return`${this.name} is now ${this.age}`;
    }
}
let Joe = new Person('Joe',38)
let Eric = new Person('Eric',33)

console.log(Joe.printInfo())
console.log(Eric.printInfo())

console.log(Joe.addYear())
console.log(Joe.addYear())
console.log(Joe.addYear())




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkStringLenth = (stringx) => {
    return new Promise ( (resolve, reject) => {
        if(stringx.length > 10){
            resolve("Big word.")
        }else {
            reject("Small Number.")
        }
    })
}

checkStringLenth("whyareyuolookingatmybaggles")
.then( (result) =>{
    console.log(result)
})
.catch( (error) => {
    console.log(error)
})

checkStringLenth("sus")
.then( (result) =>{
    console.log(result)
})
.catch( (error) => {
    console.log(error)
})