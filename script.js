/*
Each drink (class) has a glass-type, ice or no ice, a number of oz for the spirit, a number of oz for the mixer, maybe a garnish, and a price.
The user clicks the glass type to select it and it appears on the staging area.
If the user clicks ice, it appears in the glass and it makes a clinking sound.
The user clicks on a spirit bottle (1 click = 1 oz) and it makes a pouring sound.
The user clicks on a mixer bottle (1 click = 1 oz) and it makes a pouring sound.
The user clicks a garnish if needed and it appears on the drink.
The user clicks the counter in front of the customer to serve the drink.
If the user got the recipe wrong, it will effect the customer's happiness level.
The customer and the drink both disappear and a tip is calculated.
The tip is a percentage depending on the price of the drink and the happiness of the customer.
The user can see the total tips and total drinks served on the nav bar.
A ratio of these two factors determines whether the user is ready for the next level.
*/
/* Even Simpler Version:
Click a button that says get order.
class Drink() {
    name:
    glass:
    ice: (boolean)
    
}
A Drink from an array is displayed.
Click a glass.
Click ice.
Click a spirit.
Click a mixer.
Click a garnish.
if(drinkServed === drinkOrdered) {
    return "Thanks!"
} else {
    return "You got my drink wrong."
};
*/