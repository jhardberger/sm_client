import React, { Component } from 'react';
import { Grid, Button, Input, Label, Form, Checkbox } from 'semantic-ui-react';

class MoldContainer extends Component {
	constructor(){
		super();
		this.state = {
			title: '',
        	acoustic: false,
	        danceable: false,
	        energetic: false,
	        instrumental: false,
	        live: false,
	        spoken: false,
	        upbeat: false,      
		}
	}

// <Label>acousticness</Label>
// <Form.Input type='number' name='acousticness' value={this.state.songFeatures.acousticness} onChange={this.handleValueChange.bind(this)}/>
		

	handleValueChange = (e) => {
		if(e.currentTarget.name === 'title'){
			console.log(e.currentTarget, '<---- string');
			this.setState({
				[e.currentTarget.name]: e.currentTarget.value
			})
		}else{
			console.log(e.currentTarget, '<----- bool');
			// if(e.currentTarget.checked){
			// 		e.currentTarget.value = false;
			// 	}else{
			// 		e.currentTarget.value = true;
			// 	}
			// 	this.setState({
			// 			[e.currentTarget.name]: e.currentTarget.value
			// 	})
			}
	}

	componentDidMount(){
		this.props.getAudioFeatures.bind(this)
		console.log(this.state, '<----- current song');

	}

	render(){
		const checkVal = (feature) => {
			
		}
		return(
			<div id='molds'>
				<h3>Molds baby</h3>
				<Form id='form' onSubmit={this.props.addMold.bind(null, this.state)}>
					<div id='inputs'>
						<Form.Input type='string' name='title' placeholder='give this thang a title' onChange={this.handleValueChange} />
						<p>I'd like my mix to lean...</p>
						<div id='sliders'>
							<Label>Acoustic</Label><Checkbox name='acoustic' onChange={this.handleValueChange} slider /><Label>Electric</Label><br />
							<Label>Danceable</Label><Checkbox name='danceable' onChange={this.handleValueChange} slider /><Label>...Not so Much</Label><br />
							<Label>High Energy</Label><Checkbox name='energetic' onChange={this.handleValueChange} slider /><Label>Chill</Label><br />
							<Label>Instrumental</Label><Checkbox name='instrumental' onChange={this.handleValueChange} slider /><Label>Vocals</Label><br />
							<Label>Live</Label><Checkbox name='live' onChange={this.handleValueChange} slider /><Label>Studio</Label><br />
							<Label>Spoken Word</Label><Checkbox name='spoken' onChange={this.handleValueChange} slider /><Label>Sung Straight Up</Label><br />
							<Label>Major</Label><Checkbox name='upbeat' onChange={this.handleValueChange} slider /><Label>Minor</Label><br />
						</div>
						<br />
					</div>
					<Button type='submit'>Save</Button>
				</Form>

			</div>
		)
	}
}
export default MoldContainer;
