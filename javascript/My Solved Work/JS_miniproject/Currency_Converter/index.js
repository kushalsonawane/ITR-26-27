const converterForm = document.getElementById("converterForm");
const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");
const conversionResult = document.getElementById("conversionResult");

// Hardcoded exchange rates relative to USD (1 USD = X other currency)
const exchangeRates = {
  USD: 1.0,
  EUR: 0.92,
  INR: 83.5,
  GBP: 0.79,
};

converterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const amount = parseFloat(amountInput.value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (isNaN(amount) || amount <= 0) {
    conversionResult.textContent = "Please enter a valid amount greater than 0.";
    return;
  }

  // Calculate: Convert to USD first, then to the target currency
  const amountInUSD = amount / exchangeRates[fromCurrency];
  const convertedAmount = amountInUSD * exchangeRates[toCurrency];

  // Format to 2 decimal places
  const formattedResult = convertedAmount.toFixed(2);

  conversionResult.textContent = `${amount} ${fromCurrency} = ${formattedResult} ${toCurrency}`;
});
