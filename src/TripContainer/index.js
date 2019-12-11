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

	// listStationsByColor = async (line_color, direction) => {
	// console.log(line_color);
	// console.log(direction);
	// // display stations by color chosen and have them display in the drop down
	// 	try {
	// 		const stations = await fetch(process.env.REACT_APP_API_URL + '/api/v1/stations/' + line_color + '/' + direction, 
	// 			{
	// 				method: 'GET',
	// 				credentials: 'include'
	// 			}
	// 			);
	// 		const parsedStationList = await stations.json()
	// 		this.setState({
	// 			stationsList: [...parsedStationList.data]
	// 		}	
	// 	} catch (err){
	// 		console.log(err);
	// 	}
	// }
	// setOrigin = async (e) => {
	// //	if user clicks a color [i] and direction [i]
	// 	this.setState({
	// 		line_color: {},
	// 		direction: {}
	// 	})
	// 	console.log("You set your origin!");
	// }

	// setDestination = async (e) => {
	// //	if user clicks a color [i] and direction [i]
	// 	this.setState({
	// 		line_color: {},
	// 		direction: {}
	// 	})
	// 	console.log("You set your destination!");
	// }

	listStationsByColor = async (tripInfo) => {
		console.log("in listStationsByColor, here's tripInfo")
		console.log(tripInfo)
		console.log(tripInfo.DirectionOrigin); // this keeps coming back undefined ????? WHYYYYYLKEJDKLFHASK:LDFN<
		console.log(tripInfo.ColorOrigin); // this too
		// if(this.props.DirectionOrigin === true && this.props.DirectionDestination === true){

		// };
		// tripInfo has origin, color, and direction
		// if origin is true, you know that the info you're getting form the query is for the origin stations list
		// if(this.props.origin === true && this.props.DirectionOrigin === true){
		// // else, it's for the destination stations list
		const getStationsListResponse = await fetch(process.env.REACT_APP_API_URL + "/api/v1/stations/" + tripInfo.ColorOrigin + "/" + tripInfo.DirectionOrigin, {
        	credentials: "include"
		})
		const stationListParsed = await getStationsListResponse.json()
		console.log(stationListParsed);
	
		// only send color and direction info to the api

		// the origin info is ONLY for the front end

		// put all the above in a condional where if the array of stations IS NOT an empty array, DO NOT do the query
		// IN OTHER WORDS:
		// if you already got all the origin stations, AND if the 'origin' field in the tripInfo is 'true', 
		// DO NOT do the query to get the origin stations again

		/////////////////////////////////////////////////////////
		// try {
		// );
		// const parsedStationList = await stations.json();

		// this.setState({
		// 	stationsList: parsedStationList.data
	 //    });
	 //    console.log("this.state -- listStationsByColor");
	 //    console.log(this.state)
	  // } catch (err) {

	  // }
	}

	//findStations = () => {
			// after getting parsed response, if origin from function argument is true,  
	// }

	createYourTrip = (infoForTrip) => {
		// get stuff from the origin and do query to get origin station
		// get stuff from the destination and do query to get destination station
		// put it in state
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
				/>

			</Grid>
		)
	}
}


export default TripContainer


