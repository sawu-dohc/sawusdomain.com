function validateAnnualContribution(annualContributionField1) {
    const annualContribution = parseFloat(annualContributionField1.value);
    if (isNaN(annualContribution) || annualContribution < 1 || annualContribution > 8550) {
        alert("Annual contribution must be between 1 and 8550.");
        annualContributionField1.value = "";
        return false;
    }
    return true;
}
