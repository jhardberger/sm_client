import React, { Component } from 'react';
import { Grid, Button, Input, Label, Form, Checkbox } from 'semantic-ui-react';

class MoldContainer extends Component {
	constructor(){
		super();
		this.state = {
			title: '',
	    	songFeatures: {
	        	acoustic: false,
		        danceable: false,
		        energetic: false,
		        instrumental: false,
		        live: false,
		        spoken: false,
		        upbeat: false,      
	    	}	
		}
	}

// <Label>acousticness</Label>
// <Form.Input type='number' name='acousticness' value={this.state.songFeatures.acousticness} onChange={this.handleValueChange.bind(this)}/>
		

	handleValueChange = (e) => {
		this.setState({

			songFeatures: {
				[e.currentTarget.name]: e.currentTarget.value
			}
		})
	}

	render(){

		return(
			<div id='molds' width={1}>
				<h3>Molds baby</h3>
				<Button onClick={this.props.getAudioFeatures.bind(this)}>
					cl features 
				</Button>
				<Form onSubmit={this.props.addMold.bind(null, this.state)}>
					<Form.Input type='string' name='title' placeholder='give this thang a title' />
					<p>I'd like my mix to lean...</p>
					<Label>Acoustic</Label><Checkbox slider /><Label>Electric</Label><br />
					<Label>Danceable</Label><Checkbox slider /><Label>...Not so Much</Label><br />
					<Label>High Energy</Label><Checkbox slider /><Label>Chill</Label><br />
					<Label>Instrumental</Label><Checkbox slider /><Label>Vocals</Label><br />
					<Label>Live</Label><Checkbox slider /><Label>Studio</Label><br />
					<Label>Spoken Word</Label><Checkbox slider /><Label>Sung Straight Up</Label><br />
					<Label>Major</Label><Checkbox slider /><Label>Minor</Label><br />
					<br />
					<Button type='submit'>Save</Button>
				</Form>

			</div>
		)
	}
}
export default MoldContainer;
