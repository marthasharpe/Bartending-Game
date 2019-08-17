// Drink menu
class Drink {
    constructor(name, glass, ingredients, price, garnish) {
        this.name = name;
        this.glass = glass;
        this.ingredients = ingredients;
        this.garnish = garnish;
        this.price = price;
    }
}

const scotchRocks = new Drink('Scotch on the Rocks', 'Rocks', ['Scotch'], 8);
const bourbonRocks = new Drink('Bourbon on the Rocks', 'Rocks', ['Bourbon'], 8);
const ginTonic = new Drink('Gin and Tonic', 'Highball', ['Gin', 'Tonic'], 4, 'Lime');
const scotchSoda = new Drink('Scotch and Soda', 'Highball', ['Scotch', 'Club Soda'], 4, 'Lemon');
const rumCoke = new Drink('Rum and Coke', 'Highball', ['Rum', 'Coke'], 4, 'Cherry');
const capeCod = new Drink('Cape Cod', 'Highball', ['Vodka', 'Cranberry'], 4, 'Lime');
const screwdriver = new Drink('Screwdriver', 'Highball', ['Vodka', 'O.J.'], 4, 'Orange');
const tequilaSunrise = new Drink('Tequila Sunrise', 'Highball', ['Tequila', 'O.J.'], 4, 'Cherry');
const whiskeySour = new Drink('Whiskey Sour', 'Highball', ['Bourbon', 'Sour Mix'], 4, 'Cherry');
const longIsland = new Drink('Long Island Iced Tea', 'Highball', ['Vodka', 'Rum', 'Gin', 'Tequila', 'Triplesec', 'Coke', 'Sour Mix'], 8, 'Lemon');
const ginMartini = new Drink('Gin Martini', 'Cocktail', ['Gin', 'Vermouth'], 8, 'Olive');
const ginMartiniRocks = new Drink('Gin Martini', 'Rocks', ['Gin', 'Vermouth'], 8, 'Olive');
const manhattan = new Drink('Manhattan', 'Cocktail', ['Bourbon', 'Vermouth'], 8, 'Cherry');
const cosmopolitan = new Drink('Cosmopolitan', 'Cocktail', ['Vodka', 'Triplesec', 'Cranberry', 'Sour Mix'], 8, 'Lemon');
const margarita = new Drink('Margarita', 'Cocktail', ['Tequila', 'Triplesec', 'Sour Mix'], 8,'Lime');

//Array of possible drinks
const drinkArray = [ginTonic, ginMartini, scotchSoda, rumCoke, whiskeySour, manhattan, capeCod, screwdriver, tequilaSunrise, longIsland, cosmopolitan, margarita, scotchRocks, bourbonRocks, ginMartiniRocks];

//arrays of supplies
const glassArray = [
    {name: 'Shot', image: './Images/OldFashioned.png'}, 
    {name: 'Rocks', image: './Images/OldFashioned.png'},
    {name: 'Highball', image: './Images/Highball.png'},
    {name: 'Cocktail', image: './Images/Cocktail.png'},
];
const spiritArray = [
    {name: 'Vodka', image: './Images/Vodka.png'},
    {name: 'Gin', image: './Images/Gin.png'},
    {name: 'Scotch', image: './Images/Scotch.png'},
    {name: 'Bourbon', image: './Images/Bourbon.png'},
    {name: 'Rum', image: './Images/Rum.png'},
    {name: 'Tequila', image: './Images/Tequila.png'},
    {name: 'Triplesec', image: './Images/Triple Sec.png'},
    {name: 'Vermouth', image: './Images/Vermouth.png'},
];
const mixerArray = [
    {name: 'Tonic', image: './Images/Tonic.png'},
    {name: 'Club Soda', image: './Images/Club Soda.png'},
    {name: '7Up', image: './Images/7Up.png'},
    {name: 'Coke', image: './Images/Coke.png'},
    {name: 'Sour Mix', image: './Images/Pineapple or Sour.png'},
    {name: 'O.J.', image: './Images/Orange.png'},
    {name: 'Pineapple', image: './Images/Pineapple or Sour.png'},
    {name: 'Cranberry', image: './Images/Cranberry.png'},    
];
const garnishArray = [
    {name: 'Olive', image: './Images/olives.png'},
    {name: 'Orange', image: './Images/OrangeSlice.png'},
    {name: 'Lemon', image: './Images/LemonSlice.png'},
    {name: 'Lime', image: './Images/LimeSlice.png'},
    {name: 'Cherry', image: './Images/Cherries.png'},    
];

