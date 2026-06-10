let apiKey= "b9172bd0e38204d2e06d19103dd6462e";

document.getElementById("search-btn").addEventListener("click",getWeather);
function getWeather(){
  let city=document.getElementById("city-input").value;

  let url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
  .then(response=>response.json())
  .then(data=>{
    document.getElementById("city").textContent=data.name;
    document.getElementById("temperature").textContent=data.main.temp+"°C";
    document.getElementById("condition").textContent=data.weather[0].main;
      document.getElementById("weather-card").style.display="block";

  })

}
