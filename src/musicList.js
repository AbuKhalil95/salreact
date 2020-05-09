import React, { Component } from 'react';



// fetch(url, opts)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.error);

// import data from "./data"; 
var url = 'http://127.0.0.1:8000/graphql/';

class MusicList extends Component {

	constructor(props) {
		super(props);
	 
		this.state = {
		  hits: [],
		  
		};
		
	}
	  
	  componentDidMount() {

		const query = 
			`query {
				artists(first:6){
				  artist
				  album
				  trackName
				  logoUrl
				}
			}`;	

		const opts = {
		method: "POST",
		headers: { 
			"Content-Type": "application/json",
			"Accept": 'application/json' },
		body: JSON.stringify({ query })
		};
		fetch(url, opts)
		  .then(response => response.json())
		  .then(json => this.setState({ hits: json.data.artists }, console.log(json)));
	  }
	render() {
		const { hits } = this.state;
		console.log(hits)
	    return (
		<div className="grid">
				{hits.map((hit,i) =>
					<div key={i} className="module">
						<div className="song" style={{backgroundImage: `url(${hit.logoUrl})`}}>
							{/* <span className="url">{i+1}</span> */}
							<div className="glassPane"></div>
							<div className="dropdown-content">
								<div className="desc">
									<p id="artist">{hit.artist}</p>
									<p id="album">Album: {hit.album}</p>
									<p id="track">Track: {hit.trackName}</p>
								</div>
							</div>
						</div>
					</div>
				)}
		</div>
	    );
	  }
} 
export default MusicList;