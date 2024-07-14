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

  if (isNaN(amount)) {
    chargeElement.innerHTML = "0.00";
    agentFeesElement.innerHTML = "0.00";
    atmFeesElement.innerHTML = "0.00";
    withdrawButton.innerHTML = "0.00";
    return;
  }

  var charge, agentFees, atmFees, withdrawAmount;

  if (selectedPaymentMethod === "bkash") {
    if (selectedMode === "app") {
      charge = "18.5 BDT";
      agentFees = amount * 0.0185;
      atmFees = amount * 0.0149;
      withdrawAmount = amount - agentFees;
    } else if (selectedMode === "ussid") {
      charge = "18.5 BDT";
      agentFees = amount * 0.0185;
      atmFees = amount * 0.0149;
      withdrawAmount = amount - agentFees;
    }
  } else if (selectedPaymentMethod === "nagad") {
    if (selectedMode === "app") {
      charge = "12.5 BDT";
      agentFees = amount * 0.0125;
      atmFees = "Can't withdraw via USSD";
      withdrawAmount = amount - agentFees;
    } else if (selectedMode === "ussid") {
      charge = "15.0 BDT";
      agentFees = amount * 0.015;
      atmFees = "Can't withdraw via USSD";
      withdrawAmount = amount - agentFees;
    }
  } else if (selectedPaymentMethod === "rocket") {
    if (selectedMode === "app") {
      charge = "16.7 BDT";
      agentFees = amount * 0.0167;
      atmFees = amount * 0.009;
      withdrawAmount = amount - agentFees;
    } else if (selectedMode === "ussid") {
      charge = "16.7 BDT";
      agentFees = amount * 0.0167;
      atmFees = amount * 0.009;
      withdrawAmount = amount - agentFees;
    }
  } else if (selectedPaymentMethod === "upay") {
    if (selectedMode === "app") {
      charge = "14.0 BDT";
      agentFees = amount * 0.014;
      atmFees = amount * 0.008;
      withdrawAmount = amount - agentFees;
    } else if (selectedMode === "ussid") {
      charge = "10.0 BDT";
      agentFees = amount * 0.014;
      atmFees = amount * 0.008;
      withdrawAmount = amount - agentFees;
    }
  } else {
    return;
  }

  chargeElement.innerHTML = charge;
  agentFeesElement.innerHTML = agentFees.toFixed(2);
  atmFeesElement.innerHTML = atmFees;
  withdrawButton.innerHTML = withdrawAmount.toFixed(2);
}

// Add event listener to the "amount" input field
amountInput.addEventListener("input", updateFees);
