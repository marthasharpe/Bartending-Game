// Drink menu
class Drink {
    constructor(name, glass, ingredients, garnish, price) {
        this.name = name;
        this.glass = glass;
        this.ingredients = ingredients;
        // this.spirit = spirit;
        // this.mixer = mixer;
        this.garnish = garnish;
        this.price = price;
    }
}

const ginTonic = new Drink('Gin and Tonic', 'Highball', ['Gin', 'Tonic'], 'Citrus Wedge', 4);
console.log(ginTonic);
// const scotchSoda = new Drink('Scotch and Soda', 'Highball', 'Scotch', 'Club Soda', 'Citrus Wedge', 4);
// const whiskeySour = new Drink('Whiskey Sour', 'Highball', 'Bourbon', 'Sour Mix', 'Citrus Wedge', 4);
//const ginMartini = new Drink('Gin Martini', 'Cocktail', ['Gin', 'Vermouth'], 'Olive', 8);

//Array of all drinks
const drinkArray = [ginTonic];

//supplyArray arrays
const glassArray = [
    {name: 'Old-Fashioned', image: './images/OldFashioned.png'},
    {name: 'Highball', image: './images/Highball.png'},
    {name: 'Cocktail', image: './images/Cocktail.png'},
];
const spiritArray = [
    {name: 'Vodka', image: './images/Vodka.png'},
    {name: 'Gin', image: './images/Gin.png'},
    {name: 'Scotch', image: './images/Scotch.png'},
    {name: 'Bourbon', image: './images/Bourbon.png'},
    {name: 'Rum', image: './images/Rum.png'},
    {name: 'Tequila', image: './images/Tequila.png'},
    {name: 'Triplesec', image: './images/Triple Sec.png'},
    {name: 'Vermouth', image: './images/Vermouth.png'},
];
const mixerArray = [
    {name: 'Tonic', image: './images/Tonic.png'},
    {name: 'Club Soda', image: './images/Club Soda.png'},
    {name: '7Up', image: './images/7Up.png'},
    {name: 'Coke', image: './images/7Up.png'},
    {name: 'Sour Mix', image: './images/Pineapple or Sour.png'},
    {name: 'Orange', image: './images/Orange.png'},
    {name: 'Pineapple', image: './images/Pineapple or Sour.png'},
    {name: 'Cranberry', image: './images/Cranberry.png'},    
];
const garnishArray = [
    {name: 'Olive', image: './images/olives.png'},
    {name: 'Citrus Wedge', image: './images/LemonLime.png'},
    {name: 'Cherry', image: './images/olives.png'},    
];

//initializing variables
let drinkOrder;
let newDrink = {}
let ingredientsArray = [];

//Populates HTML lists with supplies and their attributes
const populateList = (supplyArray, supplyType) => {
    supplyArray.forEach(supply => {
        const listItem = document.createElement('li');
        listItem.className = supplyType; //eg. "glass"
        listItem.id = supply.name; //eg. "Highball"

        //add image to each list item
        const itemImage = new Image();
        itemImage.src = supply.image;
        listItem.appendChild(itemImage);
        
        //add div to each list item with the name
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

recipeButton.addEventListener('click', () => {
    drinkRecipe.classList.toggle("drink-recipe");
    drinkRecipe.classList.toggle("show-recipe");
})

//default value for new customer
const newCustomer = () => {
    drinkOrder = drinkArray[Math.floor (Math.random() * drinkArray.length)];
    customer.innerText = "🙂"
    wordBubble.innerText = "Hi. I'm a new customer."
    drinkRecipe.innerText =
        `Glass - ${drinkOrder.glass}
        Ingredients - ${drinkOrder.ingredients}
        Garnish - ${drinkOrder.garnish}
        Price - $${JSON.stringify(drinkOrder.price)}`;
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
    ingredientsArray = [];
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
    //newDrink.ingredients = ingredientsArray;
    console.log(newDrink);
    console.log(ingredientsArray);
    let isMatch = checkIngredients(drinkOrder.ingredients, ingredientsArray);
    if (isMatch && newDrink.glass === drinkOrder.glass && newDrink.garnish === drinkOrder.garnish) {
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
    if (drinkOrder.price === 4) {
        tipTotal += 1;    
    } else {
        tipTotal += 2;
    }
    tipJar.innerText = `Tips: ${tipTotal}`;
}

/*New problem: drinks that have multiple mixers or multiple spirits instead of one of each.
A nested ingredients array in the Drink constructor.
Instead of this.spirit and this.mixer, it would be this.ingredients = [];
Then I would need to .push() each clicked ingredient into the array
Then loop through the ingredients in drinkOrder and newDrink to make sure they're the same.*/