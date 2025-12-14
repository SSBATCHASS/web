// Static currency rates (example: based on USD)
const exchangeRates = {
  USD: {
    USD: 1,
    EUR: 0.85,
    INR: 83,
    GBP: 0.75,
    JPY: 145,
    MYR: 4.65
  },
  EUR: {
    USD: 1.18,
    EUR: 1,
    INR: 97.5,
    GBP: 0.88,
    JPY: 170,
    MYR: 5.45
  },
  INR: {
    USD: 0.012,
    EUR: 0.0103,
    INR: 1,
    GBP: 0.009,
    JPY: 1.74,
    MYR: 0.056
  },
  GBP: {
    USD: 1.33,
    EUR: 1.14,
    INR: 111,
    GBP: 1,
    JPY: 193,
    MYR: 6.18
  },
  JPY: {
    USD: 0.0069,
    EUR: 0.0059,
    INR: 0.57,
    GBP: 0.0052,
    JPY: 1,
    MYR: 0.032
  },
  MYR: {
    USD: 0.215,
    EUR: 0.184,
    INR: 17.8,
    GBP: 0.162,
    JPY: 31.25,
    MYR: 1
  }
};

// Get DOM elements
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const userValue = document.getElementById("userValue");
const convertBtn = document.getElementById("btn");
const result = document.getElementById("result");
const status = document.getElementById("status");
const switchBtn = document.getElementById("switchCurrency");

// Populate currency options
function populateSelectBoxes() {
  const currencies = Object.keys(exchangeRates);
  currencies.forEach((currency) => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    option1.value = option2.value = currency;
    option1.text = option2.text = currency;
    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);
  });

  fromCurrency.value = "USD";
  toCurrency.value = "INR";
}

populateSelectBoxes();

// Switch currencies
switchBtn.addEventListener("click", () => {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
});

// Convert button click
convertBtn.addEventListener("click", () => {
  const amount = parseFloat(userValue.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (isNaN(amount) || amount <= 0) {
    status.textContent = "Please enter a valid amount";
    result.textContent = "";
    return;
  }

  const rate = exchangeRates[from][to];
  const converted = amount * rate;

  status.textContent = `Converted from ${from} to ${to}`;
  result.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
});
