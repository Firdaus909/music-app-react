import React, { useEffect } from 'react'
import { useTokenContext } from '../context/Token'
import { generateRandomKey } from '../../helper/generateRandomKey'

import './Navbar.css'

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI
const STATE = generateRandomKey(16)
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=playlist-modify-private&state=${STATE}`

function Navbar() {
  const { token, setToken } = useTokenContext()

  window.addEventListener("beforeunload", () => window.localStorage.clear())

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      let parsed = hash.split('&')[0].split('=')
      token = parsed[parsed.length - 1] ?? null

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }

    setToken(token)
  }, [setToken])

  const login = () => {
    window.location.replace(AUTH_URL)
  }

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
    document.location.reload(true)
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h3>Browntify</h3>
      </div>
      <div className="navbar-nav">
        {token ? (
          <button onClick={logout} className="logout-button">Logout</button>
        ) : (
          <button onClick={login} className="login-button">Login to Spotify</button>
        )}
      </div>
    </div>
  )
}

export default Navbar