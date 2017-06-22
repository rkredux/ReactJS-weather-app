import React, { Component } from 'react';


class Conditions extends Component{
	render(){
		return(
			<div className="row thirdrow">
			  <p>{this.props.wind}</p>
			  <p>{this.props.humidity}</p>
			  <p>{this.props.humidity}</p>
			</div>
			)
	}
}

export default Conditions; 
