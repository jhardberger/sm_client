import React, { Component } from 'react';
import { Grid, Button, Input, Label, Form } from 'semantic-ui-react';
import { Slider } from 'react-semantic-ui-range'



class MoldContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
	      songFeatures: {
	        acousticness: 0,
	        danceability: 0,
	        energy: 0,
	        instrumentalness: 0,
	        liveness: 0,
	        loudness: 0,
	        speechiness: 0,
	        tempo: 0,
	        valence: 0,      
	    },
			// acousticness_value: 0,
			// danceability_value: 0,
			// energy_value: 0,
			// instrumentalness_value: 0,
			// liveness_value:0,
			// loudness_value: 0,
			// speechiness_value: 0,
			// tempo_value: 0,
			// valence_value: 0
		}
		this.getAudioFeatures = this.props.getAudioFeatures.bind(this);
		this.addMold = this.props.addMold.bind(this);
	}

	// handleValueChange(e, {value}){
	// 	this.setState({
	// 		songFeatures: {
	// 			acousticness: value,
	// 			danceability: value,
	// 			energy: value,
	// 			instrumentalness: value,
	// 			liveness:value,
	// 			loudness: value,
	// 			speechiness: value,
	// 			tempo: value,
	// 			valence: value		
	// 		}
	// 	})
	// 	console.log(this.state, '<-------- state');
	// }

	handleValueChange = (e) => {
		this.setState({
			songFeatures: {
				[e.currentTarget.name]: e.currentTarget.value}
			})
	}

	render(){

		return(
			<Grid.Column id='molds' width={1}>
				<h3>Molds baby</h3>
				<Button onClick={this.getAudioFeatures}>
					cl features 
				</Button>
				<Form onSubmit={this.addMold}>
					<Label>Title</Label>
					<Form.Input type='string' name='title' placeholder='give this thang a title' />
					<Label>acousticness</Label>
					<Form.Input type='number' name='acousticness' value={this.state.songFeatures.acousticness} onChange={this.handleValueChange.bind(this)}/>
					<Label>danceability</Label>
					<Form.Input type='number' name='danceability' value={this.state.songFeatures.danceability} onChange={this.handleValueChange.bind(this)}/>
					<Label>energy</Label>
					<Form.Input type='number' name='energy' value={this.state.songFeatures.energy} onChange={this.handleValueChange.bind(this)}/>
					<Label>instrumentalness</Label>
					<Form.Input type='number' name='instrumentalness' value={this.state.songFeatures.instrumentalness} onChange={this.handleValueChange.bind(this)}/>
					<Label>liveness</Label>
					<Form.Input type='number' name='liveness' value={this.state.songFeatures.liveness} onChange={this.handleValueChange.bind(this)}/>
					<Label>loudness</Label>
					<Form.Input type='number' name='loudness' value={this.state.songFeatures.loudness} onChange={this.handleValueChange.bind(this)}/>
					<Label>speechiness</Label>
					<Form.Input type='number' name='speechiness' value={this.state.songFeatures.speechiness} onChange={this.handleValueChange.bind(this)}/>
					<Label>tempo</Label>
					<Form.Input type='number' name='tempo' value={this.state.songFeatures.tempo} onChange={this.handleValueChange.bind(this)}/>
					<Label>valence</Label>
					<Form.Input type='number' name='valence' value={this.state.songFeatures.valence} onChange={this.handleValueChange.bind(this)}/>
					<Button type='submit'>Save</Button>

				</Form>

			</Grid.Column>
		)
	}
}
export default MoldContainer;
