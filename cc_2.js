//Task 1 - Store Inventory
//Step 1: Declare an array with five products
let products = ["Vodka", "Beer", "Tequila", "Rum", "Whiskey"];

//Step 2: Add a new product to the array
products.push ("Wine");

//Step 3: Remove the last product from the array
products.pop();

//Step 4: Log updated product list
console.log(products);


//Task 2 - Student Scores
//Step 1: Declare an array with five numerical values
let scores = [5, 10, 15, 20, 25];

//Step 2: Update second score in the array
scores [1] = 9;

//Step 3: Calculate the average of all scores
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;

//Step 4: Log updated array and average score
console.log(scores);
console.log(average);

//Task 3 - Employee Records
//Step 1: Declare an object with properties
let employee = {
    name: "Cristiano Ronaldo",
    age: 39,
    department: "Human Resources",
    isActive: true
};

//Step 2: Update department
employee.department = "Finance";

//Step 3: Add a new property
employee.position = "Vice President";

//Step 4: Log updated object
console.log(employee);


//Task 4 - Customer Database
//Step 1: Declare an array with at least three objects
let customers = [
    { name: "Ronaldo", email: "ronaldo@gmail.com", purchaseAmount: 1000 },
    { name: "Messi", email: "messi@gmail.com", purchaseAmount: 1500 },
    { name: "Neymar", email: "neymar@gmail.com", purchaseAmount: 2000}
];

//Step 2: Add a new customer to array
customers.push({ name: "Lewandowski", email: "lewandowski@gmail.com", purchaseAmount: 2500 });

//Step 3: Log entire customer list
console.log(customers);

    