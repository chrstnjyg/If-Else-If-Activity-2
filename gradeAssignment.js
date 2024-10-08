function askGrade(){
    let score = prompt("Enter your score:");
    if (score >= 90) {
        alert("Your grade is: Excellent");
    } else if (score >= 80) {
        alert("Your grade is: Good");
    } else if (score >= 70) {
        alert("Your grade is: Fair");
    } else if (score < 70) {
        alert("Your grade: Needs Improvement");
    } else {
        alert("Invalid input. Please enter your score.")
    }
}