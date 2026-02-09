// SECTION 1 – Real-Time Function Logic
// 1. Payroll System:
// Create calculateSalary(basicSalary, bonusPercentage)
// - Calculate bonus
// - Deduct 5% tax
// - Return final salary
// - Print full salary breakdown

// function calculateSalary(basicSalary, bonusPercentage){
//     let bonus=(bonusPercentage / 100) * basicSalary
//     let grosssalary= basicSalary + bonus
//     let tax = 0.05 * grosssalary
//     let finalsalary = grosssalary -tax
//     console.log("Basic Salary: ",basicSalary)
//     console.log("Bonus: ",bonus)
//     console.log("Grosssalary: ",grosssalary)
//     console.log("Tax: ",tax)
//     console.log("Final Salary",finalsalary)
//     return finalsalary
// }
// calculateSalary(40000,25)


// 2. Student Result System:
// Create generateResult(name, marksArray)
// - Calculate total
// - Calculate average
// - Decide Grade (A/B/C/Fail)
// - Return result object

// function generateResult(name, marksArray) {
//     let total = 0;

//     for (let i = 0; i < marksArray.length; i++) {
//         total += marksArray[i];
//     }

//     let average = total / marksArray.length;
//     let grade;

//     if (average >= 75) {
//         grade = "A";
//     } else if (average >= 60) {
//         grade = "B";
//     } else if (average >= 40) {
//         grade = "C";
//     } else {
//         grade = "Fail";
//     }

//     return {
//         name: name,
//         total: total,
//         average: average,
//         grade: grade
//     };
// }
// let result = generateResult("Kani", [78, 85, 69, 90, 80]);
// console.log(result);


// 3. Debug This Code:
// function demo(){
// if(true){
// var a = 10;
// let b = 20;
// }
// console.log(a);
// console.log(b);
// }
// Questions:
// - What will happen? 
// Ans: b will not be printed 

// - Why?
// Ans it will throw reference error because,
//     let b can be used only within the if block and not outside
// - Fix it properly.

// function demo(){
//     let b;
// if(true){
//     var a = 10;
//     b = 20;
// }
// console.log(a);
// console.log(b);
// }
// demo();

// 4. Hoisting Analysis:
// console.log(x);
// var x = 100;
// console.log(y);
// let y = 200;
// Predict output and explain.

// console.log(x);
// var x = 100;
// console.log(y);
// let y = 200;
// Predict output and explain.
// var x;      //hoisted
// console.log(x); //not initialised but still prints undefined
// x = 100; prints undefined


// console.log(y); 
// let y = 200;
//Ans:  y is hoisted but NOT initialized hence prints Reference Error.


// 5. Order Processing System:
// Create processOrder(orderId, callback)
// - Print "Order Processed"
// - Call generateInvoice(orderId)


// function generateInvoice(orderId){
//   console.log("Invoice generated for Order ID:", orderId);
// }

// function processOrder(orderId, callback){
//   console.log("Order Processed");
//   callback(orderId);
// }
// processOrder(1001, generateInvoice);
// Output:
// Order Processed
// Invoice generated for Order ID: 1001


// 6. Bank Transaction System:
// Create transaction(amount, type, callback)
// - If deposit → add
// - If withdraw → subtract
// - Call sendSMS()


// let balance = 1000;

// function sendSMS(balance){
//   console.log("SMS Sent. Current Balance:", balance);
// }

// function transaction(amount, type, callback){
//   if(type === "deposit"){
//     balance += amount;
//     console.log("Deposit successful");
//   }
//   else if(type === "withdraw"){
//     balance -= amount;
//     console.log("Withdrawal successful");
//   }
//   else{
//     console.log("Invalid transaction type");
//     return;
//   }

//   callback(balance);
// }
// transaction(500, "deposit", sendSMS);
// transaction(300, "withdraw", sendSMS);

// Output
// Deposit successful
// SMS Sent. Current Balance: 1500
// Withdrawal successful
// SMS Sent. Current Balance: 1200





// SECTION 4 – Currying (E-Commerce)
// 7. Dynamic Price Builder:
// Create priceBuilder(basePrice)(discount)(tax)
// Return final price
// Example: priceBuilder(2000)(15)(18)

// function priceBuilder(basePrice) {
//     return function (discount) {
//         return function (tax) {
//             let discountAmount = basePrice * (discount / 100);
//             let priceAfterDiscount = basePrice - discountAmount;

