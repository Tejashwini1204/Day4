// Example variables for balance and withdrawal amount
let balance = 1000;  // Current balance in the account
let amount = 300;    // Requested withdrawal amount

// Check if the requested amount is a multiple of 10
if (amount % 10 !== 0) {
    console.log("The withdrawal amount must be in multiples of $10.");
}
// Check if the requested amount is greater than $500
else if (amount > 500) {
    console.log("The maximum withdrawal limit is $500.");
}
// Check if the balance is enough for the requested withdrawal
else if (amount > balance) {
    console.log("Insufficient funds.");
}
// If all conditions are met, process the withdrawal
else {
    balance -= amount;  // Subtract the withdrawal amount from the balance
    console.log(`You have withdrawn $${amount}. Your remaining balance is $${balance}.`);
}
