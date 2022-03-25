import logo from './logo.svg';
import './App.css';
import Track from './component/Track';

const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY;

function App() {
  return (
    <Track />
  );
}

export default App;
