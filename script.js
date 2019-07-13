class Drink {
    constructor(name, spirit, mixer, garnish) {
        this.name = name;
        this.spirit = spirit;
        this.mixer = mixer;
        this.garnish = garnish;
    }
}

/*List of Drinks*/
const rumCoke = new Drink('Rum and Coke', 'rum', 'coke', 'lemon');
const ginTonic = new Drink('Gin and Tonic', 'gin', 'tonic', 'lime');
const scotchSoda = new Drink('Scotch and Soda', 'scotch', 'soda', 'none');
const screwdriver = new Drink('Screwdriver', 'tequila', 'orange juice', 'orange');
const whiskeySour = new Drink('Whiskey Sour', 'bourbon', 'sour mix', 'cherry');

const drinkArray = [rumCoke, ginTonic, scotchSoda, screwdriver, whiskeySour];
const drinkOrder = drinkArray[Math.floor (Math.random() * drinkArray.length)];

function takeOrder() {
    console.log(`I want a ${drinkOrder.name}.`)
}

    let spiritClick = document.getElementById('');
    let mixerClick = document.getElementById('');
    let garnishClick = document.getElementById('');
    let drinkServed = new Drink(drinkOrder.name, spiritClick, mixerClick, garnishClick);

function serveDrink() {
    if (drinkServed === drinkOrder) {
        console.log("Thanks! Keep the change.")
    } else {
        console.log("You got my drink wrong.")
    }
}

/*
Optional feature: 'Get a Hint' button. Lists the attributes of the drinkOrder.
*/