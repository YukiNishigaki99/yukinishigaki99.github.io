let output = '';
let product = 0;
// make a list of five time by using for loop.
for (let i = 1; i <= 12; i++) {
    // get products of five times.
    product = 5 * i;
    // display the results.
    output += `5 × ${i} = ${product}<br>`;
}
document.getElementById('output').innerHTML = output;
