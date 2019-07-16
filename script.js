// Drinks
const shotRum = { 
    name: 'shot of Rum',
    glass: 'Shot', 
    spirit: 'Rum',
};
const shotGin = {
    name: 'shot of Gin',
    glass: 'Shot',
    spirit: 'Gin',
}

const drinkArray = [shotRum, shotGin];
const glassArray = ['Shot']
const spiritArray = ['Rum', 'Gin'];

let drinkOrder = {};

function takeOrder() {
    //Generate random drinkOrder from drinkArray onClick.
    drinkOrder = drinkArray[Math.floor (Math.random() * drinkArray.length)];
    console.log(`I want a ${drinkOrder.name}.`)
    // can change the text on the button or add a popup
}

let glassName = glassArray[0];
let glassItem = document.createElement('li');
glassItem.innerText = glassName;
glassItem.className = 'glass'; //Each <li> has class="glass"
document.getElementsByClassName('glass-selection')[0].appendChild(glassItem);
glassItem.addEventListener('click', () => {
    drinkServed.glass = glassName;
});

//Dynamically populate HTML unordered list with class="spirit-selection" with list items.
for(let i = 0; i < spiritArray.length; i++) {
    let spiritName = spiritArray[i];
    let spiritItem = document.createElement('li');
    spiritItem.innerText = spiritName;
    spiritItem.className = 'spirit'; //Each <li> has class="spirit" 
    //Puts <li> elements in <ul> with class="spirit-selection"
    document.getElementsByClassName('spirit-selection')[0].appendChild(spiritItem);
    spiritItem.addEventListener('click', () => {
        drinkServed.spirit = spiritName;
    });
}

let drinkServed = {};

function serveDrink() {
    if (drinkServed.glass === drinkOrder.glass && drinkServed.spirit === drinkOrder.spirit) {
        console.log("Thanks! Keep the change.")
    } else {
        console.log("You got my drink wrong.")
    }
    console.log(drinkServed);
};

//Optional feature: 'Get a Hint' button. Lists the attributes of the drinkOrder.
