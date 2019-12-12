// import React from 'react'
// import { Form, Button, Label, Header, Modal } from 'semantic-ui-react';

// function TripEditModal(props) {

// 	const colorArr = ["Orange", "Red", "Blue", "Green", "Pink", "Brown", "Purple", "Yellow"]
// 	const lines = []
// 	for (const [index, value] of colorArr.entries()){
// 		lines.push(
// 			<option key={index}>
// 			{value}
// 			</option>)
// 	}

// 	// this is for the direction dropdown
// 	const directionArr = ["Outbound", "Inbound"]
// 	const direction = []
// 	for (const [index, value] of directionArr.entries()){
// 		direction.push(
// 			<option key={index}>
// 				{value}
// 			</option>)
// 	}

// 		// lineStations contains the JSON with the requested train stops from the database
// 	const destinationLineStations = props.destinationStationsList
// 	const destinationStations = destinationLineStations.map(destinationStation => {
// 		return(
// 			<option 
// 				key={destinationStation.id} 
// 				id={destinationStation.id} 
// 				value={destinationStation.id}
// 			>
// 				{destinationStation.station_name}
// 			</option>
// 		)
// 	})

// 	const originLineStations = props.originStationsList
// 	const originStations = originLineStations.map(originStation => {
// 		return(
// 			<option 
// 				key={originStation.id} 
// 				id={originStation.id} 
// 				value={originStation.id}
// 			>
// 				{originStation.station_name}
// 			</option>
// 		)
// 	})


// 	return(
// 		<Modal open={props.open} closeIcon onClose={props.closeModal}>
// 				<Modal.Content>
// 					<Form>
// 						<h2>Origin</h2>
// 						<h3>Select Line:</h3>
// 						<select 
// 							name="ColorOrigin" 
// 							className="selectLine" 
// 							onChange={props.handleEditChange} 
// 							value={props.tripToEdit.ColorOrigin}>
// 							<option>---</option>
// 							{ props.lines }
// 						</select>
// 						<h3>Direction:</h3>
// 						<select 
// 							name="DirectionOrigin" 
// 							className="direction" 
// 							onChange={props.handleEditChange} 
// 							value={props.tripToEdit.DirectionOrigin}>
// 							<option>---</option>
// 							{ props.direction}
// 						</select>
// 						<h3>Select Station:</h3>
// 						<select 
// 							name="originStation" 
// 							className="stationList" 
// 							onChange={props.handleEditChange} 
// 							value={props.tripToEdit.originStation}>
// 							<option>---</option>
// 							{ props.originStations }
// 						</select>			
// 						<h1>Destination</h1>
// 						<Label>Select Line:</Label>
// 						<select 
// 							name="ColorDestination" 
// 							className="selectLine" 
// 							onChange={props.handleEditChange} 
// 							value={props.tripToEdit.ColorDestination}>
// 							<option>---</option>
// 							{ props.lines }
// 						</select>
// 						<Label>Direction:</Label>
// 						<select 
// 							name="DirectionDestination" 
// 							className="direction" 
// 							onChange={props.handleEditChange} 
// 							value={props.tripToEdit.DirectionDestination}>
// 							<option>---</option>
// 							{ props.direction }
// 						</select>
// 						<Label>Select Station:</Label>
// 						<select 
// 							name="destinationStation" 
// 							className="stationList" 
// 							onChange={props.handleEditChange} 
// 							value={props.tripToEdit.destinationStation}>
// 							<option>---</option>
// 							{ props.destinationStations }
// 						</select>
// 					<Modal.Actions>
// 						<Button 
// 						color="blue" 
// 						type="Submit">
// 						Update Trip!
// 						</Button>
// 					</Modal.Actions>
// 				</Form>
// 			</Modal.Content>
// 		</Modal>
// 	)
// }
				// this goes in the trip container for the edit feature
				// <TripEditModal
				// 	open={this.state.editModalOpen}
				// 	updateTrip={this.updateTrip}
				// 	tripToEdit={this.state.tripToEdit}
				// 	closeModal={this.closeModal}
				// 	handleEditChange={this.handleEditChange}
				// 	ColorOrigin={this.state.ColorOrigin}
				// 	DirectionOrigin={this.state.DirectionOrigin}
				// 	ColorDestination={this.state.ColorDestination}
				// 	DirectionDestination={this.state.DirectionDestination}
				// 	originStation={this.state.originStation}
				// 	originStationsList={this.state.originStationsList}
				// 	destinationStationsList={this.state.destinationStationsList}
				// > 


// export default TripEditModal