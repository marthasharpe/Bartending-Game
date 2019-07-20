// Drink menu

const shotRum = { 
    name: 'shot of Rum',
    glass: 'Shot', 
    spirit: 'Rum',
}
const shotGin = {
    name: 'shot of Gin',
    glass: 'Shot',
    spirit: 'Gin',
}
const rumCoke = {
    name: 'Rum and Coke',
    glass: 'Highball',
    spirit: 'Rum',
    mixer: 'Coke',
}
const ginTonic = {
    name: 'Gin and Tonic',
    glass: 'Highball',
    spirit: 'Gin',
    mixer: 'Tonic',
}

const drinkArray = [shotRum, shotGin, rumCoke, ginTonic];

//supplyStock arrays
const glassArray = ['Shot', 'Rocks', 'Highball', 'Martini'];
const spiritArray = ['Vodka', 'Bourbon', 'Scotch', 'Gin', 'Rum', 'Tequila', 'Triplesec', 'Vermouth'];
const mixerArray = ['Coke', '7Up', 'Soda', 'Tonic', 'Sour', 'Pineapple', 'Orange', 'Cranberry'];
const garnishArray = ['Cherry', 'Lemon', 'Lime', 'Olive']

let drinkOrder;
let newDrink = {}

//Populates HTML lists with supplies and their attributes
const populateList = (supplyStock, supplyType) => {
    supplyStock.forEach(supply => {
        const listItem = document.createElement('li');
        listItem.innerText = supply;
        listItem.id = supply;
        listItem.className = supplyType;
        const itemParent = document.getElementsByClassName(`${supplyType}-selection`)[0];
        itemParent.appendChild(listItem);
        listItem.addEventListener('click', () => {
            newDrink[supplyType] = supply;
        })
    })
}
populateList(glassArray, 'glass');
populateList(spiritArray, 'spirit');
populateList(mixerArray, 'mixer');
populateList(garnishArray, 'garnish');

//Event listeners and functions for all the buttons
const wordBubble = document.getElementById("word-bubble");
const customer = document.getElementById("customer");

let count = 0;
customer.addEventListener("click", () => {
    count++;
    if (count === 1 || count % 2 === 1) {
        takeOrder();
    } else if (count % 2 === 0) {
        serveDrink();
    }
});

const takeOrder = () => {
    drinkOrder = drinkArray[Math.floor (Math.random() * drinkArray.length)];
    wordBubble.innerText = `I want a ${drinkOrder.name}.`
    newDrink = {}
}

const serveDrink = () => {
    if (newDrink.glass === drinkOrder.glass && newDrink.spirit === drinkOrder.spirit && newDrink.mixer === drinkOrder.mixer) {
        wordBubble.innerText = "Thanks! Here's your tip!"
    } else {
        wordBubble.innerText = "You got my drink wrong."
    }
}

//need to add a price value to each drink and write a function that adds it to the tip jar

//Optional feature: 'Get a Hint' button. Lists the attributes of the drinkOrder.
// need a place that shows what you've added to newDrink