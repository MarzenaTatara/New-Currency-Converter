let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");



formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;

    let USD = 4.15;
    let EUR = 4.45;
    let EGP = 0.15;
    
    let result;

    switch (currency) {
        case "USD":
            result = amount * USD;
            break;
        case "EUR":
            result = amount * EUR;
            break;
        case "EGP":
            result = amount * EGP;
            break;
    }
    resultElement.innerText = result.toFixed(2);
   
});
