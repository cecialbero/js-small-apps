// Fetchs data from the items.json file
// const getData = () => {
//   fetch('items.json')
//     .then(res => res.json())
//     .then(data => console.log(data));
// }

// getData();


// Elements
const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const swapBtn = document.getElementById('swap');
const rate = document.getElementById('rate');

// Fecth the currency data
const setRate = () => {
  const currencyOneValue = currencyOne.value;
  let currencyTwoValue = currencyTwo.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOneValue}`)
    .then(res => res.json())
    .then(data => {
      // Sets the amount two value
      amountTwo.value = data.rates[currencyTwoValue];
      // Inserts the information rate text
      rate.innerText = `1${currencyOneValue} = ${data.rates[currencyTwoValue]}${currencyTwoValue}`;
      // Updates the amount while changing the amount
      amountTwo.value = (amountOne.value*data.rates[currencyTwoValue]).toFixed(2);
    });
}

// Swap currency info on clicking the swap button
const swapCurrency = () => {
  let initialValue = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = initialValue;

  setRate();
}

currencyOne.addEventListener('change', setRate);
currencyTwo.addEventListener('change', setRate);
amountOne.addEventListener('input', setRate);
amountTwo.addEventListener('input', setRate);
swapBtn.addEventListener('click', swapCurrency);
setRate();