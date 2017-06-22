import React, { Component } from 'react';


class Time extends Component{
	render(){
		return(
			<div className="time">
			  <p>{this.props.time}</p>
			</div>
			)
	}
}

export default Time; 
