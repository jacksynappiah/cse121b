/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
     return number1 + number2;
}

function addNumbers() {
     let addNumber1 = Number(document.querySelector("#add1").value);
     let addNumber2 = Number(document.querySelector("#add2").value);

     document.querySelector("#sum").value = add(addNumber1, addNumber2);
     
}
 
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function(number1, number2) {
     return number1 - number2;
}

let subtractNumbers = function() {
     let subtractNumber1 = Number(document.querySelector("#subtract1").value);
     let subtractNumber2 = Number(document.querySelector("#subtract2").value);

     document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
  let factor1 = Number(document.querySelector("#factor1").value);
  let factor2 = Number(document.querySelector("#factor2").value);
  document.querySelector("#product").value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
     return number1 / number2;
   }
   
   function divideNumbers() {
     let dividend = Number(document.querySelector("#dividend").value);
     let divisor = Number(document.querySelector("#divisor").value);
     document.querySelector("#quotient").value = divide(dividend, divisor);
   }
   
   document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let getTotalDue = () => {
  let subtotal = Number(document.querySelector("#subtotal").value);
  let membership = document.querySelector("#member").checked;

  if (membership) {
      subtotal = subtotal - (subtotal * 0.2);
  }

  subtotal = subtotal.toFixed(2);
  document.querySelector("#total").innerHTML = `$ ${subtotal}`;
}

document.querySelector("#getTotal").addEventListener("click", getTotalDue);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = numbersArray;

/* Output Odds Only Array */
let odds = numbersArray.filter(number => number % 2 === 1);
document.querySelector("#odds").innerHTML = odds;

/* Output Evens Only Array */
let evens = numbersArray.filter(number => number % 2 === 0);
document.querySelector("#evens").innerHTML = evens;

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.querySelector("#sumOfArray").innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map(number => number * 2);
document.querySelector("#multiplied").innerHTML = multiplied;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultiplied;