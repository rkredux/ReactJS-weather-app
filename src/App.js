import React, { Component } from 'react';
import './App.css';
import Icon from "./components/Icon.js"; 
import Current from "./components/Current.js";
import Conditions from "./components/Conditions.js"; 
import Forecast from "./components/Forecast.js"; 
import Clothing from "./components/Clothing.js";
import "./weather-icons/css/weather-icons.css"; 
import axios from "axios"; 

// import fetchWeatherData from "./components/api.js";






class App extends Component {

  constructor(props){
    super(props); 
    this.state = {
      city: "city", 
      date: "date", 
      windSpeed: "Windspeed", 
      currentTemp: "Temperature",  
      humidity: "Humidity", 
      iconIndicator: "Icon", 
      iconDescription: "Feels Like"
    }; 
      // this.obtainWeatherData = this.obtainWeatherData.bind(this); 
  }





  componentDidMount(){

   if ("geolocation" in navigator) {

    let lat, long; 
    navigator.geolocation.getCurrentPosition((position) => {
            lat = position.coords.latitude;  
            long = position.coords.longitude;             
            const endPoint = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=06f1ff51df983fcf30dcf9fc0c363485`;
            axios.get(endPoint)
                 .then((response) => {
                  const info = response.data; 
                  console.log(info); 
                  const weatherObject = {city: info.name, windSpeed:info.wind.speed, windDirection:info.wind.deg, currentTemp:parseInt(info.main.temp/10), humidity: info.main.humidity, iconIndicator: info.weather[0].main, iconDescription: info.weather[0].description};
                  console.log(weatherObject);
                  this.setState(function(){
                    return weatherObject; 
                  }); 
                 });

          }); 
    } 
    console.log(this.state); 
  }


render() {
    return (
      <div className="image-wrapper">
        <div className="content">

            <Icon></Icon>

            <Current temperature={this.state.currentTemp} location={this.state.city}></Current>
            
            <Conditions wind={this.state.windSpeed} windDirection = {this.state.windDirection} precipitation={this.state.humidity} humidity={this.state.humidity}></Conditions>
          
            <Forecast></Forecast>
       
            <Clothing></Clothing>

        </div>
      </div>
    );
  }


}

export default App;


