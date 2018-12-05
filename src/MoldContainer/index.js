import React, { Component } from 'react';
import { Grid, Button, Label } from 'semantic-ui-react';
import { Slider } from 'react-semantic-ui-range'


class MoldContainer extends Component {
	constructor(){
		super();
		this.state = {
			value1: 4,
			value: 0
		}
	}

	handleValueChange(e, {value}){
		this.setState({
			value: value
		})
	}

	render(){
		const settings = {
			start: this.state.value1,
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
				<p>
					<Slider discrete color='red' settings={settings}/>
				</p>
				<Label color="red">{this.state.value1}</Label>

			</Grid.Column>
		)
	}
}
export default MoldContainer;
