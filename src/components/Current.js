import React, { Component } from 'react';
import Temperature from "./Temperature.js"; 
import Location from "./Location.js"; 
import Time from "./Time.js"


class Current extends Component{
	render(){
		return(
			<div className="row secondrow">
			    <Temperature></Temperature>
				<Location></Location>
				<Time></Time>
			</div>
			)
	}
}

export default Current; 
