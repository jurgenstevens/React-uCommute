import React from 'react';
import { Card, Button, Grid } from 'semantic-ui-react';

class StationList extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			ColorOrigin: undefined,
			DirectionOrigin: undefined,
			ColorDestination: undefined,
			DirectionDestination: undefined,
			originStation: undefined,
			destinationStation: undefined,
			incompleteForm: false

			// listStationsByColor:
		}
	}
	// f that looks in state and creates a new list of stations based on whatever color is chosen in state
	// or if no color is chosen, grey out the drop down

	handleChange = (e) => {
		console.log("handleChange");

			console.log("CURRENT TARGET >>>>>> ", e.currentTarget.value);
			console.log("TARGET >>>>>> ", e.target.value);
		this.setState({
			[e.target.name]: e.target.value
		}, () => {
			this.checkForTripInfo()	
		})
	}

	// this is for the create a trip button
	handleSubmit = (e) => {
		e.preventDefault()
		if(this.state.ColorOrigin !== undefined && this.state.DirectionOrigin !== undefined && this.state.ColorDestination !== undefined && this.state.DirectionDestination !== undefined) {
			const infoForTrip = {
				originStation: this.state.originStation,
				destinationStation: this.state.destinationStation
			}
			this.props.createYourTrip(infoForTrip)
		}
		else{
			this.setState({
				incompleteForm: true
			})
		}
	}

	// this is for the station dropdown to list all of the stations. Origins cannot
	// be null
	checkForTripInfo = () => {
		console.log("Check for trip info");

		// ORIGIN both color and direction have been selected 
		if(this.state.ColorOrigin && this.state.DirectionOrigin) {
			console.log("ORIGIN both color and direction have been selected ");
			const infoForOriginStations = {
				origin: true,
				ColorOrigin: this.state.ColorOrigin,
				DirectionOrigin: this.state.DirectionOrigin,
			}
			// this is listStationsByColor = async (tripInfo)
			this.props.listStationsByColor(infoForOriginStations)
		}
		// check destination color and direction, if both not null do query for stations and list stations in dropdown which
		// is in TripContainer
		console.log(this.state.ColorDestination);
		console.log(this.state.DirectionDestination);
		if (this.state.ColorDestination && this.state.DirectionDestination ){
			const infoForDestinationStations = {
				origin: true,
				ColorDestination: this.state.ColorDestination,
				DirectionDestination: this.state.DirectionDestination
			}
			console.log('THIS IS INFO FOR DESTINATION', infoForDestinationStations);
			// this is listStationsByColor = async (tripInfo)
			this.props.listStationsByColor(infoForDestinationStations)
		}
	}

	render() {
		// this is for the line color dropdown
		const colorArr = ["Orange", "Red", "Blue", "Green", "Pink", "Brown", "Purple", "Yellow"]
		const lines = []
		for (const [index, value] of colorArr.entries()){
			lines.push(
				<option key={index}>
					{value}
				</option>)
		}

		// this is for the direction dropdown
		const directionArr = ["Outbound", "Inbound"]
		const direction = []
		for (const [index, value] of directionArr.entries()){
			direction.push(
				<option key={index}>
					{value}
				</option>)
		}

		// lineStations contains the JSON with the requested train stops from the database
		const destinationLineStations = this.props.destinationStationsList
		const destinationStations = destinationLineStations.map(destinationStation => {
			return(
				<option 
					key={destinationStation.id} 
					id={destinationStation.id} 
					value={destinationStation.id}
				>
					{destinationStation.station_name}
				</option>
			)
		})

		const originLineStations = this.props.originStationsList
		const originStations = originLineStations.map(originStation => {
			return(
				<option 
					key={originStation.id} 
					id={originStation.id} 
					value={originStation.id}
				>
					{originStation.station_name}
				</option>
			)
		})

		return (
			<Grid.Row>
				<Card.Group>
					<Card.Content>
						{this.state.incompleteForm ?
							<h1>Fill in all fields!</h1>
							: null
						}
						<div className="originDiv">
						<h2>Origin</h2>
						<h3>Select Line:</h3>
						<select 
							name="ColorOrigin" 
							className="selectLine" 
							onChange={this.handleChange} 
							value={this.state.ColorOrigin}>
							<option>---</option>
							{lines}
						</select>
						<h3>Direction:</h3>
						<select name="DirectionOrigin" className="direction" onChange={this.handleChange} value={this.state.DirectionOrigin}>
							<option>---</option>
							{direction}
						</select>
						<h3>Select Station:</h3>
						<select name="originStation" className="stationList" onChange={this.handleChange} value={this.state.originStation}>
							<option>---</option>
							{ originStations }
						</select>
						</div>	
						</Card.Content>
				</Card.Group>				
				<Card.Group>
					<Card.Content>
					<div className="destinationDiv">	
						<h1>Destination</h1>
						<h3>Select Line:</h3>
						<select 
							name="ColorDestination" 
							className="selectLine" 
							onChange={this.handleChange} 
							value={this.state.ColorDestination}>
							<option>---</option>
							{lines}
						</select>
						<h3>Direction:</h3>
						<select 
							name="DirectionDestination" 
							className="direction" 
							onChange={this.handleChange} 
							value={this.state.DirectionDestination}>
							<option>---</option>
							{direction}
						</select>
						<h3>Select Station:</h3>
						<select 
							name="destinationStation" 
							className="stationList" 
							onChange={this.handleChange} 
							value={this.state.destinationStation}>
							<option>---</option>
							{ destinationStations }
						</select>
					</div>
					</Card.Content>
				</Card.Group>
				<Button className="startTripButton" onClick={this.handleSubmit}>Start Trip!</Button>
			</Grid.Row>
		)
	}
}


export default StationList

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





// import React from 'react';
// import { Card, Button, Dropdown } from 'semantic-ui-react';

// function StationList() {
// 	const lineColors = ["Orange", "Red", "Blue", "Blue", "Green", "Pink", "Brown", "Purple", "Yellow"]
// 	const line = lineColors.map((number) =>
// 		<option>{line}</option>
// 	);
// // 	// create an array of the unique colors -- use a loop

// // 	// f that looks in state and creates a new list of stations based on whatever color is chosen in state

// // 	// or if no color is chosen, grey out the drop down

// return (
// 	<Card.Group>
// 		<h1>Origin</h1>
// 		<h3>Select Line:</h3>	
// 		<select className="selectLine">
// 			<option>{line}</option>
// 		</select>
//  		<h3>Select Station:</h3>
//  		<select className="selectStation">

// 		</select>
// 		<h1>Destination</h1>
//  		<h3>Select Line:</h3>
//  		<select className="selectLine">

//  		</select>
//  		<h3>Select Station:</h3>
//  		<select className="selectStation">

//  		</select>
//  	</Card.Group>
//  	)
// }

// export default StationList

// // /*

// // 	<select onChange={handle choose color}>
// // 		<option value="Orange"></option>
// // 		<option value="Red"></option>
// // 		<option value="Blue"></option>
// // 		<option value="Green"></option>
// // 		<option value="Pink"></option>
// // 		<option value="Brown"></option>
// // 		<option value="Purple"></option>
// // 		<option value="Yellow"></option>
// // 	</select>

// // 	<select onChange={handle choose station} >
// // 		<option value=""></option>
// // 	</select>

// // */