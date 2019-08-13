// Drink menu

class Drink {
    constructor(name, glass, spirit, mixer, garnish) {
        this.name = name;
        this.glass = glass;
        this.spirit = spirit;
        this.mixer = mixer;
        this.garnish = garnish;
    }
}

const ginTonic =new Drink('Gin and Tonic', 'Highball', 'Gin', 'Tonic', 'Wedge');
const scotchSoda = new Drink('Scotch and Soda', 'Highball', 'Scotch', 'Soda', 'Wedge');

//Array of all drinks
const drinkArray = [ginTonic];
//const drinkArray = [ginTonic, scotchSoda];

//supplyArray arrays, make into repeatable Arrays object?

const glassArray = [{name: 'Highball', image: './images/Highball.png'}];
//const glassArray = ['Rocks', 'Highball', 'Martini'];
const spiritArray = [{name: 'Gin', image: './images/Gin.png'}];
//const spiritArray = [{name: 'Vodka', image: './images/Vodka.png'}, 'Bourbon', 'Scotch', 'Gin', 'Rum', 'Tequila', 'Triplesec', 'Vermouth'];
const mixerArray = [{name: 'Tonic', image: './images/Tonic.png'}];
//const mixerArray = ['Coke', '7Up', 'Soda', 'Tonic', 'Sour', 'Pineapple', 'Orange', 'Cranberry'];
const garnishArray = [{name: 'Wedge', image: './images/LemonLime.png'}];
//const garnishArray = ['Cherry', 'Wedge', 'Olive']

//Populates HTML lists with supplies and their attributes
const populateList = (supplyArray, supplyType) => {
    supplyArray.forEach(supply => {
        const listItem = document.createElement('li');
        listItem.innerText = supply.name;
        listItem.id = supply.name;
        listItem.className = supplyType;
        const itemImage = new Image()//width, height
        itemImage.src = supply.image;
        listItem.appendChild(itemImage);
        const itemParent = document.getElementsByClassName(`${supplyType}-selection`)[0];
        itemParent.appendChild(listItem);
        listItem.addEventListener('click', () => {
            newDrink[supplyType] = supply.name;//assign supply to supplyType in newDrink
            const drinkItem = document.createElement('li');
            drink.appendChild(drinkItem);
            drinkItem.innerText = supply.name;
        })
    })
}
populateList(glassArray, 'glass');
populateList(spiritArray, 'spirit');
populateList(mixerArray, 'mixer');
populateList(garnishArray, 'garnish');

//Elements and event listeners
const wordBubble = document.getElementById("word-bubble");
const customer = document.getElementById("customer");
let drink = document.getElementById("new-drink");
let tips = document.getElementById("tip-jar");

//initializing variables
let drinkOrder;
let newDrink = {}

//default value for new customer
const newCustomer = () => {
    drinkOrder = drinkArray[Math.floor (Math.random() * drinkArray.length)];
    customer.innerText = "🙂"
    wordBubble.innerText = "Hi. I'm a new customer."
    drink.innerText = "";
};
newCustomer();

// first click takes order, second click serves drink, third click new customer
let count = 0;
customer.addEventListener("click", () => {
    count++;
    if (count === 1) {
        takeOrder();
    } else if (count === 2) {
        serveDrink();
    } else {
        newCustomer();
        count = 0;
    }
});

const takeOrder = () => {
    wordBubble.innerText = `I want a ${drinkOrder.name}.`
    newDrink = {}
}

const serveDrink = () => {
    if (newDrink.glass === drinkOrder.glass && newDrink.spirit === drinkOrder.spirit && newDrink.mixer === drinkOrder.mixer && newDrink.garnish === drinkOrder.garnish) {
        customer.innerText ="😊"
        wordBubble.innerText = "Thanks! Here's your tip!"
        takeTip();
    } else {
        customer.innerText = "😠"
        wordBubble.innerText = "You got my drink wrong."
    }
}

let tipTotal = 0;
tips.innerText = `Tips: ${tipTotal}`;
const takeTip = () => {
    tipTotal += 1;
    tips.innerText = `Tips: ${tipTotal}`;
}


// add a price value to each drink

// "Get Recipe" button that shows the current drink order as a drop-down menu

// display what the user adds to newDrink