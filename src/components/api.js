import axios from "axios"; 


function fetchWeatherData(latitude, longitude){

	let weatherObject;
	console.log(weatherObject);  

	const endPoint = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=06f1ff51df983fcf30dcf9fc0c363485`; 
	axios.get(endPoint)
	     .then(function(response){
	       const info = response.data;
	       console.log(info);  
	       weatherObject = {city: info.name, date:info.dt, windSpeed:info.wind.speed, currentTemp:info.main.temp, humidity: info.main.humidity, iconIndicator: info.weather[0].main, iconDescription: info.weather[0].description};  
	       console.log(weatherObject);        
	     }).catch(function(error){
	     	console.log(error); 
	     }); 

	console.log(weatherObject); 
}


export default fetchWeatherData; 


