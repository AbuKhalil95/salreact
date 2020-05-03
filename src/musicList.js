import React, { Component } from 'react';
import data from "./data"; 

class MusicList extends Component {
	render() {
		return (
            <div className="musiclist">
                {
					data.Artists.map((artist, i) => {
						return (
							<div key={i} className="artists">
								<div>
									<a href={artist.url}>
										<img src={artist.logo} alt={artist.name} />
									</a>
									<div className="detailedList">
										<div>
											<a href={artist.url}>{artist.name}</a>
										</div>
											{artist.albums.map(function (albums, i) { 
												return <div key={i} >
													<h5>{albums.title}</h5>
													{albums.tracks.map((tracks, i) => { 
														return <div key={i} >
															<p>{tracks}</p>
															</div>
													})}
												</div>
											})}
									</div>
								</div>
							</div>
						);
					})
				}
            </div>
        );
    }
} 
export default MusicList;