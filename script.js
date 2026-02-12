// JavaScript functionality for the bakery website

// Function to display available bakery items
function displayItems(items) {
    items.forEach(item => {
        console.log(`${item.name}: $${item.price}`);
    });
}

// Sample bakery items
const bakeryItems = [
    { name: 'Croissant', price: 2.50 },
    { name: 'Baguette', price: 3.00 },
    { name: 'Pasta', price: 2.00 }
];

// Display the items when the script is loaded
displayItems(bakeryItems);