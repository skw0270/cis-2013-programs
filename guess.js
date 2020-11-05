/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;

//Obtain intMin from the user, and validate that it is a number that is greater than or equal to zero.
intMin = parseInt(prompt("What is your lowest number?"));
while (isNaN(intMin) === true || intMin <0) {
    alert("PLEASE ENTER A NUMBER AND ENSURE IT IS GREATER THAN ZERO");
    intMin = prompt("What is your lowest number?");
} 


//Obtain intMax from the user, and validate that it is a number that is greater than intMin + 2, because otherwise, the game would be boring.
intMax = parseInt(prompt("What is your highest number?"));
while (isNaN(intMax) === true || intMax <= intMin+2) {
   alert("PLEASE ENTER A NUMBER AND ENSURE THAT IT IS MORE THAN 2 PLUS YOUR LOWEST NUMBER");
   intMax = prompt("What is your highest number?");
}

/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// set the loop counter equal to 1.
intCount = 1;
//Begin the loop
while (intGuess != intRandom) {
   //Obtain intGuess value through a prompt.
   intGuess = parseInt(prompt("Enter your Guess"));
    //If statement that assumes intGuess is smaller than randomly generated number.
    if (intGuess < intRandom) {
        //validates that intGuess is between the values previously entered by the user.
        if (intGuess >= intMin && intGuess <= intMax) {
            alert("Guess is too low");
        //else statement that pushes an alert when the entered value is not between the values previously entered.
        } else {
            alert("Please enter a value that is between your minimum and maximum numbers");
        }    
    //Else if statement that assumes intGuess is greater than intRandom.
    } else if (intGuess > intRandom) {
        //validates that intGuess is between the values previously entered by the user.
        if (intGuess >= intMin && intGuess <= intMax) {
            alert("Guess is too high");
        //else statement that pushes an alert when the entered value is not between the values previously entered.
        } else {
             alert("Please enter a value that is between your minimum and maximum numbers");
        }
    }
    //increment the counter by 1 for each time the user fails to correctly guess the randomly generated number.
    intCount++;
}
// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");

