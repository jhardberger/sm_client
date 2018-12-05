import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';


class UserContainer extends Component {
	render(){
		return(

			<Grid.Row id='user'>
          		<img src={this.props.nowPlaying.albumArt} style={{ height: 150 }}/>
          		<div> 
          			Now Playing: {this.props.nowPlaying.name}, {this.props.nowPlaying.artist} 
          		</div>
			</Grid.Row>
			
		)
	}
}
export default UserContainer;
