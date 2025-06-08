function computeFees(paymentMethod, mode, amount) {
  if (isNaN(amount)) {
    return {
      charge: "0.00",
      agentFees: 0,
      atmFees: 0,
      withdrawAmount: 0,
    };
  }

  let charge;
  let agentFees;
  let atmFees;
  let withdrawAmount;

  if (paymentMethod === "bkash") {
    charge = "18.5 BDT";
    agentFees = amount * 0.0185;
    atmFees = amount * 0.0149;
    withdrawAmount = amount - agentFees;
  } else if (paymentMethod === "nagad") {
    if (mode === "app") {
      charge = "12.5 BDT";
      agentFees = amount * 0.0125;
    } else {
      charge = "15.0 BDT";
      agentFees = amount * 0.015;
    }
    atmFees = "Can't withdraw via USSD";
    withdrawAmount = amount - agentFees;
  } else if (paymentMethod === "rocket") {
    charge = "16.7 BDT";
    agentFees = amount * 0.0167;
    atmFees = amount * 0.009;
    withdrawAmount = amount - agentFees;
  } else if (paymentMethod === "upay") {
    if (mode === "app") {
      charge = "14.0 BDT";
    } else {
      charge = "10.0 BDT";
    }
    agentFees = amount * 0.014;
    atmFees = amount * 0.008;
    withdrawAmount = amount - agentFees;
  } else {
    return null;
  }

  return {
    charge,
    agentFees,
    atmFees,
    withdrawAmount,
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = computeFees;
}
