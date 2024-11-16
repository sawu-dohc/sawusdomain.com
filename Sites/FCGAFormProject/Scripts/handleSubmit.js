function handleSubmit(event, fields, sqlKeywords) {
    event.preventDefault();
    if (
        !validateAge(fields.dobField, fields.ageField) ||
        !validateAnnualContribution(fields.annualContributionField1) ||
        !calculatePerPaycheckContribution(fields.annualContributionField1, fields.remainingPaychecksField, fields.perPaycheckContributionField) ||
        !validateSQLInjection(document.querySelectorAll("input, textarea"))
    ) {
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
