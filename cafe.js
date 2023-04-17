import Size from "./CoffeeClass.js";
import Sandwich, { hamPrice } from "./sandwich.js"
import { chickenPrice } from "./sandwich.js"; 
import { price } from "./CoffeeClass.js";


let coffeeOrder = new Size("Turkish coffee", "l")    // "Instant coffee" / "Turkish coffee" // "s" / "m" / "l"
let sandwichOrder = new Sandwich('Ham')             // "Ham" / "Chicken"

coffeeOrder.getName()
coffeeOrder.getSize()

sandwichOrder.showSandwich()
sandwichOrder.showSandwichIngrediens()
sandwichOrder.getPrice()

let arrSizes = ['s', 'm', 'l'];
function totalOrder (){
    if(sandwichOrder.name == 'Ham'){
        console.log(`\nTOTAL PRICE: $${hamPrice + price + arrSizes.indexOf(coffeeOrder.size) }`);
    }else if(sandwichOrder.name == 'Chicken'){
        console.log(`\nTOTAL PRICE: $${chickenPrice + price + arrSizes.indexOf(coffeeOrder.size) }`);
    }
}
totalOrder()

console.log("\nThank you for your order!");