var floatMiles, floatGallons, floatMpg;
     floatMiles=parseFloat(prompt("Enter Miles Driven"));
     floatGallons=parseFloat(prompt("enter Gallons Used"));
     floatMpg=parseFloat(floatMiles/floatGallons).toFixed(2); 
alert("Miles per gallon = " + floatMpg);
     