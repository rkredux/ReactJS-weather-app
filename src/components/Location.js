import React, { Component } from 'react';


class Location extends Component{
	render(){
		return(
			<div className="location">
			<p>{this.props.place}</p>
			</div>
			)
	}
}

export default Location; 
