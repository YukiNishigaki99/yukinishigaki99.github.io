function addNumbers() {
	//INPUT--two numbers
	 let x = parseFloat(document.getElementById('number1').value);
	 let y = parseFloat(document.getElementById('number2').value);
	//PROCESSING--adding two numbers
	 let sum = x + y;
	//OUTPUT--the sum of two numbers
    document.getElementById('output').innerHTML = "The sum of " + x + " and " + y + " equals " + sum + "!";
}