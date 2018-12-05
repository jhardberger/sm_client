import React, { Component } from 'react';
import { Grid, Button, Input } from 'semantic-ui-react';
import { Slider } from 'react-semantic-ui-range'


class MoldContainer extends Component {
	constructor(){
		super();
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
				valence: 0
			}
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
	}

	handleValueChange(e, {value}){
		this.setState({
			songFeatures: {
				acousticness: acousticness_value,
				danceability: danceability_value,
				energy: energy_value,
				instrumentalness: instrumentalness_value,
				liveness: liveness_value,
				loudness: loudness_value,
				speechiness: speechiness_value,
				tempo: tempo_value,
				valence: valence_value
			}
		})
	}

	render(){
		const settings = {
			start: this.state.value1, //migrate these into each slider
			min: 0,
			max: 10,
			step: 1,
			onChange: (value) => {
                  this.setState({
                    value1:value
                  })
            }
		}
		return(
			<Grid.Column id='molds' width={1}>
				<h3>Molds baby</h3>
				<Button onClick={this.props.getAudioFeatures}>
					cl features 
				</Button>
				<div id='sliders'>
					<Slider color='red' settings={settings}/>
            		<Input placeholder="Enter Value" onChange={this.handleValueChange.bind(this)}/>
					<br/>
					<Slider color='orange' settings={settings}/>
            		<Input placeholder="Enter Value" onChange={this.handleValueChange.bind(this)}/>
					<br/>

					<Slider color='yellow' settings={settings}/>
            		<Input placeholder="Enter Value" onChange={this.handleValueChange.bind(this)}/>
					<br/>

					<Slider color='green' settings={settings}/>
            		<Input placeholder="Enter Value" onChange={this.handleValueChange.bind(this)}/>
					<br/>

					<Slider color='blue' settings={settings}/>
            		<Input placeholder="Enter Value" onChange={this.handleValueChange.bind(this)}/>
					<br/>

					<Slider color='purple' settings={settings}/>
            		<Input placeholder="Enter Value" onChange={this.handleValueChange.bind(this)}/>
					<br/>

					<Slider color='black' settings={settings}/>
            		<Input placeholder="Enter Value" onChange={this.handleValueChange.bind(this)}/>
					<br/>

				</div>
			</Grid.Column>
		)
	}
}
export default MoldContainer;
