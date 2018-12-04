import React, { Component } from 'react';
import LibraryContainer from './LibraryContainer';
import MoldContainer from './MoldContainer';

import { Grid } from 'semantic-ui-react';

class MainContainer extends Component {
	render(){
		return(
			<Grid id='main' columns={2} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable> 
				<Grid.Row>
					<Grid.Column id='library'>
						<LibraryContainer />
					</Grid.Column>

					<Grid.Column id='molds'>
						<MoldContainer />
					</Grid.Column>

				</Grid.Row>
			</Grid>
		)
	}
}
export default MainContainer;
