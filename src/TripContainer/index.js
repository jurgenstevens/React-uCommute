import React, { Component } from 'react';
import TripList from '../TripList';
import { Grid, Dropdown } from 'semantic-ui-react';

class TripContainer extends Component {
	constructor(props){
		super(props);

		this.state = {
			stations: []
		}
	}

	componentDidMount(){
		this.getStations();
	}

	// let's get some stations from the database here!
	getStations = async () => {
		try {
			const stations = await fetch(
				process.env.REACT_APP_API_URL + "/api/v1/stations/", {
					credentials: "include"
				}
			)
			const parsedStations = await stations.json();
			// console.log(parsedStations);
			this.setState({
				stations: parsedStations.data // importing all the stations thru here!
			});
		} catch (err) {
			console.log(err);
		}
	}


	// EVERYTHING BELOW WILLBE IN THE TRIP CONTAINER

	listLineColors = async () => {
	// organize stations by colors
	// display them in drop down

	}

	listStationsByColor = async () => {
	// display stations by color chosen
	// have them display in the drop down


	}

	// duplicate and set them as origin and destination
	setOrigin = async () => {

	}

	setDestination = async () => {

	}

	// once the values are chosen, have them set in the create trip container to create a trip
	createTheTrip = async () => {
	// when trip is created, it will loop between the origin and destination in the show page

	}

	updateTrip = async () => {
	// in the show page it will give the user the option to edit/update the trip


	}

	saveTrip = async () => {
	// or save the trip. 
	// If the user clicks "Save Trip", it will display in the saved trips show page


	}

	render(){
		return(
			<Grid>
				<div>
					<h1>uCommute!</h1>
					<h3>Welcome back!</h3>
					<h3>Plan Your Trip!</h3>
				</div>
				<TripList
					stations={this.state.stations}
				/>

			</Grid>
		)
	}

}

export default TripContainer


