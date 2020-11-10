//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
};
// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	if (intCount < 2 || intCount > 100 || isNaN(intCount)) {
        alert("ERROR; Please enter a NUMBER that is between 2 and 100"); //error message if the user provided value is not a valid input.
        $("total_fib").value = ""; //resets the textbox value to a blank so the user can provide a valid input.
        $("output").value = ""; //resets output box, incase the user has already run a valid calculation.
    } else {
        var i=0;  // sets the first number in the Fibonacci series to 0
        var j=1;  //sets the second number in the Fibonacci series to 1
        var k;    //k is calculated by adding i+j and represents the next Fibonacci number
        var stringOutput = "0 1 ";//initialize the Fibonacci series output to include the first two numbers
        if (intCount === 2) { //if statement that considers that the user chose 2. In this case, no calculation is necessary, since the intial value of stringOutput contained the first two numbers in sequence.
            stringOutput = "0 1 ";
            $("output").value = stringOutput; //pushes output to DOM.
        } else {
            //loop to find each Fibonacci number. The loop repeats until intCount reaches two.
            while (intCount > 2) {
                k = i + j; //adds the previous two fibonacci numbers to find the next in the series.
                i = j; //sets i equal to j so that the k function finds the correct number on each iteration of the loop. Otherwise, the program would print the same numbers repeatedly.
                j = k; //sets j equal to k so that the k function finds the correct number on each iteration of the loop. Otherwise, the program would print the same numbers repeatedly.
                stringOutput = stringOutput + " " + k + " "; //sets stringOutput equal to the initial value plus each Fibonacci number generated, including spaces for readability.
                $("output").value = stringOutput; //pushes the value of stringOutput to the DOM.
                intCount--; //decrements intCount so that the loop doesn't last forever.
                    }
                }
            }   

}; 

window.onload = function () //function that runs when the window loads. Blanks the output and text boxes.
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
};

