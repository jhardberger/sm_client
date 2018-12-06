import React from 'react';
import { Grid } from 'semantic-ui-react';

const Library = (props) => {
	console.log(props.topSongs, '<------- in the library');
	//tried to just map out the props.topSongs arr
	//but for some reason it wouldn't work. 
	//this looks a little funky, but it does the job 
	const topSongsArr = props.topSongs.map((arr, i) => {
		console.log(arr, '<----- here is our array');
		const songs = arr.map((song) => {
			console.log(song, '<------- one song');
			return (
				<li key={song._id}>{song.name}, {song.artists[0].name} </li>
			)
			
		})
		return songs
	})	
	return(
		<Grid.Column id='library' width={6}>
			<h3>All your favorite songs</h3>
			<ol>
				{topSongsArr}
			</ol>	
		</Grid.Column>
		)
}
export default Library;
