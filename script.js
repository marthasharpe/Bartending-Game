// Drinks
const rumCoke = { 
    name: 'Rum and Coke', 
    spirit: 'rum',
};
const ginTonic = {
    name: 'Gin and Tonic',
    spirit: 'gin',
}

const drinkArray = [rumCoke, ginTonic];
const spiritArray = ['rum', 'gin'];
const drinkOrder = drinkArray[Math.floor (Math.random() * drinkArray.length)];

function takeOrder() {
    console.log(`I want a ${drinkOrder.name}.`)
    // can change the text on the button or add a popup
}

for(let i = 0; i < spiritArray.length; i++) {
    let spiritName = spiritArray[i];
    let spiritItem = document.createElement('li');
    spiritItem.innerText = spiritName;
    spiritItem.className = 'spirit';
    document.getElementsByClassName('spirit-selection')[0].appendChild(spiritItem);
    spiritItem.addEventListener('click', () => {
        drinkServed.spirit = spiritName;
        console.log(drinkServed);
    });
}

let drinkServed = {
    name: drinkOrder.name,
    spirit: '',
};

console.log(drinkServed);
function serveDrink() {
    if (drinkServed.spirit === drinkOrder.spirit) {
        console.log("Thanks! Keep the change.")
    } else {
        console.log("You got my drink wrong.")
    }
};

//Optional feature: 'Get a Hint' button. Lists the attributes of the drinkOrder.
