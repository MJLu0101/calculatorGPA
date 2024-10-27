function AddRow() {
    const tableRows = document.getElementsByClassName("table-rows")[0];
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    newRow.innerHTML = `
        <input type="checkbox" class="selector" checked="true">
        <input type="text" class="crouse-name" placeholder="Crouse Name/ID">

            <select name="grade" class="grade-select">
               <option value="">Select Grade</option>
                    <option value="4.0">A+</option>
                    <option value="4.0">A</option>
                    <option value="3.7">A-</option>
                    <option value="3.3">B+</option>
                    <option value="3.0">B</option>
                    <option value="2.7">B-</option>
                    <option value="2.3">C+</option>
                    <option value="2.0">C</option>
                    <option value="1.7">C-</option>
                    <option value="1.3">D+</option>
                    <option value="1.0">D</option>
                    <option value="0.7">D-</option>
                    <option value="0.0">F</option>
            </select>
                <input type="number" class="credits-input" min="0" placeholder="Credits(e.g. 3)">
            <button type="button" onclick="DeleteRow(this)" class="delete-row">X</button>
    `;
    tableRows.appendChild(newRow);
}
function DeleteRow(button){
    const row=button.parentNode;
    row.parentNode.removeChild(row);
}
function ResetRows() {
    const rows = document.querySelectorAll(".table-rows .row");
    rows.forEach(row => {
        row.querySelector(".crouse-name").value = "";
        row.querySelector(".grade-select").value = "";
        row.querySelector(".credits-input").value = "";
        row.querySelector(".selector").checked = true;
    });
}
function CalculatorGrades() {
    const rows = document.querySelectorAll(".table-rows .row");
    let totalCredits = 0;
    let totalGradePoints = 0;

    rows.forEach(row => {
        const gradeValue = parseFloat(row.querySelector(".grade-select").value);
        const credits = parseFloat(row.querySelector(".credits-input").value);
        const isSelected = row.querySelector(".selector").checked;
        if (!isNaN(gradeValue) && !isNaN(credits) && isSelected) {
            totalGradePoints += gradeValue * credits;
            totalCredits += credits;
        }
    });

    let gpa;
    if (totalCredits > 0) {
        gpa = (totalGradePoints / totalCredits).toFixed(2);
    } else {
        gpa = '0.00';
    }
    document.getElementById("gpa-result").textContent = `Your GPA: ${gpa}`;
}