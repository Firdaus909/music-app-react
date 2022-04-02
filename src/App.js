import './App.css';
import TrackPage from './component/pages/TrackPage'
import { TokenProvider } from './component/context/Token'
import { TracksProvider } from './component/context/Tracks'
import Navbar from './component/feature/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <TrackPage />
    </>
  );
}

const AppContainer = () => {
  return (
    <TokenProvider>
      <TracksProvider>
        <App />
      </TracksProvider>
    </TokenProvider>
  )
}

export default AppContainer;
