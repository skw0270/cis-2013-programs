

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));

floatMidPts = parseFloat(prompt("Please enter Midterm grade (0-35)"));

floatFinPts = parseFloat(prompt("Please enter Final Exam Grade (0-35)"));

floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);

intGradeOption = parseInt(prompt("are you taking the course P/F? Enter 1 for yes, or 2 for no."));

if (intGradeOption===1) {
    if(floatTotalPts >= 80) {
        alert("Pass");
    } else {
        alert("Fail");
    }
        
    } else {
        if (floatTotalPts >= 90) {
            stringFinalGrade = "A";
        } else if (floatTotalPts >= 80 && floatTotalPts < 90) {
            stringFinalGrade = "B";
        } else if (floatTotalPts >= 70 && floatTotalPts <80) {
            stringFinalGrade = "C";
        } else if (floatTotalPts >= 60 && floatTotalPts <70) {
            stringFinalGrade = "D";
        } else {
            stringFinalGrade = "F";
}
    alert("Your final grade is: " +stringFinalGrade);
    }
    
    
  



