var requete = new XMLHttpRequest();
requete.open("GET", "Json/conf.json");

requete.onload = function () {
  if (requete.status == 200) {
    let response = JSON.parse(requete.responseText);
    let ville = response.ville;
    fetchApi(ville); 
  }
};
requete.send();

const APIKEY = "97bef29ad6140ea5b0bc658dc312ff49";
let fetchApi = function (ville) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville},%20FR&units=metric&lang=fr&appid=${APIKEY}`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      console.log(data);      
      document.querySelector("#city").innerHTML = data.name;
      document.querySelector("#temp").innerHTML = data.main.temp + " °C";
      document.querySelector("#humidity").innerHTML = data.main.humidity + " %";
      document.querySelector("#wind").innerHTML = data.wind.speed + " Km/h";
      document.querySelector("#weatherDescriptionText").innerHTML = data.weather[0].description;     
    })
  );
};

setInterval(function() {
  if (requete.readyState === XMLHttpRequest.OPENED || requete.readyState === 4) {    
    requete.open("GET", "Json/conf.json");
    requete.send();
  }
}, 300000);