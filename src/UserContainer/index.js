import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';


class UserContainer extends Component {
	constructor(props){
		super();
	}
	nowPlaying = () => {
		console.log(this.props, '<-----UC props');
		if(this.props.nowPlaying){
			return (
				<div id='nowPlaying' onClick={this.props.retrieveSong.bind(null, this.props.nowPlaying)}>
	          		<img src={this.props.nowPlaying.albumArt} style={{ height: 100 }}/>
	          		<div> 
	          			<h3>Now Playing</h3>
	          			<p>
		          			<b>{this.props.nowPlaying.name}</b><br/> 
		          			{this.props.nowPlaying.artist} 
		          		</p>
	          		</div>
	          	</div>
			)
		}
	}
	render(){
		return(

			<Grid.Row id='user'>
				{this.nowPlaying()}
			</Grid.Row>
			
		)
	}
}
export default UserContainer;
