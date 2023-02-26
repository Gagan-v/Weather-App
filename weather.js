let city=document.getElementById("city")
let country=document.getElementById("country")
let temparature=document.getElementById("temparature")
let user_input=document.getElementById("user_input")
let checktemp= async()=>{//to use await whole function should be async
    let cityValue= user_input.value
    if (cityValue=="") {
        alert("Enter city name")
    } else {
    let response= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`)//fetch used to fetch api
    console.log(response);
    let data =await response.json()
    city.textContent=data.name
    country.textContent=data.sys.country
    temparature.textContent=data.main.temp
}
}



// {
//     "coord": {
//     "lon": 139.6917,
//     "lat": 35.6895
//     },
//     "weather": [
//     {
//     "id": 801,
//     "main": "Clouds",
//     "description": "few clouds",
//     "icon": "02d"
//     }
//     ],
//     "base": "stations",
//     "main": {
//     "temp": 12.97,
//     "feels_like": 11.5,
//     "temp_min": 11.58,
//     "temp_max": 13.78,
//     "pressure": 1015,
//     "humidity": 45
//     },
//     "visibility": 10000,
//     "wind": {
//     "speed": 2.57,
//     "deg": 50
//     },
//     "clouds": {
//     "all": 20
//     },
//     "dt": 1671161709,
//     "sys": {
//     "type": 2,
//     "id": 2001249,
//     "country": "JP",
//     "sunrise": 1671140643,
//     "sunset": 1671175756
//     },
//     "timezone": 32400,
//     "id": 1850144,
//     "name": "Tokyo",
//     "cod": 200
//     }
