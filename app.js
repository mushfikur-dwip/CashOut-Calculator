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

// Select the radio buttons
var appRadio = document.getElementById("app");
var ussidRadio = document.getElementById("ussid");

// Flag to keep track of which button was clicked
var selectedPaymentMethod = null;
var selectedMode = "app"; // Default mode

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

// Add event listeners to the radio buttons
appRadio.addEventListener("change", function () {
  selectedMode = "app";
  console.log("App mode selected");
  updateFees();
});

ussidRadio.addEventListener("change", function () {
  selectedMode = "ussid";
  console.log("USSD mode selected");
  updateFees();
});

// Function to update fees based on the selected payment method, mode, and amount input
function updateFees() {
  var amount = parseFloat(amountInput.value);

  var result = computeFees(selectedPaymentMethod, selectedMode, amount);

  if (!result) {
    chargeElement.innerHTML = "0.00";
    agentFeesElement.innerHTML = "0.00";
    atmFeesElement.innerHTML = "0.00";
    withdrawButton.innerHTML = "0.00";
    return;
  }

  chargeElement.innerHTML = result.charge;
  agentFeesElement.innerHTML = result.agentFees.toFixed(2);
  atmFeesElement.innerHTML = result.atmFees;
  withdrawButton.innerHTML = result.withdrawAmount.toFixed(2);
}

// Add event listener to the "amount" input field
amountInput.addEventListener("input", updateFees);
