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
const glassArray = ['Shot', 'Highball'];
const spiritArray = ['Rum', 'Gin'];
const mixerArray = ['Coke', 'Tonic'];

let drinkOrder = drinkArray[Math.floor (Math.random() * drinkArray.length)];
let newDrink = {};

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

takeOrder = () => {
    console.log(`I want a ${drinkOrder.name}.`);
}

serveDrink = () => {
    console.log(newDrink);
    if (newDrink.glass === drinkOrder.glass && newDrink.spirit === drinkOrder.spirit && newDrink.mixer === drinkOrder.mixer) {
        console.log("Thanks! Here's your tip!")
        drinkOrder = drinkArray[Math.floor (Math.random() * drinkArray.length)];
        newDrink = {};
    } else {
        console.log("You got my drink wrong. Try again.")
        newDrink = {};
    }
}

//Optional feature: 'Get a Hint' button. Lists the attributes of the drinkOrder.
