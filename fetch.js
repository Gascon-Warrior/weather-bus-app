/**
 * Charge le fichier city.json et retourne les données
 */
async function loadJsonFile() {
  const response = await fetch("/city.json");
  const data = await response.json();

  return data;
}

/**
 *
 */
async function getMeteoForecast() {
  const cityConfig = await loadJsonFile();
  const ville = cityConfig.nomVille;
  const lat = cityConfig.latitude;
  const lon = cityConfig.longitude;

  const response = await fetch(
    `http://my.meteoblue.com/packages/basic-1h_basic-day?lat=${lat}&lon=${lon}&apikey=3pFKUP6WfkYbjnsS`
  );
  console.log(ville);
  console.log(lon);
  console.log(lat);

  console.log(response);
}

getMeteoForecast();

setInterval(getMeteoForecast, 3600000);
