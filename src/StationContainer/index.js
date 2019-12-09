import React, { Component } from 'react';
import StationList from '../StationList';
import { Grid, Dropdown } from 'semantic-ui-react';

class StationContainer extends Component {
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

	render(){
		return(
			<Grid>
				<div>
					<h1>uCommute!</h1>
				</div>
				<StationList
					stations={this.state.stations}
				/>

			</Grid>
		)
	}

}

export default StationContainer