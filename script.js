
const apikey = "833dcbd4636a8ad3e7f88bd5f4ed0505";

const searchBtn = document.getElementById("searchBtn");

const cityinput = document.getElementById("cityinput");

const weatherDiv = document.getElementById("weather");

const errorDiv = document.getElementById("error");

async function getweather(city){

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  try {

    const response = await fetch(url);

    if(!response.ok) {

   throw new Error("City not found");

    }

    const data = await response.json();

    displayweather(data);

    
  } catch(error){

    weatherDiv.innerHTML = "";

    errorDiv.textContent = error.message;

  }

} // This function gets the information of the weather from the api key

function displayweather(data){

errorDiv.textContent = "";

const { name } = data;

const { temp } = data.main;

const { description , icon } = data.weather[0];

weatherDiv.innerHTML = `

<h2>${name}</h2>

<img src = "https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">

<p><strong>${temp.toFixed(1)}°C</strong></p>

<p>${description}</p>

`;

} // This function display the weather informations

searchBtn.addEventListener("click",() => {

const city = cityinput.value.trim();

if(city){

getweather(city);

}

});

cityinput.addEventListener("keypress",(e) => {

if(e.key === "Enter"){

  searchBtn.click();

}

});