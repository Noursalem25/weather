const API_KEY = '42f800c8ccd9cac56ac6171bb8514e8d';

const sunriseElement = document.getElementById('sunrise-time');
const sunsetElement = document.getElementById('sunset-time');
const windElement = document.getElementById('wind');
const tempElement = document.getElementById('temperature');
const zoneElement = document.getElementById('zone');
const descriptionElement = document.getElementById('description');
const mainIconElement = document.getElementById('main-section-icon');
const days = document.querySelectorAll(".day");
const icones = document.querySelectorAll('.icon');
const daysElementArray = [];
const dailyForcastElement = document.getElementById("days-forecast");

let geoData = null;


async function getweatherdata() {

    navigator.geolocation.getCurrentPosition(async (pos) => {
        geoData = pos.coords;

        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${geoData.latitude}&lon=${geoData.longitude}&unit=metric&appid=42f800c8ccd9cac56ac6171bb8514e8d&units=metric`);



        const data = await res.json();
        console.log(new Date(data.sys.sunrise), new Date(data.sys.sunset))
        const sunrise = new Date(data.sys.sunrise).toLocaleTimeString("en");
        sunriseElement.innerText = sunrise;
        const sunset = new Date(data.sys.sunset).toLocaleTimeString("en");
        sunsetElement.innerText = sunset;
        windElement.innerText = `${data.wind.speed}km/h`;
        tempElement.innerText = `${data.main.temp}°C`;
        zoneElement.innerText = data.name;
        descriptionElement.innerText = `${data.weather[0].description}`;
        
        // const icones= await fetch( `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        //console.log(icones);

        mainIconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    });



    // if(geoData){
    //     res2= await fetch(
    //         `https://api.openweathermap.org/data/2.5/forecast?lat=${geoData.latitude}&lon=${geoData.longitude}&appid=42f800c8ccd9cac56ac6171bb8514e8d&units=metric`);

    // }
    // else{
    //     res2= await fetch(
    //         `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=42f800c8ccd9cac56ac6171bb8514e8d&units=metric`);

    // }
    // const work= await res2.json();
    // for(let index=0;index<5 ;index++){
    // document.createElement('div')
    // days[index].tail.min.innerText=`${work.List[index].main.temp_min}`;
    // days[index].tail.max.innerText=`${work.List[index].main.temp_max}`;
    //icones[index].src= `https://openweathermap.org/img/wn/${work.List[index].weather.icon}@2x.png`;
    // const element = work.List[index];
    // const dayCard = document.createElement("div");
    // daysElementArray.push(dayCard);
    // dayCard.className = "day-card";
    // const imgWeather = document.createElement("img");
    // imgWeather.src = `https://openweathermap.org/img/wn/${work.List[0].weather.icon}@2x.png`;
    // imgWeather.className = "bts-icon";
    // dayCard.appendChild(imgWeather);
    // const h2element = document.createElement("h2");
    // h2element.className = "day";
    // h2element.innerText = days[new Date(element.dt * 1000).getDay()];
    // dayCard.appendChild(h2element);
    // const minmax = document.createElement("div");
    // minmax.className = "min-max";
    // const maxElement = document.createElement("max");
    // maxElement.className = "max";
    // const maxIcon = document.createElement("div");
    // maxIcon.className = "min-max-icon";
    // const maxfontIcon = document.createElement("i");
    // maxfontIcon.className = "fa-solid fa-sort-up";
    // maxIcon.appendChild(maxfontIcon);
    // const maxP = document.createElement("p");
    // maxP.innerText = `${Math.floor(element.temp.max)}°C`;
    // maxElement.appendChild(maxIcon);
    // maxElement.appendChild(maxP);

    // const minElement = document.createElement("min");
    // minElement.className = "min";
    // const minIcon = document.createElement("div");
    // minIcon.className = "min-max-icon";
    // const minfontIcon = document.createElement("i");
    // minfontIcon.className = "fa-solid fa-sort-down";
    // minIcon.appendChild(minfontIcon);
    // const minP = document.createElement("p");
    // minP.innerText = `${Math.floor(element.temp.min)}°C`;

    // minElement.appendChild(minIcon);
    // minElement.appendChild(minP);

    // minmax.appendChild(maxElement);
    // minmax.appendChild(minElement);
    // dayCard.appendChild(minmax);
    // dailyForcastElement.appendChild(dayCard);






}
getweatherdata();