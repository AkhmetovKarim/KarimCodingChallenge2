//Task 1 - Store Inventory
// Step 1: Declare an array with five products
let products = ["Vodka", "Beer", "Tequila", "Rum", "Whiskey"];

// Step 2: Add a new product to the array
products.push ("Wine");

//Step 3: Remove the last product from the array
products.pop();

//Step 4: Log updated product list
console.log(products);

//Task 2 - Student Scores
// Step 1: Declare an array with five numerical values
let scores = [5, 10, 15, 20, 25];

//Step 2: Update second score in the array
scores [1] = 9;

//Step 3: Calculate the average of all scores
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length; 

//Step 4: Log updated array and average score
console.log(scores);
console.log(average);