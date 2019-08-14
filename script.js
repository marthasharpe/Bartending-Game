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
        listItem.className = supplyType; //eg. "glass"
        listItem.id = supply.name; //eg. "Highball"
        //add div to each list item with the name
        const itemLabel = document.createElement('div');
        itemLabel.class = "label";
        itemLabel.innerText = supply.name;
        listItem.appendChild(itemLabel);
        //add image to each list item
        const itemImage = new Image()
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
const wordBubble = document.getElementsByClassName("word-bubble")[0];
const customer = document.getElementsByClassName("customer")[0];
let drink = document.getElementsByClassName("new-drink")[0];
let tipJar = document.getElementsByClassName("tip-jar")[0];
let recipeButton = document.getElementsByClassName("recipe-button")[0];
let drinkRecipe = document.getElementsByClassName("drink-recipe")[0];

recipeButton.addEventListener('click', () => {
    drinkRecipe.classList.toggle("drink-recipe");
    drinkRecipe.classList.toggle("show-recipe");
})

//initializing variables
let drinkOrder;
let newDrink = {}

//default value for new customer
const newCustomer = () => {
    drinkOrder = drinkArray[Math.floor (Math.random() * drinkArray.length)];
    customer.innerText = "🙂"
    wordBubble.innerText = "Hi. I'm a new customer."
    drinkRecipe.innerText =
        `Glass - ${drinkOrder.glass}
        Spirit - ${drinkOrder.spirit}
        Mixer - ${drinkOrder.mixer}
        Garnish - ${drinkOrder.garnish}`;
    drink.innerText = ""; //reset drink ingredients list
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
tipJar.innerText = `Tips: ${tipTotal}`;
const takeTip = () => {
    tipTotal += 1;
    tipJar.innerText = `Tips: ${tipTotal}`;
}


// add a price value to each drink

// "Get Recipe" button that shows the current drink order as a drop-down menu