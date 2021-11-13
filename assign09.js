function loadDoc() {
    let selector = document.getElementById("select");

    selector.onchange = function() {
        const xhhtp = new XMLHttpRequest();
        xhhtp.onload = function() {
            document.getElementById("output1").innerHTML = this.responseText;
        }
        xhhtp.open("GET", this.value);
        xhhtp.send();
    }
}


/*
var select = document.getElementById('selectMonth');

select.onchange = function(){
  alert(this.value);
}


*/