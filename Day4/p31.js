function calculateBonus(experience, performanceScore, salary) {
    let bonusPercentage = 0;

    // Rule 1: More than 5 years experience and performance score > 8 -> 20% bonus
    if (experience > 5 && performanceScore > 8) {
        bonusPercentage = 20;  
    }
    // Rule 2: More than 3 years but <= 5 years experience and performance score > 7 -> 10% bonus
    else if (experience > 3 && experience <= 5 && performanceScore > 7) {
        bonusPercentage = 10;  
    }
    // Rule 3: 3 years or less experience -> 5% bonus
    else if (experience <= 3) {
        bonusPercentage = 5;  
    }

    // Return the bonus percentage
    return bonusPercentage;
}

// Example usage
let experience = 4;
let performanceScore = 9;
let salary = 50000; // Example salary

let bonus = calculateBonus(experience, performanceScore, salary);
console.log(`The bonus percentage for an employee with ${experience} years of experience and a performance score of ${performanceScore} is ${bonus}%`);
