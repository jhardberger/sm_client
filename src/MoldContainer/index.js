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
			acousticness_value: 0,
			danceability_value: 0,
			energy_value: 0,
			instrumentalness_value: 0,
			liveness_value:0,
			loudness_value: 0,
			speechiness_value: 0,
			tempo_value: 0,
			valence_value: 0
		}
		this.getAudioFeatures = this.props.getAudioFeatures.bind(this);
	}

	handleValueChange(e, {value}){
		this.setState({
			acousticness_value: value,
			danceability_value: value,
			energy_value: value,
			instrumentalness_value: value,
			liveness_value:value,
			loudness_value: value,
			speechiness_value: value,
			tempo_value: value,
			valence_value: value		})
		console.log(this.state);
	}

	render(){
		const settings = {
			start: this.state.songFeatures.acousticness, //migrate these into each slider
			min: 0,
			max: 10,
			step: .001,
		}
		return(
			<Grid.Column id='molds' width={1}>
				<h3>Molds baby</h3>
				<Button onClick={this.getAudioFeatures}>
					cl features 
				</Button>
				<Form>
					<Label>Title TK</Label>
					<Label>acousticness</Label>
					<Form.Input type='number' name='acousticness' value={this.state.songFeatures.acousticness}/>
					<Label>danceability</Label>
					<Form.Input type='number' name='danceability' value={this.state.songFeatures.danceability}/>
					<Label>energy</Label>
					<Form.Input type='number' name='energy' value={this.state.songFeatures.energy}/>
					<Label>instrumentalness</Label>
					<Form.Input type='number' name='instrumentalness' value={this.state.songFeatures.instrumentalness}/>
					<Label>liveness</Label>
					<Form.Input type='number' name='liveness' value={this.state.songFeatures.liveness}/>
					<Label>loudness</Label>
					<Form.Input type='number' name='loudness' value={this.state.songFeatures.loudness}/>
					<Label>speechiness</Label>
					<Form.Input type='number' name='speechiness' value={this.state.songFeatures.speechiness}/>
					<Label>tempo</Label>
					<Form.Input type='number' name='tempo' value={this.state.songFeatures.tempo}/>
					<Label>valence</Label>
					<Form.Input type='number' name='valence' value={this.state.songFeatures.valence}/>

				</Form>

				<div id='sliders'>
					<Slider color='red' onChange={this.handleValueChange.bind(this)} value={this.state.songFeatures.acousticness} settings={{
						start: this.state.songFeatures.acousticness,
						min: 0,
						max: 10,
						step: .001 
					}}/>
            		<Label color='red'>{this.state.songFeatures.acousticness}</Label>
					<br/>
					
				</div>
			</Grid.Column>
		)
	}
}
export default MoldContainer;
