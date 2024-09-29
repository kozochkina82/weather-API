fetch ('https://api.openweathermap.org/data/2.5/weather?q=Samara&appid=2ba74f554af20ed403a0802964b03dd2')
.then( function(resp) {return resp.json()}) //convert data to json
.then( function(data) {
    console.log(data);
})
.catch(function() {
    //catch any errors
})