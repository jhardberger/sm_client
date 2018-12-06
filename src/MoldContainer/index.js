import React, { Component } from 'react';
import { Grid, Button, Input, Label, Form, Checkbox, Image } from 'semantic-ui-react';

class MoldContainer extends Component {
	constructor(){
		super();
		// this.state = {
		// 	title: '',
  //       	acoustic: false,
	 //        danceable: false,
	 //        energetic: false,
	 //        instrumental: false,
	 //        live: false,
	 //        spoken: false,
	 //        upbeat: false,      
		// }
	}

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

	render(){
	
		return(
			<div>
				<h3>Current Grind</h3>
				<img src='' />
				<Form id='form' onSubmit={this.props.addMold.bind(null, this.state)}>
					<div id='inputs'>
						<Form.Input type='string' name='title' placeholder='give this thang a title' onChange={this.handleValueChange} />
						<p>This playlist is going to be...</p>
							<Grid.Row class='slider'>
								<Label class='left'>Acoustic</Label><Checkbox class='middle' name='acoustic' onChange={this.handleValueChange} slider /><Label class='right'>Electric</Label><br />
							</Grid.Row>
							<Grid.Row class='slider'>
								<Label class='left'>Danceable</Label><Checkbox class='middle' name='danceable' onChange={this.handleValueChange} slider /><Label class='right'>...Not so Much</Label><br />
							</Grid.Row>
							<Grid.Row class='slider'>
								<Label class='left'>High Energy</Label><Checkbox class='middle' name='energetic' onChange={this.handleValueChange} slider /><Label class='right'>Chill</Label><br />
							</Grid.Row>
							<Grid.Row class='slider'>
								<Label class='left'>Instrumental</Label><Checkbox class='middle' name='instrumental' onChange={this.handleValueChange} slider /><Label class='right'>Vocals</Label><br />
							</Grid.Row>
							<Grid.Row class='slider'>
								<Label class='left'>Live</Label><Checkbox class='middle' name='live' onChange={this.handleValueChange} slider /><Label class='right'>Studio</Label><br />
							</Grid.Row>
							<Grid.Row class='slider'>
								<Label class='left'>Spoken Word</Label><Checkbox class='middle' name='spoken' onChange={this.handleValueChange} slider /><Label class='right'>Sung Straight Up</Label><br />
							</Grid.Row>
							<Grid.Row class='slider'>
								<Label class='left'>Major</Label><Checkbox class='middle' name='upbeat' onChange={this.handleValueChange} slider /><Label class='right'>Minor</Label><br />
							</Grid.Row>
						<br />
					</div>
					<Button type='submit'>Save</Button>
				</Form>
			</div>
		)
	}
}
export default MoldContainer;
