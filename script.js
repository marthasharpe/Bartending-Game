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

const drinkArray = [shotRum, shotGin];
const glassArray = ['Shot'];
const spiritArray = ['Rum', 'Gin'];

let drinkOrder = {};
let newDrink = {};

function takeOrder() {
    //Generate random drinkOrder from drinkArray onClick.
    drinkOrder = drinkArray[Math.floor (Math.random() * drinkArray.length)];
    console.log(`I want a ${drinkOrder.name}.`);
};

function serveDrink() {
    if (newDrink.glass === drinkOrder.glass && newDrink.spirit === drinkOrder.spirit) {
        console.log("Thanks! Keep the change.")
        drinkOrder = {};
        newDrink = {};
    } else {
        console.log("You got my drink wrong.")
        newDrink = {};
    }
    console.log(newDrink);
    console.log(drinkOrder);
};

for(let i = 0; i < glassArray.length; i++) {
    let glassName = glassArray[i];
    let glassItem = document.createElement('li');
    glassItem.innerText = glassName;
    glassItem.className = 'glass'; //Each <li> has class="glass"
    document.getElementsByClassName('glass-selection')[0].appendChild(glassItem);
    glassItem.addEventListener('click', () => {
        newDrink.glass = glassName;
    });
};

//Dynamically populate HTML unordered list with class="spirit-selection" with list items.
for(let i = 0; i < spiritArray.length; i++) {
    let spiritName = spiritArray[i];
    let spiritItem = document.createElement('li');
    spiritItem.innerText = spiritName;
    spiritItem.className = 'spirit'; //Each <li> has class="spirit" 
    document.getElementsByClassName('spirit-selection')[0].appendChild(spiritItem);
    spiritItem.addEventListener('click', () => {
        newDrink.spirit = spiritName;
    });
};

//Optional feature: 'Get a Hint' button. Lists the attributes of the drinkOrder.
