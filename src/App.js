import React from 'react';
import './App.css';
import MusicList from './musicList';


class App extends React.Component{


  render() {

    return (
      <div className="App">
        <header>
          <a href="#">
            <img className="logo" src={require('../src/misc/assists/logoC.png')} alt="MusicDB Logo"/>
          </a>
          <div>
            <a href="#" id="profile">
              <p>Profile</p>
              <img className="profile" src={require('../src/misc/assists/profile-icon.png')} alt="MusicDB Profile"/>
            </a>
          </div>
        </header>
        <main>
          <section className="listView">
            <article className="sideView">
              <div className="container">
              <p id="AMP">AMP UP THOSE DBS</p>
              <p id="MAKE">MAKE MUSIC ON THE GO.</p>
              <a href="#">
                <img id="HIT" src={require('../src/misc/assists/hit-it.png')} alt="MusicDB Hit-it"/>
              </a>
              </div>
            </article>
            <article  className="list">
            <MusicList></MusicList>
            </article>
          </section>
          <section className="advert">
            <article className="advContainer">
              <p id="GET">GET PRODUCIN WITH MUSICDB</p>
              <p id="PICK1">PICK YOUR PREFERED INSTRUMENT</p>
              <p id="PICK2">PICK THE INSTRUMENTS YOU NEED TO COMPOSE THE PIECE</p>
              <a href="#">
                <p id="START">START COMPOSING</p> 
              </a>
            </article>
          </section>
        </main>
        <footer>
          <section className="logoLinks">
            <a href="#">
              <img className="logo" src={require('../src/misc/assists/logoW.png')} alt="MusicDB Logo"/>
            </a>
            <article className="Vertlinks">
              <ul>
                <li>
                  <a href="#">
                    <p>PROFILE</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>SIGN IN</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>MUSIC</p>
                  </a>
                </li>
              </ul>
            </article>
          </section>
          <section className="misc">
            <article>
              <ul className="Horzlinks">
                <li>
                  <a href="#">
                  <p>LEGAL</p> 
                  </a>
                </li>
                <li>
                  <a href="#">
                  <p>PRIVACY CENTER</p> 
                  </a>
                </li>
                <li>
                  <a href="#">
                  <p>PRIVACY POLICY</p> 
                  </a>
                </li>
                <li>
                  <a href="#">
                  <p>COOKIES</p> 
                  </a>
                </li>
                <li>
                  <a href="#">
                  <p>ABOUT ADS</p> 
                  </a>
                </li>
              </ul>
            </article>
            <article className="copyright">
            <p>© 2020 MUSICDB</p>
            </article>
          </section>
        </footer>
      </div>
    )
  }
}
export default App;













