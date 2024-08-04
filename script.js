const API_KEY='509d79a85c5ca7ebcb5e2d122c312799'
const form=document.querySelector('form')
const search=document.querySelector('#search')
const weather=document.querySelector('#weather')

// const API=http://api.weatherapi.com/v1/current.json?key=42c1fa5871fc47a0942121528240108&q=india&aqi=no

const getWeather=async(city)=>{
  weather.innerHTML=`<h1>Loading...</h1>`
    const url=`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city}&units=metric`

    const response=await fetch(url);
      const data=await response.json()
      return showWeather(data)
        // console.log(data);
}

const showWeather =(data)=>{
  console.log(data)
  if(data.cod =="404"){
    weather.innerHTML=`<h1>City Not Found </h1>`
    return;

  }
  
   weather.innerHTML=`
       <div>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
        </div>
        <div>
              <h1>${data.main.temp} C</h1>
              <h2>${data.weather[0].main}</h2>
        </div>
  `
}
form.addEventListener('submit', function(event){
 
    
    getWeather(search.value);
    event.preventDefault();

})