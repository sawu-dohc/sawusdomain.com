// variables
const effectiveDate_Field = document.getElementById("effective-date_Field");
const dob_Field = document.getElementById("dob_Field");
const age_Field = document.getElementById("age_Field");
const annualContribution_Field1 = document.getElementById("annual-contribution_Field1");
const signature_Field = document.getElementById("signature_Field");
const signatureDate_Field = document.getElementById("signature-date_Field");
const remainingPaychecks_Field = document.getElementById("remaining-paychecks_Field");
const perPaycheckContribution_Field = document.getElementById("per-paycheck-contribution_Field"); 

// on dom content loaded, prefill fields and attach event listeners
document.addEventListener("DOMContentLoaded", function () {
    prefillSignatureDate(); // prefill signature date when the page loads
    prefillRemainingPaychecks(); // prefill remaining paychecks when the page loads

    // attach blur event listeners
    dob_Field.addEventListener("blur", validateAgeOnBlur); // validate age on blur
    annualContribution_Field1.addEventListener("blur", calculatePerPaycheckContribution); // calculate per paycheck on annual contribution blur
});

// prefill today's date in the signature date field
function prefillSignatureDate() {
    const today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0'); // pad month with leading zero
    let day = String(today.getDate()).padStart(2, '0'); // pad day with leading zero

    const formattedDate = `${year}-${month}-${day}`;
    signatureDate_Field.value = formattedDate;
}

// prefill remaining paychecks based on the current date
function prefillRemainingPaychecks() {
    const today = new Date();
    const yearEnd = new Date(today.getFullYear(), 11, 31); // december 31st of the current year
    const daysRemaining = Math.ceil((yearEnd - today) / (1000 * 60 * 60 * 24)); // days left in the year
    const remainingPaychecks = Math.ceil(daysRemaining / 14); // assuming biweekly pay
    remainingPaychecks_Field.value = remainingPaychecks; // prefill the remaining paychecks field
}

// validate date of birth and prefill age on blur
function validateAgeOnBlur() {
    const dob_DateObject = new Date(dob_Field.value);
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18); // minimum age 18 validation

    if (dob_DateObject > today) {
        alert("you must be 18 years or older.");
        dob_Field.value = "";
        age_Field.value = ""; 
        return;
    }

    const age = calculateAge(dob_DateObject);
    if (age >= 18 && age <= 120) {
        age_Field.value = age;
    } else {
        alert("age must be between 18 and 120.");
        age_Field.value = ""; // clear the age field if invalid
    }
}

// helper function to calculate age based on date of birth
function calculateAge(dob_DateObject) {
    const today = new Date();
    let age = today.getFullYear() - dob_DateObject.getFullYear();

    if (today.getMonth() < dob_DateObject.getMonth() || (today.getMonth() === dob_DateObject.getMonth() && today.getDate() < dob_DateObject.getDate())) {
        age--;
    }

    return age;
}

// validate annual contribution on blur and trigger per paycheck calculation
annualContribution_Field1.addEventListener("blur", function () {
    const annualContribution = parseFloat(annualContribution_Field1.value);

    if (annualContribution < 1 || annualContribution > 8550) {
        alert("annual contribution must be between 1 and 8550.");
        annualContribution_Field1.value = ""; 
    } else {
        calculatePerPaycheckContribution(); 
    }
});

// calculate per-paycheck contribution based on the annual contribution and remaining paychecks
function calculatePerPaycheckContribution() {
    const annualContribution = parseFloat(annualContribution_Field1.value);
    const remainingPaychecks = parseInt(remainingPaychecks_Field.value);

    if (isNaN(annualContribution) || isNaN(remainingPaychecks) || remainingPaychecks === 0) {
        alert("invalid input for annual contribution or remaining paychecks.");
        perPaycheckContribution_Field.value = ""; // clear the per-paycheck contribution if invalid
        return;
    }

    const perPaycheckContribution = (annualContribution / remainingPaychecks).toFixed(2);
    perPaycheckContribution_Field.value = perPaycheckContribution; // update the per-paycheck contribution field
}
