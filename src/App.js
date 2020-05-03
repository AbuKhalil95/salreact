import React from 'react';
import logo from './logo.svg';
import './App.css';
import MusicList from './musicList';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header>
          <h1> This Music List</h1>
        </header>
        <main></main>
        <nav></nav>
				<MusicList></MusicList>
        <footer>© 2020 MusicApp</footer>
      </div>
    )
  }
}

export default App;
