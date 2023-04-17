function showGreeting() {
    console.log('Welcome to the Simple Cafe! We are glad you are here! \n')
}
showGreeting()

export let price = 3;
let priceM = price + 1;
let priceL = price + 2;

function showMenu() {
    console.log(`OUR MENU: \n Turkish coffee: \n small: $${price} \n medium: $${priceM} \n large: $${priceL} \n \n Instant coffee: \n small: $${price} \n medium: $${priceM} \n large: $${priceL} \n `);
}
showMenu()

let turkishCoffee = "Turkish coffee";
let instantCoffee = "Instant coffee";
let water = "cold water";
let boilWater = "Boiling water";
let pot = "turkish coffee pot";
let hob = "gas hob";
let milk = "Almond milk";

// recipe for Turkish coffee
let step1 = `1. Take a ${pot}`
let step2 = `2. Add 2 spons of ${turkishCoffee} to the ${pot}`
let step3 = `3. Pour 200 ml of ${water} into the ${pot}`
let step4 = `4. Place the ${pot} on a ${hob}`
let step5 = `5. Set the ${hob} to the medium heat`
let step6 = `6. Wait for the ${turkishCoffee} to boil`
let step7 = `7. Remove the ${pot} from the ${hob}`
let step8 = `8. Pour the ${turkishCoffee} to the cup`
let step9 = `9. Add a little ${milk} to the cup with ${turkishCoffee}`
let step10 = `10. Enjoy your ${turkishCoffee}!`
let recipeForTurkish = `Recipe for ${turkishCoffee} : \n ${step1} \n ${step2} \n ${step3} \n ${step4} \n ${step5} \n ${step6} \n ${step7} \n ${step8} \n ${step9} \n ${step10}`

// recipe for instant coffee
let step11 = `1. Take a cup`
let step12 = `2. Put two spoons of ${instantCoffee} into the cup`
let step13 = `3. Pour 200 ml of ${boilWater} into the cup`
let step14 = `4. Stir the mixs of ${instantCoffee} and ${boilWater}`
let step15 = `5. Enjoy your ${instantCoffee}!`
let recipeForInstant = `Recipe for ${instantCoffee} : \n ${step11} \n ${step12} \n ${step13} \n ${step14} \n ${step15} \n `

 class Coffee {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(`Your chose ${this.name}.`)
    }
}

export default class Size extends Coffee {
    constructor(name, size) {
        super(name)
        this.size = size
    }
    getSize() {
        
    if(this.name == turkishCoffee) {
    if (this.size == "s") {
        console.log(`${recipeForTurkish}  \n Price for small cup $${price}`)
    }
    else if (this.size == "m") {
        console.log(`${recipeForTurkish} \n \n Price for medium cup $${priceM}`)
    }
    else if (this.size == "l") {
        console.log(`${recipeForTurkish} \n \n  Price for large cup $${priceL}`)
    }
}
else if (this.name == "Instant coffee") {
    if (this.size == "s") {
        console.log(`${recipeForInstant} \n Price for small cup $${price}`)
    }
    else if (this.size == "m") {
        console.log(`${recipeForInstant} \n Price for medium cup $${priceM}`)
    }
    else if (this.size == "l") {
        console.log(`${recipeForInstant}  Price for large cup $${priceL}`)
    }
}
else {
    console.log("Sorry, you did not choose the type of coffee we serve in this cafe")
}
}
}

