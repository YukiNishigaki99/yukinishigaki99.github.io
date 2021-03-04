let output = '';
let i;
for (i = 1; i <= 12; i++) {
    product = 5 * i;
    output = `5 × ${i} = ${product}<br>`;
}
document.getElementById('output').innerHTML = output;