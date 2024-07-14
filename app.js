// Select the buttons
var bkashButton = document.getElementById("bkash");
var nagadButton = document.getElementById("nagad");
var rocketButton = document.getElementById("rocket");
var upayButton = document.getElementById("upay");
var amountInput = document.getElementById("amount");
var chargeElement = document.getElementById("charge");
var agentFeesElement = document.getElementById("agent_fee");
var atmFeesElement = document.getElementById("atm_fee");
var withdrawButton = document.getElementsByClassName("total-amount")[0];

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
    withdrawButton.innerHTML = "0.00";
    return;
  }

  var charge, agentFees, atmFees;

  if (selectedPaymentMethod === "bkash") {
    charge = "18.5 BDT";
    agentFees = amount * 0.02;
    atmFees = amount * 0.01;
    withdrawAmount = amount - agentFees;
  }
    else if (selectedPaymentMethod === "nagad") {
    charge = "1.50%";
    agentFees = amount * 0.01;
    atmFees = amount * 0.02;
    withdrawAmount = amount - agentFees;
  }
    else if (selectedPaymentMethod === "rocket") {
    charge = "5%";
    agentFees = amount * 0.01;
    atmFees = amount * 0.03;
    withdrawAmount = amount - agentFees;
  }
    else if (selectedPaymentMethod === "upay") {
    charge = "5%";
    agentFees = amount * 0.01;
    atmFees = amount * 0.01;
    withdrawAmount = amount - agentFees;
  }
    else {
    return;
  }

  chargeElement.innerHTML = charge;
  agentFeesElement.innerHTML = agentFees.toFixed(2);
  atmFeesElement.innerHTML = atmFees.toFixed(2);
  withdrawButton.innerHTML = withdrawAmount;
}

// Add event listener to the "amount" input field
amountInput.addEventListener("input", updateFees);
