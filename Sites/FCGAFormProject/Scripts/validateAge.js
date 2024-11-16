function validateAge(dobField, ageField) {
    const today = new Date();
    const dob = new Date(dobField.value);
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    if (age < 18 || age > 120) {
        alert("Age must be between 18 and 120.");
        dobField.value = "";
        ageField.value = "";
        return false;
    }
    ageField.value = age;
    return true;
}
