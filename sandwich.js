export let hamPrice = 5;
export let chickenPrice = 7;

function showMenuforSandwich() {
    console.log('Our sandwiches: \n Ham and Cheese - $5, \n Chicken and veggies - $7\n');
}
showMenuforSandwich()

let ham = {
    ingredient1: "Bread",
    ingredient2: "Ham",
    ingredient3: "Cheese",
    
}
let chicken = {
    ingredient1: "Bread",
    ingredient2: "Chicken breast",
    ingredient3: "Mayo",
    ingredient4: "Lettuce",
    ingredient5: "Tomato",
    
}

export default class Sandwich {
    constructor(name) {
        this.name = name;
    }
    showSandwich() {
        console.log(`\n You chose the ${this.name} sandwich. `);
    }
    showSandwichIngrediens() {
        if (this.name == 'Ham') {
            console.log("Ham sandwich has folloving ingredients: ");
            console.log(Object.values(ham));
        }else if(this.name == 'Chicken'){
            console.log("Chicken sandwich has folloving ingredients: ");
            console.log(Object.values(chicken));
        }
    }
    getPrice(){
        if (this.name == 'Ham') {
            console.log(`\nPrice for Ham Sandwich is $${hamPrice}.`);
        }else if (this.name == 'Chicken') {
            console.log(`\nPrice for Chicken Sandwich is $${chickenPrice}.`);
        }
    }
}