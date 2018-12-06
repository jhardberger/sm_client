import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';


class UserContainer extends Component {
	render(){
		return(

			<Grid.Row id='user'>
          		<img src={this.props.nowPlaying.albumArt} style={{ height: 100 }}/>
          		<div> 
          			<h3>Now Playing</h3>
          			<p id='nowPlaying'>
	          			<b>{this.props.nowPlaying.name}</b><br/> 
	          			{this.props.nowPlaying.artist} 
	          		</p>
          		</div>
			</Grid.Row>
			
		)
	}
}
export default UserContainer;
