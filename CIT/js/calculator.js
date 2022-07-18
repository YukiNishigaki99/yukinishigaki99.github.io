function calculator() {
    /* Input: two numbers, an arithmetic operator and an answer
     * Procesing: calculate the numbers with provided operator and check the answer
     * Output: Display the message if the calculation is correct.
     */

    // Get the user input from a text field and calculate them.
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let operator = document.getElementById('operator').value;
    let answer = parseFloat(document.getElementById('answer').value);

    // Calculate the user's calculation by using SWITCH statement
    let correctAnswer;
    switch (operator) {
        case '+':
            correctAnswer = number1 + number2;
            break;
        case '-':
            correctAnswer = number1 - number2;
            break;
        case '*':
            correctAnswer = number1 * number2;
            break;
        case '/':
            correctAnswer = number1 / number2;
            break;
    }

    //Check the user's calculation
    let message;
    if (answer == correctAnswer) {
        message = 'Correct! 🏆'
    }
    else {
        message = 'Incorrect 😢'
    }

    // Display the message to the user.
    document.getElementById('output').innerHTML = message;

}