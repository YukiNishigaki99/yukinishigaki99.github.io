/* Input: temperature and wind speed
 * Processing: calculate the wind chill factor if both inputs meets the specifications
 * Output: the wind chill factorin Fahrenheit
 */
function doInputOutput() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let windspeed = parseFloat(document.getElementById('windspeed').value);
    if (temperature < 50 && windspeed >= 3) {
        let windchill = windChill(temperature, windspeed);
        document.getElementById('output').innerHTML = `${windchill.toFixed(0)} (°F)`;
    }
}

function windChill(tempF, speed) {
    return 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
}
