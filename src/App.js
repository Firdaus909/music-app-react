import logo from './logo.svg';
import './App.css';
import Track from './pages/track';
import Navbar from './pages/navbar';

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

function App() {
  return (
    <>
    <Navbar />
    <Track />
    </>
  );
}

export default App;
