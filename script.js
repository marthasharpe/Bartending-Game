class Drink {
    constructor(name, spirit, mixer, garnish) {
        this.name = name;
        this.spirit = spirit;
        this.mixer = mixer;
        this.garnish = garnish;
    }
}

const rumCoke = new Drink('Rum and Coke', 'rum', 'coke', 'lemon');
const ginTonic = new Drink('Gin and Tonic', 'gin', 'tonic', 'lime');
const scotchSoda = new Drink('Scotch and Soda', 'scotch', 'soda', 'none');
const screwdriver = new Drink('Screwdriver', 'tequila', 'orange juice', 'orange');
const whiskeySour = new Drink('Whiskey Sour', 'bourbon', 'sour mix', 'cherry');

const drinkArray = [rumCoke, ginTonic, scotchSoda, screwdriver, whiskeySour];
console.log(rumCoke);
console.log(drinkArray);

const drinkOrder = drinkArray[Math.floor (Math.random() * drinkArray.length)];
console.log(drinkOrder);

/*
function drinkOrder(drinkArray) {
    return ;
    console.log(`I want a ${Drink.name}.`)
}


const order = document.addEventListener('click', drinkOrder);

onClick add items to drinkServed array.

Choose a spirit.
[]
Add a mixer.
[]
Add a garnish?
[]

if (drinkServed === drinkOrder) {
    alert "Thanks! Keep the change."
} else {
    alert "You got my drink wrong."
}

*/