function footwear() {
    /* Input: today's weather
     * Processing: find appropriate shoes for weather
     * Output: Display appropriate shoes for weather to the user
     */

     //Input: get user input and assign them to the variable
    let weather = document.getElementById('weather').value;

    //Processing: compare the value of the variable by using switch statesment
    let shoes;
    switch (weather) {
        case 'hot':
            shoes = 'sandals';
            break; 
        case 'rain':
            shoes = 'galoshes';
            break;
        case 'snow':
            shoes = 'boots';
            break;
        case 'unknown':
            shoes = 'shoes';
            break;
    }
    
    //Output: Display the message to the user
    document.getElementById('output').innerHTML = 'Adequate footwewar type is ' + shoes + '.';
}