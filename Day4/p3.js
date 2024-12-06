function calculateBonus(experience, performanceScore, salary) {
    let bonusPercentage = 0;

    if (experience > 5 && performanceScore > 8) {
        bonusPercentage = 20;  // 20% bonus for employees with more than 5 years experience and performance score > 8
    } else if (experience > 3 && experience <= 5 && performanceScore > 7) {
        bonusPercentage = 10;  // 10% bonus for employees with more than 3 years but <= 5 years experience and performance score > 7
    } else if (experience <= 3) {
        bonusPercentage = 5;  // 5% bonus for employees with 3 years or less experience
    }

    // Return the calculated bonus percentage
    return bonusPercentage;
}

// Example usage
let experience = 4;
let performanceScore = 9;
let salary = 50000; // Example salary

let bonus = calculateBonus(experience, performanceScore, salary);
console.log(`The bonus percentage for an employee with ${experience} years of experience and a performance score of ${performanceScore} is ${bonus}%`);
