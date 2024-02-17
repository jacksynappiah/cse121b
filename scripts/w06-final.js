// A simple Javascript application that fetches a random joke from an external API and displays it on the web page
// This code uses a free API from https://sv443.net/jokeapi/v2/

// Define the HTML elements as constants
const jokeContainer = document.getElementById("joke-container");
const jokeText = document.getElementById("joke-text");
const jokeCategory = document.getElementById("joke-category");
const jokeType = document.getElementById("joke-type");
const jokeSetup = document.getElementById("joke-setup");
const jokeDelivery = document.getElementById("joke-delivery");
const jokeButton = document.getElementById("joke-button");

// Define the API URL as a constant
const apiUrl = "https://sv443.net/jokeapi/v2/joke/Any";

// Define an async function to fetch and display a joke
async function getJoke() {
  try {
    // Use the fetch API to get the joke data as a JSON object
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Destructure the data object to extract values
    const { category, type, joke, setup, delivery } = data;

    // Display the joke category and type using template literals
    jokeCategory.textContent = `Category: ${category}`;
    jokeType.textContent = `Type: ${type}`;

    // Check the joke type and display accordingly
    if (type === "single") {
      // Single-line joke
      jokeText.textContent = joke;
      jokeSetup.textContent = "";
      jokeDelivery.textContent = "";
    } else {
      // Two-part joke
      jokeText.textContent = "";
      jokeSetup.textContent = setup;
      jokeDelivery.textContent = delivery;
    }
  } catch (error) {
    // Handle any errors and inform the user
    console.error(error);
    jokeContainer.textContent = "Sorry, something went wrong. Please try again later.";
  }
}

// Add an event listener to the button to fetch a new joke
jokeButton.addEventListener("click", getJoke);

// Call the function once when the page loads
getJoke();