//             let taxAmount = priceAfterDiscount * (tax / 100);
//             let finalPrice = priceAfterDiscount + taxAmount;

//             return finalPrice;
//         };
//     };
// }
// let finalAmount = priceBuilder(2000)(15)(18);
// console.log(finalAmount);
// Output: 2006





// SECTION 5 – IIFE (Security + Encapsulation)
// 8. Secure Company Module:

// - Store private variable companyCode
// - Expose getCompanyStatus()
// - companyCode should not be directly accessible

// function CompanyModule(){
//   // private variable
//   let companyCode = "CMP2026";

//   // public method
//   function getCompanyStatus(){
//     return "Company Active | Code: " + companyCode;
//   }

//   // expose only required methods
//   return {
//     getCompanyStatus
//   };
// }

// // usage
// const company = CompanyModule();

// console.log(company.getCompanyStatus()); 
// console.log(company.companyCode);        
// Output
// Company Active | Code: CMP2026
// undefined

// 9. Unique Order ID Generator:
// Generate ORD1001, ORD1002, ORD1003, etc.
function* orderIdGenerator() {
  let id = 1000;
  while (true) {
    yield `ORD${++id}`;
  }
}

const orderGen = orderIdGenerator();

console.log(orderGen.next().value); 
console.log(orderGen.next().value); 
console.log(orderGen.next().value); 


// 10. Coupon Spin System:
// Yield:
// - 10% OFF
// - 20% OFF
// - 50% OFF
// - No Luck
// - Jackpot
// Simulate multiple spins.


function* couponSpin() {

    yield "10% OFF";
    yield "20% OFF";
    yield "50% OFF";
    yield "No Luck";
    yield "Jackpot";    
}   
const spin = couponSpin();
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);


// Mini E-Commerce Flow:
// - addToCart(product, price)
// - calculateTotal()
// - applyDiscount() using currying
// - generateCoupon() using generator
// - processPayment() using callback
// - Hide config using IIFE

const ECommerceModule = (function() {
    let cart = [];  
    function addToCart(product, price) {
        cart.push({ product, price });
        console.log(`${product} added to cart at price ${price}`);
    }
    function calculateTotal() {
        return cart.reduce((total, item) => total + item.price, 0);
    }
    function applyDiscount(discount) {
        return function(total) {
            return total - (total * discount / 100);
        }
    }
    function* generateCoupon() {
        yield "10% OFF";
        yield "20% OFF";
        yield "50% OFF";
        yield "No Luck";
        yield "Jackpot";
    }   
    function processPayment(total, callback) {
        console.log(`Processing payment of ${total}...`);
        setTimeout(() => {
            console.log("Payment successful!");
            callback();
        }, 2000);
    }
    return {
        addToCart,
        calculateTotal,
        applyDiscount,
        generateCoupon,
        processPayment
    };
})();
ECommerceModule.addToCart("Laptop", 1000);
ECommerceModule.addToCart("Phone", 500);
let total = ECommerceModule.calculateTotal();
console.log("Total before discount:", total);
const discountFunc = ECommerceModule.applyDiscount(10);
let discountedTotal = discountFunc(total);
console.log("Total after discount:", discountedTotal);
const couponGen = ECommerceModule.generateCoupon();
console.log("Generated Coupon:", couponGen.next().value);   
ECommerceModule.processPayment(discountedTotal, () => {
    console.log("Order completed. Thank you for shopping!");
});


// Concept Questions:


// 1. Difference between function declaration & expression?
//ANS: * Function Declaration:
// - Defined with the function keyword at the start
// - Hoisted completely (can be called before declaration)
// * Function Expression:
// - Assigned to a variable
// - Not hoisted (cannot be called before assignment)

// // 2. What is higher order function?
//ANS: A higher-order function is a function that can take another function as an argument, return a function, or both. 
// It allows for more flexible and reusable code by enabling functions to operate on other functions.

// // 3. Real-time example of generator?
// ANS:Generators are used when values need to be produced one at a time.

// // 4. Why do we use IIFE?
// ANS:IIFE (Immediately Invoked Function Expression) is used to create a new scope and avoid polluting the global namespace.

// // 5. Difference between var, let, const?
// ANS:* var: Function-scoped, can be redeclared and updated, hoisted with undefined
// * let: Block-scoped, cannot be redeclared but can be updated, hoisted but not initialized (TDZ)
// * const: Block-scoped, cannot be redeclared or updated, hoisted but not initialized (TDZ)   