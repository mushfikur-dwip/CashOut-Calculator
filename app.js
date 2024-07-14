// Select the buttons
var bkashButton = document.getElementById("bkash");
var nagadButton = document.getElementById("nagad");
var rocketButton = document.getElementById("rocket");
var upayButton = document.getElementById("upay");
var amountInput = document.getElementById("amount");
var chargeElement = document.getElementById("charge");
var agentFeesElement = document.getElementById("agent_fee");
var atmFeesElement = document.getElementById("atm_fee");

// Flag to keep track of which button was clicked
var selectedPaymentMethod = null;

// Add event listeners to the buttons
bkashButton.addEventListener("click", function () {
  selectedPaymentMethod = "bkash";
  console.log("bKash button clicked");
  updateFees();
});

nagadButton.addEventListener("click", function () {
  selectedPaymentMethod = "nagad";
  console.log("Nagad button clicked");
  updateFees();
}); 

rocketButton.addEventListener("click", function () {
  selectedPaymentMethod = "rocket";
  console.log("Rocket button clicked");
  updateFees();
});

upayButton.addEventListener("click", function () {
  selectedPaymentMethod = "upay";
  console.log("Upay button clicked");
  updateFees();
});

// Function to update fees based on the selected payment method and amount input
function updateFees() {
  var amount = parseFloat(amountInput.value);

  if (isNaN(amount)) {
    chargeElement.innerHTML = "0.00";
    agentFeesElement.innerHTML = "0.00";
    atmFeesElement.innerHTML = "0.00";
    return;
  }

  var charge, agentFees, atmFees;

  if (selectedPaymentMethod === "bkash") {
    charge = amount * 0.05;
    agentFees = amount * 0.02;
    atmFees = amount * 0.01;
  } else if (selectedPaymentMethod === "nagad") {
    charge = amount * 0.03;
    agentFees = amount * 0.01;
    atmFees = amount * 0.02;
  } else if (selectedPaymentMethod === "rocket") {
    charge = amount * 0.04;
    agentFees = amount * 0.01;
    atmFees = amount * 0.03;
  } else if (selectedPaymentMethod === "upay") {
    charge = amount * 0.02;
    agentFees = amount * 0.01;
    atmFees = amount * 0.01;
  } else {
    return;
  }

  chargeElement.innerHTML = charge.toFixed(2);
  agentFeesElement.innerHTML = agentFees.toFixed(2);
  atmFeesElement.innerHTML = atmFees.toFixed(2);
}

// Add event listener to the "amount" input field
amountInput.addEventListener("input", updateFees);
