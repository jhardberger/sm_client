import React from 'react';
import { Grid, List, Image } from 'semantic-ui-react';

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
				<List.Item key={song._id} onClick={props.retrieveSong.bind(null, song)}>
					<Image Avatar src={song.album.images[0].url} height='60' />
					<List.Content>
						<List.Header>{song.name}</List.Header>
						{song.artists[0].name} 
					</List.Content>
				 
				</List.Item>
			)
			
		})
		return songs
	})	
	return(
		<Grid.Column id='library' width={7}>
			<div>
				<h3>All your favorite songs</h3>
				<List id='songsArea'>
					{topSongsArr}
				</List>	
			</div>
		</Grid.Column>
		)
}
export default Library;
