document.getElementById('date').innerHTML = new Date();

function alarm() {
//input: date, get from computer's clock
    var now = new Date();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay();

//processing: confirm today is holiday or weekday and assignm messages
let message;
if (dayOfWeek == 0 || dayOfWeek == 6) {
    message = 'Sleep in.';
}
else if (month == 0 && dayOfMonth == 1) {
    message = 'Sleep in.';
}
else if (month == 6 && dayOfMonth == 4) {
    message = 'Sleep in.';
}
else if (month == 11 && dayOfMonth == 25) {
    message = 'Sleep in.';
}
else {
    message = 'Get up!';
}

//output: 
document.getElementById('output').innerHTML = message;

}

