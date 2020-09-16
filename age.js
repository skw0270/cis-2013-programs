var floatAge, floatDays, floatMonths, intWeeks, intFortnights;
    floatAge=parseFloat(prompt("What is your age in years?")) ;
    floatDays=parseFloat(floatAge*365.25).toFixed(2);
    floatMonths=parseFloat(floatAge*12).toFixed(2);
    intWeeks=parseInt(floatDays/7).toFixed(2);
    intFortnights =parseInt(floatDays/14).toFixed(2);
if(isNaN(floatAge)) {
    alert("You have entered an invalid response, and an error has occured. Please Enter a Number.");
    }
else
    alert("Your age in days is " + floatDays + ", your age in months is " + floatMonths + ", your age in weeks is " + intWeeks + ", and your age in fortnights is " + intFortnights +".");

