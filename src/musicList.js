import React, { Component } from 'react';
// import data from "./data"; 
var url = 'http://127.0.0.1:8000/music/?format=json';

class MusicList extends Component {

	constructor(props) {
		super(props);
	 
		this.state = {
		  hits: [],
		  
		};
		
	  }
	  
	  componentDidMount() {
		fetch(url)
		  .then(response => response.json())
		  .then(data => this.setState({ hits: data }, console.log(data)));
	  }
	render() {
		const { hits } = this.state;
	 
	    return (
	      <ul>
			{hits.map((hit,i) =>
				<div key={i} className="musiclist">
					<span className="dot">{i+1}</span>
					<li>
					<p>Artist Name: {hit.artist}</p>
					<p>Album: {hit.album}</p>
					<p>Track: {hit.track_name}</p>
					</li>
				</div>
	        )}
	      </ul>
	    );
	  }

	// render() {
	// 	return (
	// 		<div className="musiclist">
	// 			{
	// 				artists.map((artist, i) => {
	// 					return (
	// 						<div key={i} className="artists">
	// 							<div>
	// 								<a href={artist.url}>
	// 									<img src={artist	.logo} alt={artist.name} />
	// 								</a>
	// 								<div className="detailedList">
	// 									<div>
	// 										<a href={artist.url}>{artist.name}</a>
	// 									</div>
	// 										{artist.albums.map(function (albums, i) { 
	// 											return <div key={i} >
	// 												<h5>{albums.title}</h5>
	// 												{albums.tracks.map((tracks, i) => { 
	// 													return <div key={i} >
	// 														<p>{tracks}</p>
	// 														</div>
	// 												})}
	// 											</div>
	// 										})}
	// 								</div>
	// 							</div>
	// 						</div>
	// 					);
	// 				})
	// 			}
	// 		</div>
	// 	);
	// }
	
	// render() {
	// 	return (
    //         <div className="musiclist">
    //             {
	// 				data.Artists.map((artist, i) => {
	// 					return (
	// 						<div key={i} className="artists">
	// 							<div>
	// 								<a href={artist.url}>
	// 									<img src={artist.logo} alt={artist.name} />
	// 								</a>
	// 								<div className="detailedList">
	// 									<div>
	// 										<a href={artist.url}>{artist.name}</a>
	// 									</div>
	// 										{artist.albums.map(function (albums, i) { 
	// 											return <div key={i} >
	// 												<h5>{albums.title}</h5>
	// 												{albums.tracks.map((tracks, i) => { 
	// 													return <div key={i} >
	// 														<p>{tracks}</p>
	// 														</div>
	// 												})}
	// 											</div>
	// 										})}
	// 								</div>
	// 							</div>
	// 						</div>
	// 					);
	// 				})
	// 			}
    //         </div>
    //     );
    // }
} 
export default MusicList;