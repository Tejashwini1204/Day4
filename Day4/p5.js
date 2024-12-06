// Example product name and quantity
let productName = "Phone";  // The product name
let quantity = 20;           // The quantity of the product

// Check the inventory level and alert accordingly
if (quantity >= 10 && quantity <= 20) {
    console.log(`Alert: Stock is low for ${productName}.`);
} else if (quantity > 20) {
    console.log(`The stock for ${productName} is adequate.`);
} else {
    console.log('Alert: Restock Immediately.');
}
