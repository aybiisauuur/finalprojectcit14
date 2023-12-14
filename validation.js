const nameInput = document.getElementById("FullNameInput"); 
const ageInp = document.getElementById("ageInput"); 
const emailInp = document.getElementById("emailInput");
const dobInp = document.getElementById("dobInput");

nameInput.addEventListener('keyup', function() {
	validateName(this.value);
});

ageInp.addEventListener('keyup', function() {
	validateAge(this.value);
});

emailInp.addEventListener('keyup', function() {
	validateEmail(this.value);
});

dobInp.addEventListener('change',function() {
	validateDOB(this.value);
});

function updateProgressBar () {
	const inputs = document.querySelectorAll('.form-control');
	const progressBar = document.getElementById('formProgress');
	const validInputs = Array.from(inputs).filter(input => input.classList.contains('is-valid'));
	const progress = (validInputs.length / inputs.length)*100;
    progressBar.style.width = progress + '%';
	progressBar.innerText = progress + '%';
}


function validateName(e){
	
	var isValid = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(e.trim());

    if (isValid) {
        nameInput.classList.remove("is-invalid");
        nameInput.classList.add("is-valid");
    } else {
        nameInput.classList.add("is-invalid");
        nameInput.classList.remove("is-valid");
    }

    updateProgressBar();
}
	

function validateAge (e) {

    var test = /[0-9]/.test(e);

    if (e.trim() === ""){
	    ageInp.classList.add("is-invalid");
	} else {
		ageInp.classList.remove("is-invalid");
		ageInp.classList.add("is-valid");
	}

    if (test){
		ageInp.classList.add("is-valid");
	} else {
		ageInp.classList.remove("is-valid");
		ageInp.classList.add("is-invalid");
	}

    updateProgressBar()
}

function validateEmail (e) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (e.trim() === ""){
	    emailInp.classList.add("is-invalid");
	} else {
		emailInp.classList.remove("is-invalid");
		emailInp.classList.add("is-valid");
	}

    if (e.match(validRegex)) {
        emailInp.classList.add("is-valid");
    } else {
        emailInp.classList.remove("is-valid");
		emailInp.classList.add("is-invalid");
    }

    updateProgressBar()
}

function validateDOB(e) {
    if (e.trim() === ""){
		dobInp.classList.remove("is-valid");
	    dobInp.classList.add("is-invalid");
	} else {
		dobInp.classList.remove("is-invalid");
		dobInp.classList.add("is-valid");
	}
    updateProgressBar()
}