import React, { Component } from 'react';
import StationList from '../StationList';
import TripList from '../TripList';
import { Grid } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
// import TripEditModal from '../TripEditModal'

class TripContainer extends Component {
	constructor(props){
		super(props);

		this.state = {
			originStationsList: [],
			destinationStationsList: [],
			createdTrips: [],
			// editModalOpen: true,
			// tripToEdit: {
			// 	ColorOrigin: '',
			// 	DirectionOrigin: '',
			// 	ColorDestination: '',
			// 	DirectionDestination: '',
			// 	originStation: '',
			// 	destinationStation: '',
			// 	id: ''
			// }
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
			this.setState({
				stations: parsedStations.data // importing all the stations thru here!
			});
		} catch (err) {
			console.log(err);
		}
	}

	listStationsByColor = async (tripInfo) => {
		console.log("in listStationsByColor, here's tripInfo")
		console.log(tripInfo)
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

	createYourTrip = async (infoForTrip) => {
		console.log('this is INFO FOR TRIP >>>>>>>', infoForTrip);
	// get stuff from the origin and do query to get origin station
		// get stuff from the destination and do query to get destination station
		try{
			const createdTripResponse = await fetch(process.env.REACT_APP_API_URL + "/api/v1/trips/" + infoForTrip.originStation + "/" + infoForTrip.destinationStation, {
					method: 'POST',
		        	credentials: "include",
		        	body: JSON.stringify(infoForTrip),
		        	headers: {
		        		'Content-Type': 'application/json'
		        	}
			})
		// put it in state
			const createdTripParsed = await createdTripResponse.json()
				this.setState({
					createdTrips: [...this.state.createdTrips, createdTripParsed.data]
			})
			console.log(createdTripParsed);
		} catch(err){
			console.log("Couldn't make the trip.");
			console.log(err);
		}
	}

	deleteTrip = async (id) => {
		// deleting trip from database
		console.log('this is CREATEDTRIPLIST', this.state.createdTrips);
		const deleteTripResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/trips/' + id, {
				method: 'DELETE',
				credentials: 'include'
		})
		const deletedTripParsed = await deleteTripResponse.json()
		// deletes trip from state
		this.setState({
			createdTrips: this.state.createdTrips.filter((createdTrip) => createdTrip.id !== id)})
	}

	editTrip = (idOfTripToEdit) => {
		const tripToEdit = this.state.createdTrips.find(createdTrip => createdTrip.id === idOfTripToEdit)
		this.setState({
			editModalOpen: true,
			tripToEdit: {
				...tripToEdit
			}
		})
	}

	handleEditChange = (event) => {
		this.setState({
			tripToEdit: {
				...this.state.tripToEdit,
			[event.target.name]: event.target.value
			}
		})
	}

	updateTrip = async (e) => {
		e.preventDefault()
		try {
			const url = process.env.REACT_APP_API_URL + '/api/v1/trips' + this.state.tripToEdit.id

			const updateResponse = await fetch(url, {
				method: 'PUT',
				credentials: 'include',
				body: JSON.stringify(this.state.tripToEdit),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			const updateResponseParsed = await updateResponse.json()

			const newTripArrayWithUpdate = this.state.createdTrips.map((createdTrip) => {
				if(createdTrip.id === updateResponseParsed.data.id){

				createdTrip = updateResponseParsed.data
				}
			return createdTrip
			})
			this.setState({
				createdTrips: newTripArrayWithUpdate
			})
		}
		catch (err) {
			console.log(err)
		}
	}

	closeModal = () => {
	this.setState({
		editModalOpen: false
		})
	}

	render(){
		return(
			<Grid>
				<Grid.Row>
				<div>
					<h1>uCommute!</h1>
					<h3>Welcome back!</h3>
					<h3>Plan Your Trip!</h3>
				</div>
					<Grid.Column>
						<StationList
							setOrigin={this.setOrigin}
							setDestination={this.setDestination}
							stationsList={this.state.stationsList}
							listStationsByColor={this.listStationsByColor}
							createYourTrip={this.createYourTrip}
							originStationsList={this.state.originStationsList}
							destinationStationsList={this.state.destinationStationsList}
						/>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>				
						<TripList
							createdTrips={this.state.createdTrips}
							deleteTrip={this.deleteTrip}
							editTrip={this.editTrip}
						/>
					</Grid.Column>
				</Grid.Row>			
			</Grid>
		)
	}
}


export default TripContainer


