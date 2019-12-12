import React from 'react';
import { List, Button } from 'semantic-ui-react';

function TripList(props){
	// process to list the trips
	const tripStops = props.createdTrips.map((tripStop, index) => {
		return(
			// <h3> { tripStop.station_name } </h3>
				<List>
					<List.Item id={index} key={index}>
							<h3 id={index}> { tripStop.start.station_name} >>> {tripStop.end.station_name}</h3>
					</List.Item>
					<List.Item extra>
							<Button onClick={() => props.deleteTrip(tripStop.id)}>Delete</Button>
							<Button>Edit</Button>
					</List.Item>
				</List>
		)
	})
	return(
		<List>
			<h3>Below are your trips:</h3>
			{ tripStops }
		</List>
	)
}

export default TripList