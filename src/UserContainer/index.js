import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';


class UserContainer extends Component {
	constructor(){
		super();
	}
	nowPlaying = () => {
		if(this.props.nowPlaying){
			return (
				<div id='nowPlaying'>
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
