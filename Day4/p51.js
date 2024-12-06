function checkInventory(productName, quantity) {
    // Check if the stock is low (between 10 and 20 units)
    if (quantity >= 10 && quantity <= 20) {
        console.log(`Alert: Stock is low for ${productName}.`);
    }
    // Check if the stock is adequate (more than 20 units)
    else if (quantity > 20) {
        console.log(`The stock for ${productName} is adequate.`);
    }
    // If the stock is below 10 units, consider it critically low
    else {
        console.log(`Alert: Stock is critically low for ${productName}.`);
    }
}

// Example usage:
checkInventory("Widget", 15);  // Example with low stock (15 units)
checkInventory("Gadget", 25);  // Example with adequate stock (25 units)
checkInventory("Doodad", 5);   // Example with critically low stock (5 units)
