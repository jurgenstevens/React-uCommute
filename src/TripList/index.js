import React from 'react';
import { Card, Button, Grid } from 'semantic-ui-react';

function TripList(props){

	// selectLine(e){

	// }

	
	const arr = ["Orange", "Red", "Blue", "Blue", "Green", "Pink", "Brown", "Purple", "Yellow"]
	const lines = []
		for (const [index, value] of arr.entries()){
			lines.push(<option key={index}>{value}</option>)
		}
	// f that looks in state and creates a new list of stations based on whatever color is chosen in state

	// or if no color is chosen, grey out the drop down


	return (
		<Grid.Row>
			<Card.Group>
				<Card.Content>
					<h1>Origin</h1>						
					<h3>Select Line:</h3>
					<select className="selectLine">
						{lines}
					</select>
					<h3>Select Statioin:</h3>
					<select className="selectLine">					
					</select>					
					</Card.Content>
				<Card.Content>
					<h1>Destination</h1>
					<h3>Select Line:</h3>
					<select className="selectLine">
						{lines}
					</select>
			</Card.Content>
				<h3>Select Station:</h3>
				<select className="selectLine">					
				</select>
			</Card.Group>
		<Button>Start Trip!</Button>
		</Grid.Row>
	)
}



export default TripList

/*

	<select onChange={handle choose color}>
		<option value="Orange"></option>
		<option value="Red"></option>
		<option value="Blue"></option>
		<option value="Green"></option>
		<option value="Pink"></option>
		<option value="Brown"></option>
		<option value="Purple"></option>
		<option value="Yellow"></option>
	</select>

	<select onChange={handle choose station} >
		<option value=""></option>
	</select>

*/