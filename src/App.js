import './App.css';
import { useEffect, useCallback } from 'react';
import TrackPage from './component/pages/TrackPage'
import Navbar from './component/feature/Navbar';

import { TokenProvider, useTokenContext } from './component/context/Token'
import { TracksProvider } from './component/context/Tracks'
import { PlaylistProvider, usePlaylistContext } from './component/context/Playlist';
import { parseHash } from './utility/helper';
import { getStorage, setStorage } from './utility/storage';
import { getProfile, getUserPlaylist } from './utility/api';

function App() {
  const { setToken, setUser } = useTokenContext()
  const {setPlaylist} = usePlaylistContext()

  const getCurrentUser = useCallback(
    async () => {
    const { data } = await getProfile()
    setUser(data)
  },[setUser])

  const getCurrentUserPlaylist = useCallback(
    async () => {
      const { data } = await getUserPlaylist()
      setPlaylist(data.items)
    },[setPlaylist]
  )

  useEffect(() => {
    const hash = window.location.hash
    let token = getStorage("token")

    if (!token && hash) {
      token = parseHash(hash)
      window.location.hash = ""
      setStorage("token", token)
    }

    setToken(token)
    
    if(token){
      getCurrentUser()
      getCurrentUserPlaylist()
    }
  },[setToken, getCurrentUser, getCurrentUserPlaylist])

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
        <PlaylistProvider>
          <App />
        </PlaylistProvider>
      </TracksProvider>
    </TokenProvider>
  )
}

export default AppContainer;
