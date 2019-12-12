import React, { Component } from 'react';
import StationList from '../StationList';
import { Grid } from 'semantic-ui-react';

class TripContainer extends Component {
	constructor(props){
		super(props);

		this.state = {
			originStationsList: [],
			destinationStationsList: [],
			// stations: [],
			// stationsList: [],
			// line_color: "",
			// direction: ""
		}
	}

	componentDidMount(){
		// this.listStationsByColor(this.props.selectTrainColorOrigin, this.state.selectTrainColorDestination)
		this.getStations(this.state.stations)
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
			// console.log("parsedStations");
			// console.log(parsedStations);
			this.setState({
				stations: parsedStations.data // importing all the stations thru here!
			});
		console.log("this.state -- getStations")
		console.log(this.state);
		} catch (err) {
			console.log(err);
		}
	}

	listStationsByColor = async (tripInfo) => {
		// console.log("in listStationsByColor, here's tripInfo")
		// console.log(tripInfo)
		// console.log(tripInfo.DirectionOrigin); // this keeps coming back undefined ????? WHYYYYYLKEJDKLFHASK:LDFN<
		// console.log(tripInfo.ColorOrigin); // this too
		// console.log(tripInfo.ColorDestination);
		console.log(this.state.originStationsList);
		console.log(this.state.destinationStationsList);
		const getOriginStationsListResponse = await fetch(process.env.REACT_APP_API_URL + "/api/v1/stations/" + tripInfo.ColorOrigin + "/" + tripInfo.DirectionOrigin, {
        	credentials: "include"
		})
		const originStationListParsed = await getOriginStationsListResponse.json()
		this.setState({
			originStationsList: originStationListParsed.data
		})
		// console.log(originStationListParsed);
		// only send color and direction info to the api
		// the origin info is ONLY for the front end
		const getDestinationStationsListResponse = await fetch(process.env.REACT_APP_API_URL + "/api/v1/stations/" + tripInfo.ColorDestination + "/" + tripInfo.DirectionDestination, {
        	credentials: "include"
		})
		const destinationStationListParsed = await getDestinationStationsListResponse.json()
		this.setState({
			destinationStationsList: destinationStationListParsed.data
		})
		// console.log(destinationStationListParsed);
		// put all the above in a condional where if the array of stations IS NOT an empty array, DO NOT do the query
		// IN OTHER WORDS:
		// if you already got all the origin stations, AND if the 'origin' field in the tripInfo is 'true', 
		// DO NOT do the query to get the origin stations again
	}

	//findStations = () => {
			// after getting parsed response, if origin from function argument is true,  
	// }

	createYourTrip = (infoForTrip) => {
		console.log('this is INFO FOR TRIP >>>>>>>', infoForTrip);
	// 	// get stuff from the origin and do query to get origin station
		// const createdTripResponse = await fetch(process.env.REACT_APP_API_URL + "/api/v1/trips/" + tripInfo.ColorOrigin + "/" + tripInfo.DirectionOrigin, {
	 //        	credentials: "include"
		// })
	// 		const originStationListParsed = await getOriginStationsListResponse.json()
	// 		this.setState({
	// 			originStations: originStationListParsed.data
	// 	// get stuff from the destination and do query to get destination station
	// 	const getDestinationStationsListResponse = await fetch(process.env.REACT_APP_API_URL + "/api/v1/stations/" + tripInfo.ColorDestination + "/" + tripInfo.DirectionDestination, {
 //        	credentials: "include"
	// 	})
	// 	// put it in state
	}

	render(){
		return(
			<Grid>
				<div>
					<h1>uCommute!</h1>
					<h3>Welcome back!</h3>
					<h3>Plan Your Trip!</h3>
				</div>
				<StationList
					setOrigin={this.setOrigin}
					setDestination={this.setDestination}
					stationsList={this.state.stationsList}
					listStationsByColor={this.listStationsByColor}
					createYourTrip={this.createYourTrip}
					originStationsList={this.state.originStationsList}
					destinationStationsList={this.state.destinationStationsList}
				/>

			</Grid>
		)
	}
}


export default TripContainer


