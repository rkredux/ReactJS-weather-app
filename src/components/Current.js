import React, { Component } from 'react';
import Temperature from "./Temperature.js"; 
import Location from "./Location.js"; 
import Time from "./Time.js"


class Current extends Component{
	render(){
		return(
			<div className="row secondrow">
			    <Temperature temp={this.props.temperature}></Temperature>
				<Location place={this.props.location}></Location>
				<Time time={this.props.time}></Time>
			</div>
			)
	}
}

export default Current; 
