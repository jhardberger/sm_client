import React, { Component } from 'react';
import { Grid, Button, Input, Label, Form, Checkbox, Image } from 'semantic-ui-react';

class MoldContainer extends Component {
	constructor(){
		super();
		this.state = {
			newMold: {
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
	}

	handleValueChange = (e) => {
		if(e.currentTarget.name === 'title'){
			console.log(e.currentTarget, '<---- string');
			this.setState({
				newMold: {
					[e.currentTarget.name]: e.currentTarget.value
				}
			})
		}else{
			console.log(e.currentTarget.children[0].name, '<----- bool');
			let value = null; 
			if(e.currentTarget.attributes.class === 'ui checked fitted checkbox'){
					value = false; 
				}else{
					value = true; 
				}
			this.setState({
				newMold: {
					[e.currentTarget.children[0].name]: value
				}
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
				<Form id='form' onSubmit={this.props.addMold.bind(null, this.state)}>
					<div id='inputs'>
						<Form.Input type='string' name='title' placeholder='give this thang a title' onChange={this.handleValueChange} />
						This playlist is going to be...
								<Label>Acoustic</Label>
								<Checkbox name='acoustic' onChange={this.handleValueChange} />
								<Label>Electric</Label><br />

								<Label>Danceable</Label>
								<Form.Checkbox name='danceable' onChange={this.handleValueChange} />
								<Label>...Not so Much</Label><br />

								<Label>High Energy</Label>
								<Form.Checkbox name='energetic' onChange={this.handleValueChange} />
								<Label>Chill</Label><br />

								<Label>Instrumental</Label>
								<Form.Checkbox name='instrumental' onChange={this.handleValueChange} />
								<Label>Vocals</Label><br />

								<Label>Live</Label>
								<Form.Checkbox name='live' onChange={this.handleValueChange} />
								<Label>Studio</Label><br />

								<Label>Spoken Word</Label>
								<Form.Checkbox name='spoken' onChange={this.handleValueChange} />
								<Label>Sung Straight Up</Label><br />

								<Label>Major</Label>
								<Form.Checkbox name='upbeat' onChange={this.handleValueChange} />
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
