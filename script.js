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
const glassArray = ['Shot', 'Highball'];
const spiritArray = ['Rum', 'Gin'];
const mixerArray = ['Coke', 'Tonic'];

let drinkOrder;
let newDrink = {}

//Populates HTML lists with supplies and their attributes
const populateList = (supplyStock, supplyDiv, supplyType) => {
    supplyStock.forEach(supply => {
        const listItem = document.createElement('li');
        listItem.innerText = supply;
        listItem.id = supply;
        listItem.className = supplyType;
        const itemParent = document.getElementsByClassName(supplyDiv)[0];
        itemParent.appendChild(listItem);
        listItem.addEventListener('click', () => {
            newDrink[supplyType] = supply;
        })
    })
}
populateList(glassArray, 'glass-selection', 'glass');
populateList(spiritArray, 'spirit-selection', 'spirit');
populateList(mixerArray, 'mixer-selection', 'mixer');


//Event listeners and functions for all the buttons

let newCustomer = document.getElementById("new-customer");
newCustomer.addEventListener("click", () => {
    drinkOrder = drinkArray[Math.floor (Math.random() * drinkArray.length)];
    newDrink = {}});

let takeOrder = document.getElementById("take-order");
takeOrder.addEventListener("click", () => {
    takeOrder.innerHTML = `I want a ${drinkOrder.name}.`});

let serveDrink = document.getElementById("serve-drink");
serveDrink.addEventListener("click", () => {
    if (newDrink.glass === drinkOrder.glass && newDrink.spirit === drinkOrder.spirit && newDrink.mixer === drinkOrder.mixer) {
        serveDrink.innerHTML = "Thanks! Here's your tip!"
    } else {
        serveDrink.innerHTML = "You got my drink wrong. Try again."
    }
  });

let takeMoney = document.getElementById("take-money");
  //need to add a price value to each drink and write a function that adds it to the tip jar

//Optional feature: 'Get a Hint' button. Lists the attributes of the drinkOrder.
// need a place that shows what you've added to newDrink