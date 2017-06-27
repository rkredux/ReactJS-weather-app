import React, { Component } from 'react';
import { degToDirection } from "./Utils.js"; 


class Conditions extends Component{
	render(){
		return(
			<div className="row thirdrow">
			  <p>{this.props.wind} {degToDirection(this.props.windDirection)}</p>
			  <p>{this.props.humidity}</p>
			  <p>{this.props.humidity}</p>
			</div>
			)
	}
}

export default Conditions; 
