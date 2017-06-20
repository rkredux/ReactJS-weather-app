import React, { Component } from 'react';
import './App.css';
import Icon from "./components/Icon.js"; 
import Current from "./components/Current.js";
import Conditions from "./components/Conditions.js"; 
import Forecast from "./components/Forecast.js"; 
import Clothing from "./components/Clothing.js";
import "./weather-icons/css/weather-icons.css"; 
import fetchWeatherData from "./components/api.js";
// import axios from "axios"; 
// import jsonp from "jsonp"; 
// import fetchJsonp from "fetch-jsonp"; 
// import ajax from "jquery"; 








class App extends Component {

  constructor(props){
    super(props); 
  }



componentDidMount(){
  if ("geolocation" in navigator) {
   navigator.geolocation.getCurrentPosition(function(position){
     const lat = position.coords.latitude, 
           long = position.coords.longitude;     
     console.log(fetchWeatherData(lat, long)); 
   })
} else {
  console.log("API not available"); 
}
}


render() {
    return (
      <div className="image-wrapper">
        <div className="content">

            <Icon></Icon>

            <Current></Current>
            
            <Conditions></Conditions>
          
            <Forecast></Forecast>
       
            <Clothing></Clothing>

        </div>
      </div>
    );
  }
}

export default App;


