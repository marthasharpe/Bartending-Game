// Drink menu

const shotRum = { 
    name: 'shot of Rum',
    glass: 'Shot', 
    spirit: 'Rum',
};

const shotGin = {
    name: 'shot of Gin',
    glass: 'Shot',
    spirit: 'Gin',
};

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

takeOrder = () => {
    console.log(`I want a ${drinkOrder.name}.`);
};

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
};

const populateList = (supplyStock, supplyDiv, supplyType) => {
    supplyStock.forEach(supply => {
        const listItem = document.createElement('li');
        listItem.innerText = supply;
        listItem.id = supply;
        listItem.className = supplyType;
        const itemParent = document.getElementsByClassName(supplyDiv)[0];
        itemParent.appendChild(listItem);

        console.log(itemParent);
    })
}
populateList(glassArray, 'glass-selection', 'glass');

// for(let i = 0; i < glassArray.length; i++) {
//     let glassName = glassArray[i];
//     let glassItem = document.createElement('li');
//     glassItem.innerText = glassName;
//     glassItem.className = 'glass';
//     document.getElementsByClassName('glass-selection')[0].appendChild(glassItem);
//     glassItem.addEventListener('click', () => {
//         newDrink.glass = glassName;
//     });
// };

for(let i = 0; i < spiritArray.length; i++) {
    let spiritName = spiritArray[i];
    let spiritItem = document.createElement('li');
    spiritItem.innerText = spiritName;
    spiritItem.className = 'spirit';
    document.getElementsByClassName('spirit-selection')[0].appendChild(spiritItem);
    spiritItem.addEventListener('click', () => {
        newDrink.spirit = spiritName;
    });
};

for(let i = 0; i < mixerArray.length; i++) {
    let mixerName = mixerArray[i];
    let mixerItem = document.createElement('li');
    mixerItem.innerText = mixerName;
    mixerItem.className = 'mixer';
    document.getElementsByClassName('mixer-selection')[0].appendChild(mixerItem);
    mixerItem.addEventListener('click', () => {
        newDrink.mixer = mixerName;
    });
};

//Optional feature: 'Get a Hint' button. Lists the attributes of the drinkOrder.
