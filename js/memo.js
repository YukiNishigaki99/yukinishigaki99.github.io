let output = '';
let i;
for (i = 1; i <= 12; i++) {
    product = 5 * i;
    output = `5 × ${i} = ${product}<br>`;
}
document.getElementById('output').innerHTML = output;

let output = '';
let i = 1;
while (i <= 12) {
    product = 5 * i;
    output = `5 × ${i} = ${product}<br>`;
    i++
}
document.getElementById('output').innerHTML = output;


let output1 = '';
let i = 0;
while (i < 2) {
    output1 += `Part 1:${i}<br>`;
    i++
}
document.getElementById('display1').innerHTML = output1;