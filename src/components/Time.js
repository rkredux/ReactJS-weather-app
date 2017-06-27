import React, { Component } from 'react';
import {getDateString} from "./Utils.js"; 


class Time extends Component{
	render(){
		return(
			<div className="time">
			  <p>{getDateString()}</p>
			</div>
			)
	}
}

export default Time; 
