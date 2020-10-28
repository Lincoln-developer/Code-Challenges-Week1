//Using if statements and a function:
function gradingSystem (marks) {
    if (marks <= 15) {
        return "F9"
    }
    else if (marks <= 30) {
        return "P8"
    }
    else if (marks <= 45) {
        return "P7"
    }
    else if (marks <= 55) {
        return "C6"
    }
    else if (marks <= 65) {
        return "C5"
    }
    else if (marks <= 75) {
        return "C4"
    }
    else if (marks <= 85) {
        return "C3"
    }
    else if (marks <= 95) {
        return "D2"
    }
    else if (marks <= 100) {
        return "D1"
    }
}
console.log (gradingSystem(14));// Outputs the grade for a particular mark: