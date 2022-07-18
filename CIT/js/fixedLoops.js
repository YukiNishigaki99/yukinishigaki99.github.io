function display1() {
// assign blank for output1 first, and add a statement 'i++' to be not infinite loop.
let output1 = '';
let i = 0;
while (i < 2) {
    output1 += `Part 1:${i}<br>`;
    i++
}
document.getElementById('display1').innerHTML = output1;
}

function display2() {
// assign blank for output2 first, and change an operator sign "j > 3" to "j < 3".
var output2 = '';
for (let j = 0; j < 3; j++) {
  if (j !== 2) {
    output2 += `Part 2:${j}, `;
  }
  else {
    output2 += `Part 2:${j}`;
  }  
}
document.getElementById('display2').textContent = output2;
}

function display3() {
// assign blank for output3, and change commas to semicolon to seperate the parts of a for loop
let output3 = '';
for (let k = 0; k < 4; k++) {
  output3 += k + " ";
}
document.getElementById('display3').textContent = output3;
}

function display4() {
// use braces inside the loop, round the dollars to the second dicimal place
let balance = 1000;
const rate = .10;
let n = 30;
for (let s = 0; s < n; s++) {
    interest = balance * rate;
    balance += interest;
}
document.getElementById('display4').textContent = balance.toFixed(2);

//output should be
//15863.09
}
