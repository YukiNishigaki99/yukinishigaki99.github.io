function doInputOutput() {
/* Input: temperature and wind speed
 * Processing: calculate the wind chill factor if both inputs meets the specifications
 * Output: the wind chill factorin Fahrenheit
 */

    let temperature = parseFloat(document.getElementById('temperature').value);
    let windspeed = parseFloat(document.getElementById('windspeed').value);
    if (temperature < 50 && windspeed < 3) {
        let windchill = windChill(temperature, windspeed);
        document.getElementById('output').innerHTML = windchill;
    }
}

function windChill(tempF, speed) {
    let f = 35.74 + 0.6215 * tempF - 35.75 * Math.power(speed, 0.16) + 0.4275 * tempF * Math.power(speed, 0.16);
    return f;
}
