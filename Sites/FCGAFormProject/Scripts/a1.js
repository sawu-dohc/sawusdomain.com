document.addEventListener("DOMContentLoaded", function () {
    // Array of SQL keywords to check


    // Field Selection
    const fields = {
        beginDeductionButton: document.getElementById("begin-deduction_Button"),
        changeDeductionButton: document.getElementById("change-deduction_Button"),
        stopDeductionButton: document.getElementById("stop-deduction_Button"),
        effectiveDateField: document.getElementById("effective-date_Field"),
        nameField: document.getElementById("name_Field"),
        phoneField: document.getElementById("phone_Field"),
        addressField: document.getElementById("address_Field"),
        dobField: document.getElementById("dob_Field"),
        emailField: document.getElementById("email_Field"),
        ageField: document.getElementById("age_Field"),
        employeeIdField: document.getElementById("employee-id_Field"),
        annualContributionField1: document.getElementById("annual-contribution_Field1"),
        signatureField: document.getElementById("signature_Field"),
        signatureDateField: document.getElementById("signature-date_Field"),
        annualContributionField2: document.getElementById("annual-contribution_Field2"),
        remainingPaychecksField: document.getElementById("remaining-paychecks_Field"),
        perPaycheckContributionField: document.getElementById("per-paycheck-contribution_Field"),
        submitButton: document.getElementById("submit-Button")
    };

    // Prefill Functions
    function prefillSignatureDate() {
        fields.signatureDateField.value = new Date().toISOString().split('T')[0];
    }

    function prefillRemainingPaychecks() {
        const today = new Date();
        const monthsRemaining = 11 - today.getMonth();
        let remainingPaychecks = monthsRemaining * 2 + (today.getDate() > 14 ? 1 : 2);
        fields.remainingPaychecksField.value = remainingPaychecks;
    }

    // Validation Functions
    function calculateAge(dob) {
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) age--;
        return age;
    }

    function validateAge() {
        const dob = new Date(fields.dobField.value);
        const age = calculateAge(dob);
        if (age < 18 || age > 120) {
            alert("Age must be between 18 and 120.");
            fields.dobField.value = "";
            fields.ageField.value = "";
            return false;
        }
        fields.ageField.value = age;
        return true;
    }

    function validateAnnualContribution() {
        const annualContribution = parseFloat(fields.annualContributionField1.value);
        if (isNaN(annualContribution) || annualContribution < 1 || annualContribution > 8550) {
            alert("Annual contribution must be between 1 and 8550.");
            fields.annualContributionField1.value = "";
            return false;
        }
        return true;
    }

    function calculatePerPaycheckContribution() {
        const annualContribution = parseFloat(fields.annualContributionField1.value);
        const remainingPaychecks = parseInt(fields.remainingPaychecksField.value);
        if (isNaN(annualContribution) || isNaN(remainingPaychecks) || remainingPaychecks === 0) {
            alert("Invalid input for annual contribution or remaining paychecks.");
            fields.perPaycheckContributionField.value = "";
            return false;
        }
        fields.perPaycheckContributionField.value = (annualContribution / remainingPaychecks).toFixed(2);
        return true;
    }

    function validateFormForSQLInjection() {
        const formFields = document.querySelectorAll("input, textarea");
        for (const field of formFields) {
            const value = field.value.toUpperCase();
            if (sqlKeywords.some(keyword => value.includes(keyword))) {
                alert("Potential SQL injection detected. Please remove any SQL keywords from your input.");
                return false;
            }
        }
        return true;
    }

    // Submit Handler
    function handleSubmit(event) {
        event.preventDefault();
        if (!validateAge() || !validateAnnualContribution() || !calculatePerPaycheckContribution() || !validateFormForSQLInjection()) {
            return;
        }

        const formData = {
            deductionBegin: fields.beginDeductionButton?.checked || false,
            deductionChange: fields.changeDeductionButton?.checked || false,
            deductionStop: fields.stopDeductionButton?.checked || false,
            effectiveDate: fields.effectiveDateField?.value || "",
            name: fields.nameField?.value || "",
            phone: fields.phoneField?.value || "",
            address: fields.addressField?.value || "",
            dob: fields.dobField?.value || "",
            email: fields.emailField?.value || "",
            age: fields.ageField?.value || "",
            employeeId: fields.employeeIdField?.value || "",
            annualContribution: fields.annualContributionField1?.value || "",
            signature: fields.signatureField?.value || "",
            signatureDate: fields.signatureDateField?.value || "",
            annualContributionOffice: fields.annualContributionField2?.value || "",
            remainingPaychecks: fields.remainingPaychecksField?.value || "",
            perPaycheckContribution: fields.perPaycheckContributionField?.value || ""
        };

        console.log("Form Data in JSON:", JSON.stringify(formData, null, 2));
    }

    // Event Listeners
    fields.dobField.addEventListener("blur", validateAge);
    fields.annualContributionField1.addEventListener("blur", () => {
        if (validateAnnualContribution()) calculatePerPaycheckContribution();
    });
    fields.submitButton.addEventListener("click", handleSubmit);

    // Prefill Fields on Load
    prefillSignatureDate();
    prefillRemainingPaychecks();
});
