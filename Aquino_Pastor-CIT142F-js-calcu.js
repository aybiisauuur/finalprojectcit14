function showGradeInputs() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var section = document.getElementById('section').value;
    var ylvl = document.getElementById('ylvl').value;

    if (fname && lname && section && ylvl >= 1 && ylvl <= 3) {
        document.getElementById('gradeInputs').style.display = 'block';
    } else {
        alert('Please fill in all required fields and ensure that your year level is valid');
    }
}
function calculateAverage() {
    var grade1 = parseFloat(document.getElementById('Subject1').value);
    var grade2 = parseFloat(document.getElementById('Subject2').value);
    var grade3 = parseFloat(document.getElementById('Subject3').value);
    var grade4 = parseFloat(document.getElementById('Subject4').value);
    var grade5 = parseFloat(document.getElementById('Subject5').value);

    var total = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;

    var display = document.getElementById('outputDiv');

    if (!isNaN(total)) {
        display.innerHTML = 'Your Average Grade Is: ' + total.toFixed(2);

        if (total <= 100 && total > 90) {
            display.innerHTML += "<br>With Honors";
		} else if (total <= 90 && total >= 75) {
			display.innerHTML += "<br>Passed";
        } else {
            display.innerHTML += "<br>Failed";
        }
    } else {
        alert('Please enter valid numeric grades.');
    }
}