//initializing variables
let drinkOrder;
let newDrink = {}
let ingredientsArray = [];

//Populate HTML lists with supplies and their attributes
const populateList = (supplyArray, supplyType) => {
    supplyArray.forEach(supply => {
        const listItem = document.createElement('li');
        listItem.className = supplyType; //eg. "glass"
        listItem.id = supply.name; //eg. "Highball"

        //add image to each list item
        const itemImage = new Image();
        itemImage.src = supply.image;
        listItem.appendChild(itemImage);
        
        //add label to each list item
        const itemLabel = document.createElement('div');
        itemLabel.class = "label";
        itemLabel.innerText = supply.name;
        listItem.appendChild(itemLabel);

        const itemParent = document.getElementsByClassName(`${supplyType}-selection`)[0];
        itemParent.appendChild(listItem);
        listItem.addEventListener('click', () => {
            if (supplyType === 'spirit' || supplyType === 'mixer') {
                ingredientsArray.push(supply.name);
            } else {
                newDrink[supplyType] = supply.name;
            }
            //display supplies added in new drink
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
let newDrinkButton = document.getElementsByClassName("new-drink-button")[0];

drinkRecipe.innerText = `1) Click customer to take order.
2) Add ingredients.
3) Click customer to serve drink.`
//dropdown menu
recipeButton.addEventListener('click', () => {
    drinkRecipe.classList.toggle("drink-recipe");
    drinkRecipe.classList.toggle("show-recipe");
})

    //default value for new customer
const newCustomer = () => {
    customer.innerText = "🤔"
};
setTimeout(newCustomer, 1000);

//Clear newDrink ingredients to start over
const clearDrink = () => {
    newDrink = {};
    ingredientsArray = [];
    drink.innerText = "";
}
newDrinkButton.addEventListener('click', clearDrink);

// first click takes order, second click serves drink, third click new customer
//let count = 0;
customer.addEventListener("click", () => {
    if (customer.innerText === "🤔") {
        takeOrder();
    } else if (customer.innerText === "🙂" || customer.innerText === "😠") {
        serveDrink();
    } else if (customer.innerText === "😋") {
        if (drinkOrder.price < 5) {
            wordBubble.innerText = "$1";
        } else {
            wordBubble.innerText = "$2";
        }
        clearDrink();
        customer.innerText = "💰";
    } else if (customer.innerText === "💰") {
        customer.innerText = ""
        wordBubble.classList.toggle("show-bubble");
        wordBubble.classList.toggle("word-bubble");
        takeTip();
        setTimeout(newCustomer, 1500);
    }
});

const takeOrder = () => {
    drinkOrder = drinkArray[Math.floor (Math.random() * drinkArray.length)];
    wordBubble.classList.toggle("word-bubble");
    wordBubble.classList.toggle("show-bubble");
    wordBubble.innerText = `I want a ${drinkOrder.name}.`
    customer.innerText = "🙂"
    drinkRecipe.innerText =
        `---NAME---
        ${drinkOrder.name}

        ---GLASS---
        ${drinkOrder.glass}

        ---INGREDIENTS----
        ${drinkOrder.ingredients.join(", ")}

        ---GARNISH---
        ${drinkOrder.garnish ? drinkOrder.garnish : 'none'}
        
        ---PRICE---
        $${drinkOrder.price}`;
}

const checkIngredients = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i=0; i<arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            return false;
        }
    }
    return true;
}

const serveDrink = () => {
    let isMatch = checkIngredients(drinkOrder.ingredients, ingredientsArray);
    if (isMatch && newDrink.glass === drinkOrder.glass && newDrink.garnish === drinkOrder.garnish) {
        customer.innerText = "😋"
        wordBubble.innerText = "Thanks! Here's your tip!"
    } else {
        customer.innerText = "😠"
        wordBubble.innerText = "You got my drink wrong."
    }
}

let tipTotal = 0;
tipJar.innerText = `Tips: $${tipTotal}`;
const takeTip = () => {
    if (drinkOrder.price === 4) {
        tipTotal += 1;    
    } else {
        tipTotal += 2;
    }
    tipJar.innerText = `Tips: $${tipTotal}`;
}