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
const scotchSoda = {
    name: 'Scotch and Soda',
    glass: 'Highball',
    spirit: 'Scotch',
    mixer: 'Soda',
}

const drinkArray = [shotRum, shotGin, rumCoke, ginTonic, scotchSoda];

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
            drink.innerText = `${newDrink[supplyType]}`;
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
const drink = document.getElementById("new-drink");

// default value for customer
const newCustomer = () => {
    customer.innerText = "🙂"
    wordBubble.innerText = "Hi. I'm a new customer."
}
newCustomer();

// tracks clicks on customer, every odd click will takeOrder, every even click will serveDrink
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
        customer.innerText ="😊"
        wordBubble.innerText = "Thanks! Here's your tip!"
    } else {
        customer.innerText = "😠"
        wordBubble.innerText = "You got my drink wrong."
    }
    window.setTimeout(newCustomer, 2500); // resets customer after 2.5 seconds
}



// add a price value to each drink and write a function that will add it to the tip jar

// Mixology Manual with a complete list of drinks and their ingredients or Recipe button that shows only the current drink order

// display what the user adds to newDrink