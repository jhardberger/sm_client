import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

const Library = (props) => {
	console.log(props.topSongs, '<------- in the library');
	// const topSongsArr = props.topSongs[0];
	// console.log(topSongsArr, '<--------- songs array i hope?');
	
	const songs = props.topSongs.map((song, i) => {
		console.log(song, '<----- here is a song');
		const oneSong = song.map((oneSong) => {
			console.log(oneSong);
			return (
				<li key={oneSong._id}>{oneSong.name} </li>
			)
			
		})
		return oneSong
	})	
	return(
		<div>
			<h3>All your favorite songs</h3>
			<ol>
				{songs}
			</ol>	
		</div>
		)
}
export default Library;
