document.addEventListener("DOMContentLoaded", function () {
    const signatureDateField = document.getElementById("signature-date_Field");

    function prefillSignatureDate() {
        signatureDateField.value = new Date().toISOString().split("T")[0];
    }

    prefillSignatureDate();
});
