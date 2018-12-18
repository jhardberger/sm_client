import React, { Component } from 'react';
import { Grid, Button, Input, Label, Form, Checkbox, Image } from 'semantic-ui-react';

class MoldContainer extends Component {
	constructor(){
		super();
		this.state = {
	        title: '',
		    seed_song_id: '',
		    acoustic: true,
		    danceable: true,
		    energetic: true,
		    instrumental: true,
		    live: true,
		    spoken: true,
		    upbeat: true,  
		}
	}

	handleValueChange = (e) => {
		if(e.currentTarget.name === 'title'){
			console.log(e.currentTarget, '<---- string');
			this.setState({
				[e.currentTarget.name]: e.currentTarget.value
			})
		}else{
			console.log(e.currentTarget.attributes.class.value, '<----- checked?');
			let value = true; 
			if(e.currentTarget.attributes.class.value === "ui checked fitted slider checkbox"){
				value = true; 
				console.log(value, '<----- true?');
			}else{
				value = false; 
				console.log(value, '<----- false?');
			}
			console.log(e.currentTarget.children[0].name, '<----- attribute');
			this.setState({
				[e.currentTarget.children[0].name]: value
			})
		}
		console.log(this.state, '<------ moldcontainer state');
	}

	render(){
	
		return(
			<div>
				<h3>Current Grind</h3>
				<div id='seed_container'>
					<img src={this.props.currentSeed.albumArt} height='60' />
					<p>
		      			<b>{this.props.currentSeed.name}</b><br/> 
		      			{this.props.currentSeed.artist} 
          			</p>
	          	</div>
				<Form class='form' onSubmit={this.props.addMold.bind(this, this.state)}>
					<div class='inputs'>
						<Form.Input type='string' name='title' placeholder='give this thang a title' onChange={this.handleValueChange} />
							This playlist is going to be...<br />
							<Label>Acoustic</Label>
							<Form.Checkbox name='acoustic' onChange={this.handleValueChange} slider/>
							<Label>Electric</Label><br />

							<Label>Danceable</Label>
							<Form.Checkbox name='danceable' onChange={this.handleValueChange} slider/>
							<Label>...Not so Much</Label><br />

							<Label>High Energy</Label>
							<Form.Checkbox name='energetic' onChange={this.handleValueChange} slider/>
							<Label>Chill</Label><br />

							<Label>Instrumental</Label>
							<Form.Checkbox name='instrumental' onChange={this.handleValueChange} slider/>
							<Label>Vocals</Label><br />

							<Label>Live</Label>
							<Form.Checkbox name='live' onChange={this.handleValueChange} slider/>
							<Label>Studio</Label><br />

							<Label>Spoken Word</Label>
							<Form.Checkbox name='spoken' onChange={this.handleValueChange} slider/>
							<Label>Sung Straight Up</Label><br />

							<Label>Major</Label>
							<Form.Checkbox name='upbeat' onChange={this.handleValueChange} slider/>
							<Label>Minor</Label><br />
						<br />
					</div>
					<Button type='submit'>Save</Button>
				</Form>
			</div>
		)
	}
}
export default MoldContainer;
