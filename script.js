// ==========================
// Part 1: Variables & Conditionals
// ==========================

// Listen for button click and check age
document.getElementById("checkAgeBtn").addEventListener("click", () => {
  let age = document.getElementById("ageInput").value; // variable declaration
  let resultText = ""

  if (age >= 18) {
    resultText = "You are eligible to vote!";
  } else if (age > 0) {
    resultText = "You are too young to vote.";
  } else {
    resultText = "Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = resultText;
});


// ==========================
// Part 2: Functions
// ==========================

// Function to calculate sum
function calculateSum(a, b) {
  return a + b;
}

// Function to format result
function formatResult(message) {
  return `Result: ${message}`;
}

// Function to capitalize string
function capitalizeString(str) {
  if (!str) return "";
  return str.toUpperCase();
}

document.getElementById("capitalizeBtn").addEventListener("click", () => {
  let name = document.getElementById("nameInput").value;
  let result = capitalizeString(name);
  document.getElementById("capitalizedResult").textContent = `${result}`;
});


document.getElementById("calcSumBtn").addEventListener("click", () => {
  let num1 = parseInt(document.getElementById("num1").value) || 0;
  let num2 = parseInt(document.getElementById("num2").value) || 0;

  let sum = calculateSum(num1, num2); // using our custom function
  document.getElementById("sumResult").textContent = formatResult(sum);
});


// ==========================
// Part 3: Loops
// ==========================

// Example 1: Countdown using a loop
document.getElementById("countdownBtn").addEventListener("click", () => {
  let output = "";
  for (let i = 5; i >= 0; i--) {
    output += i + " ";
  }
  document.getElementById("countdownResult").textContent = "Countdown: " + output;
});

// Example 2: Looping through an array
// Example 2: Multiplication table using a loop
document.getElementById("tableBtn").addEventListener("click", () => {
  let tableHTML = "<ul>";
  for (let i = 1; i <= 10; i++) {
    tableHTML += `<li>5 x ${i} = ${5 * i}</li>`;
  }
  tableHTML += "</ul>";

  document.getElementById("tableResult").innerHTML = tableHTML;
});

// ==========================
// Part 4: DOM Manipulation
// ==========================

// Toggle highlight class
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// Create new elements dynamically
document.getElementById("createElementBtn").addEventListener("click", () => {
  let note = document.createElement("p");
  note.textContent = "New Note added at " + new Date().toLocaleTimeString();
  document.getElementById("notes").appendChild(note);
});

// Change background color randomly
document.getElementById("changeBgBtn").addEventListener("click", () => {
  const colors = ["#FFDDC1", "#C1FFD7", "#C1E1FF", "#F1C1FF", "#FFF3C1"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});