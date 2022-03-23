import logo from './logo.svg';
import './App.css';
import data from './dataAlbum/single-sample';

const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY;

function App() {
  return (
    <div className="App">
    <h1 className='title'>Song Playlist</h1>
      <div className="album">
        <div className="album-image">
          <img src={data.album.images[0].url} />
        </div>
        <div className="album-info">
          <h1>{data.name}</h1>
          <h4>{data.artists[0].name} - {data.album.name}</h4>
          <button>Select</button>
        </div>
      </div>
    </div>
  );
}

export default App;
