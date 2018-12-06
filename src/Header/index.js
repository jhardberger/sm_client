import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

const HeaderApp = () => {
	return(
		<Header>
			<div id='header'>
	      		<a href='http://localhost:8888' id='spotAuth'> Login to Spotify </a>
				<h1>Beatgrinder</h1>
			</div>
		</Header>
	)
}
export default HeaderApp;
