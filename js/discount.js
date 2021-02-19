function discount() {
    //input: customer's subtotal amount and the day of week
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    var dayOfWeek = new Date().getDay();

    //processing: calculate the customer's discount if they buy in Tuesday or Wednesday.
    let total;
    if (subtotal > 50 && dayOfWeek == 2) {
        total = subtotal * 0.9;
    }
    else if (subtotal > 50 && dayOfWeek == 3) {
        total = subtotal * 0.9;
    }
    else {
        total = subtotal;
    }

    //output: the total amount after discount and adding tax
    totalAfterTax = total * 1.06
    document.getElementById('output').innerHTML = '$' + totalAfterTax
}



//Monday (1)	25.95	27.51
//Tuesday (2)	37.00	39.22
//Wednesday (3)	53.25	50.80
//Thursday (4)	72.81	77.18