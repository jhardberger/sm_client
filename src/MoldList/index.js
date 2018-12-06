import React from 'react';
import { Card, Button} from 'semantic-ui-react';

const MoldList = (props) => {
	const molds = props.molds.map((mold, i) => {
		return(
			<Card key={mold._id}>
				<Card.Content>
					<Card.Header>{mold.title}</Card.Header>
					<Card.Description>{mold.songFeatures}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<Button onClick={props.openAndEdit.bind(null, mold)}>Edit</Button>
          			<Button onClick={props.deleteMold.bind(null, mold._id)}>Delete</Button>
				</Card.Content>
			</Card>
		)
	})
	return(
		<div id='all-molds'>
			<h3>All Molds</h3>
			<Card.Group>
				{molds}
			</Card.Group>
		</div>
	)
}
export default MoldList;
