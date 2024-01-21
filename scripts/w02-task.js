/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Jackson Appiah";
let currentYear = new Date().getFullYear();
let profilePicture = "images/Photo.jpg";





/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
let imageElement = document.getElementById("profilePicture");



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);



/* Step 5 - Array */
let favoriteFood = ["Pizza", "Jolof Rice", "Kenkey", "Kelewele", 
"Waakye", "Oil Rice", "Banku With Tilapia Fish"]; 
foodElement.innerHTML = favoriteFood.join("<br>");

let newfavoriteFood = ["Boiled Yam with Vegetable Sauce"];
favoriteFood.push(newfavoriteFood);
foodElement.innerHTML += `<br>${newfavoriteFood}`;

favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood.join("<br>")}`;

// Remove the last element
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood.join("<br>")}`;



