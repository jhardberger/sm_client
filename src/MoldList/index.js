import React from 'react';
import { Card, Button, Label, Icon } from 'semantic-ui-react';

const MoldList = (props) => {
	const molds = props.molds.map((mold, i) => {
		console.log(mold, '<---- mold list');
		const createAcTag = () => {
			if(mold.acoustic === true){
				return(<Label onClick={props.openAndEdit.bind(null, mold)} name='acoustic' as='a' tag>Acoustic</Label>)	
			}else{
				return(<Label onClick={props.openAndEdit.bind(null, mold)} name='Electric' as='a' color='grey' tag>Electric</Label>)	
			}
		}
		const createDanceTag = () => {
			if(mold.danceable === true){
				return(<Label onClick={props.openAndEdit.bind(null, mold)} name='danceable' as='a' tag>Danceable</Label>)	
			}else{
				return(<Label onClick={props.openAndEdit.bind(null, mold)} name='Not-So-Danceable' as='a' color='grey' tag>Not-So-Dancy</Label>)	
			}
		}
		const createEnTag = () => {	
			if(mold.energetic === true){
				return(<Label onClick={props.openAndEdit.bind(null, mold)} name='high-energy' as='a' tag>High Energy</Label>)	
			}else{
				return(<Label onClick={props.openAndEdit.bind(null, mold)} name='chill' as='a' color='grey' tag>Chill</Label>)	
			}
		}
		const createInstTag = () => {
			if(mold.instrumental === true){
				return(<Label onClick={props.openAndEdit.bind(null, mold)} name='instrumental' as='a' tag>Instrumental</Label>)	
			}else{
				return(<Label onClick={props.openAndEdit.bind(null, mold)} name='Vocals' as='a' color='grey' tag>Vocals</Label>)	
			}
		}
		const createLiveTag = () => {	
			if(mold.live === true){
				return(<Label onClick={props.openAndEdit.bind(null, mold)} name='live' as='a' tag>Live</Label>)	
			}else{
				return(<Label onClick={props.openAndEdit.bind(null, mold)} name='Studio' as='a' color='grey' tag>Studio</Label>)	
			}
		}
		const createSpokeTag = () => {
			if(mold.spoken === true){
				return(<Label onClick={props.openAndEdit.bind(null, mold)} name='spoken-word' as='a' tag>Spoken Word</Label>)	
			}else{
				return(<Label onClick={props.openAndEdit.bind(null, mold)} name='Singing' as='a' color='grey' tag>Singing</Label>)	
			}
		}

		const createValTag = () => {
				
			if(mold.upbeat === true){
				return(<Label onClick={props.openAndEdit.bind(null, mold)} name='major' as='a' tag>Major</Label>)	
			}else{
				return(<Label onClick={props.openAndEdit.bind(null, mold)} name='minor' as='a' color='grey' tag>Minor</Label>)	
			}
		}

		return(
			<Card key={mold._id}>
				<Card.Content>
					<Card.Header>{mold.title}</Card.Header>
					<Card.Description>
						<div id='tags'>
							{createAcTag()}
							{createDanceTag()}
							{createEnTag()}
							{createInstTag()}
							{createLiveTag()}
							{createSpokeTag()}
							{createValTag()}
						</div>
					</Card.Description>
				</Card.Content>
				<Card.Content extra> 
					<Button onClick={props.getRecommended(mold.seed_song_id)} icon labelPosition='left'><Icon name='play' />Play</Button>
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
