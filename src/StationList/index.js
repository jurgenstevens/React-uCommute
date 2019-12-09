import React from 'react';
import { Card, Button, Dropdown } from 'semantic-ui-react';

function StationList(props){
	// console.log(props);
	const stations = props.stations.map((station) => {
		console.log(station);
		return(
				<Card key={station.id}>
					<Card.Content>
						{ station.line_color + " - " + station.station_name }
					</Card.Content>
				</Card>
			)
	})
	return (
		<Card.Group>
			{ stations }
		</Card.Group>
	)
}


export default StationList