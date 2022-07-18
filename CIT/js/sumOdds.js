function sumOdds() {
    // Get the input from the user from the textbox
    let n = parseInt(document.getElementById('integer').value);
    let sumOdds = 0;

    // Find odd numbers by using loop
    for (let odd = 1; odd <= n; odd += 2) {

        // Sum up the odd numbers
        sumOdds = sumOdds + odd;
    }

    // Display the result for the user to see.
    document.getElementById('output').innerHTML = 
    `The sum of all the odd integers between 1 and the integer you provided is ${sumOdds}.`;
}