function displayresult() {
    var city = document.getElementById("city").value;
    var apikey='8bac8f9a7dd2b597b2d15b833ec93788';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric')
    .then(Response => Response.json())
    .then(data => {
        var t = data['main']['temp']
        document.getElementById("output").innerHTML=t;
    })
}