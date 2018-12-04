import React, { Component } from 'react';
// import LibraryContainer from './LibraryContainer';
// import MoldContainer from './MoldContainer';

import { Grid } from 'semantic-ui-react';

class MainContainer extends Component {
	constructor(){
		super();
		  this.state = {
      		nowPlaying: { name: 'Not Checked', albumArt: '' }
    	}
	}

	componentDidMount(){
		this.props.getNowPlaying();
		this.props.getTopSongs();
	}

	render(){
		return(
			<div>
				<Grid id='user' columns={1} divided textAlign='center' style={{ height: '20%' }} verticalAlign='top' stackable> 
					<Grid.Row>
					        <a href='http://localhost:8888'> Login to Spotify </a>
					        <div>
					          Now Playing: { this.state.nowPlaying.name }
					        </div>
					        <div>
					          <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
					        </div>
					        <button onClick={() => this.getNowPlaying()}>
					            Check Now Playing
					        </button>
					        
					</Grid.Row>
				</Grid>
				<Grid id='main' columns={2} divided textAlign='center' style={{ height: '80%' }} verticalAlign='top' stackable> 
					<Grid.Row>
						<Grid.Column id='library'>
						</Grid.Column>

						<Grid.Column id='molds'>
						</Grid.Column>

					</Grid.Row>
				</Grid>
			</div>
		)
	}
}
export default MainContainer;
