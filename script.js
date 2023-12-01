function updateLearningOutcomes() {
    var subject = document.getElementById("subject").value;
    var assessmentType = document.getElementById("assessmentType").value;
    var outcomeList = document.getElementById("outcomeList");

    // Define learning outcomes based on subject selection
    var learningOutcomes = {
        MPM20: ["LO1", "LO2", "LO3"],
        MPM24: ["LO4", "LO5", "LO6"],
        MPM22: ["LO7", "LO8", "LO9"]
    };

    // Clear previous outcomes
    outcomeList.innerHTML = "";

    // Display learning outcomes for the selected subject
    learningOutcomes[subject].forEach(function(outcome) {
        var outcomeBox = document.createElement("div");
        outcomeBox.className = "outcomeBox";
        outcomeBox.innerHTML = outcome;
        outcomeList.appendChild(outcomeBox);
    });
}
