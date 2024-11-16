function prefillRemainingPaychecks() {

    const remainingPaychecksField = document.getElementById("remaining-paychecks_Field");

    const today = new Date();

    const currentMonth = today.getMonth();

    const monthsRemaining = 11 - currentMonth;

    let remainingPaychecks;

    if ( today.getDate() > 14 ) {
        remainingPaychecks = remainingPaychecks + 1;
    } 
    else {
        remainingPaychecks = remainingPaychecks + 2;
    }
    remainingPaychecksField.value = remainingPaychecks;
}

document.addEventListener("DOMContentLoaded", prefillRemainingPaychecks);