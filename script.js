function predictDisease() {

    let symptoms = [];

    document.querySelectorAll(
        '.symptoms input[type="checkbox"]:checked'
    ).forEach(function (checkbox) {
        symptoms.push(checkbox.value);
    });

    let result = document.getElementById("result");

    if (symptoms.length === 0) {
        result.innerHTML = "Please select at least one symptom.";
        return;
    }

    let disease = "General illness";

    // Simple rule-based prediction
    if (
        symptoms.includes("fever") &&
        symptoms.includes("cough") &&
        symptoms.includes("bodypain")
    ) {
        disease = "Possible Flu";
    }

    else if (
        symptoms.includes("cold") &&
        symptoms.includes("cough") &&
        symptoms.includes("sorethroat")
    ) {
        disease = "Possible Common Cold";
    }

    else if (
        symptoms.includes("stomachpain") &&
        symptoms.includes("vomiting") &&
        symptoms.includes("diarrhea")
    ) {
        disease = "Possible Gastrointestinal Infection";
    }

    else if (
        symptoms.includes("headache") &&
        symptoms.includes("fever") &&
        symptoms.includes("fatigue")
    ) {
        disease = "Possible Viral Infection";
    }

    else if (
        symptoms.includes("fever") &&
        symptoms.includes("headache")
    ) {
        disease = "Possible Fever-related Illness";
    }

    result.innerHTML =
        "Possible Condition: <br><br>🩺 " + disease;
}