// import React from 'react';
// import { Card, Button, Grid } from 'semantic-ui-react';

// class TripList extends React.Component {
// 	constructor(props){
// 		super(props);

// 		this.state = {
// 			stations: []
// 		}
// 	}


// 	// f that looks in state and creates a new list of stations based on whatever color is chosen in state
// 	handleChange = (e) => {
// 		this.setState({

// 		})
// 	}
// 	// or if no color is chosen, grey out the drop down
// 	render() {
// 		const arr = ["Orange", "Red", "Blue", "Blue", "Green", "Pink", "Brown", "Purple", "Yellow"]
// 		const lines = []
// 		for (const [index, value] of arr.entries()){
// 			lines.push(<option key={index}>{value}</option>)
// 		}
// 		return (
// 			<Grid.Row>
// 				<Card.Group>
// 					<Card.Content>
// 						<h1>Origin</h1>
// 						<h3>Select Line:</h3>
// 						<select className="selectLine" onChange={}>
// 							{lines}
// 						</select>
// 						<h3>Select Station:</h3>
// 						<select className="selectLine">
							
// 						</select>					
// 						</Card.Content>
// 					<Card.Content>
// 						<h1>Destination</h1>
// 						<h3>Select Line:</h3>
// 						<select className="selectLine">
// 							{lines}
// 						</select>
// 					</Card.Content>
// 						<h3>Select Station:</h3>
// 						<select className="selectLine" selectLine={}>
							
// 						</select>
// 				</Card.Group>
// 			<Button>Start Trip!</Button>
// 			</Grid.Row>
// 		)
// 	}
// }

	// EVERYTHING BELOW WILLBE IN THE TRIP CONTAINER
	// listLineColors = async () => {
	// // organize stations by colors
	// // display them in drop down

	// }
	// }

	// duplicate and set them as origin and destination
	// setOrigin = async () => {

	// }

	// setDestination = async () => {

	// }

	// once the values are chosen, have them set in the create trip container to create a trip
	// createTheTrip = async () => {
	// when trip is created, it will loop between the origin and destination in the show page
	// }

	// updateTrip = async () => {
	// in the show page it will give the user the option to edit/update the trip


	// }

	// saveTrip = async () => {
	// or save the trip. 
	// If the user clicks "Save Trip", it will display in the saved trips show page
	//}




// export default TripList

// /*

// 	<select onChange={handle choose color}>
// 		<option value="Orange"></option>
// 		<option value="Red"></option>
// 		<option value="Blue"></option>
// 		<option value="Green"></option>
// 		<option value="Pink"></option>
// 		<option value="Brown"></option>
// 		<option value="Purple"></option>
// 		<option value="Yellow"></option>
// 	</select>

// 	<select onChange={handle choose station} >
// 		<option value=""></option>
// 	</select>

// */