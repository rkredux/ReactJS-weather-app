
export function getDateString(){
	const weekDayMap = {
	  0: "Sun", 
	  1: "Mon", 
	  2: "Tue", 
	  3: "Wed", 
	  4: "Thu", 
	  5: "Fri", 
	  6: "Sat"
	}
	const monthNameMap = {
	  0: "Jan", 
	  1: "Feb",
	  2: "Mar",
	  3: "Apr",
	  4: "May", 
	  5: "June", 
	  6: "Jul", 
	  7: "Aug", 
	  8: "Sep", 
	  9: "Oct", 
	  10: "Nov", 
	  11: "Dec"
	}
	const time = new Date(); 
	const day = time.getDate();
	const dayName = weekDayMap[time.getDay()]; 
	const monthName = monthNameMap[time.getMonth()]; 
	return `${dayName}, ${day} ${monthName}`
}



export function degToDirection(degrees){
    const val = parseInt((degrees/22.5)+.5); 
    const directionList = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]; 
    return directionList[(val % 16)]; 
}

