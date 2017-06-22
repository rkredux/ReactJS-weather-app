import React, { Component } from 'react';


class Temperature extends Component{
	render(){
		return(
			<div className="temperature">
			  <p>{this.props.temp}</p>
			</div>
			)
	}
}

export default Temperature; 
