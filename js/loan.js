function doPayment() {
    // Get inputs from the user.
    let principal = parseFloat(document.getElementById('principal').value);
    let annualRate = parseFloat(document.getElementById('annualRate').value);
    let numberOfYears = parseFloat(document.getElementById('numberOfYears').value);
    let paymentsPerYear = parseFloat(document.getElementById('paymentsPerYear').value);

    // Call the function.
    let payment = computePayment(principal, annualRate, numberOfYears, paymentsPerYear);

    // Display a result to the user.
    document.getElementById('payment').innerHTML = `$${payment.toFixed(2)}`;
}

function doBalance() {
    // Get inputs from the user.
    let principal = parseFloat(document.getElementById('principal').value);
    let annualRate = parseFloat(document.getElementById('annualRate').value);
    let numberOfYears = parseFloat(document.getElementById('numberOfYears').value);
    let paymentsPerYear = parseFloat(document.getElementById('paymentsPerYear').value);
    let numberOfPaymentPaidToDate = parseFloat(document.getElementById('numberOfPaymentsPaidToDate').value);

    // Call the function.
    let balance = computeBalance(principal, annualRate, numberOfYears, paymentsPerYear, numberOfPaymentPaidToDate);

    // Display a result to the user.
    document.getElementById('balance').innerHTML = `$${balance.toFixed(2)}`;
}

function computePayment(principal, annualRate, years, periodsPerYear) {
    let r = annualRate / periodsPerYear;
    let n = years * periodsPerYear;
    let payment = parseFloat(principal * r / 1 - Math.pow((1 + r, -n)));
    return payment;
}

function computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentPaidToDate) {
    let payment = parseFloat(computePayment(principal, annualRate, years, periodsPerYear));
    let r = annualRate / periodsPerYear;
    let balance = principal * Math.pow((1 + r), numberOfPaymentPaidToDate) - (payment * (Math.pow((1 + r), numberOfPaymentPaidToDate) - 1) / r);
    return balance;
}
