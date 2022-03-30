import {useState, useEffect} from 'react'

import './style.css'

function generateRandomKey(length) {
    let result = ''
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charLength = char.length
    
    for(let i=0; i<length; i++){
        result += char.charAt(Math.floor(Math.random() * 
        charLength))
    }

    return result
}

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI
const AUTH_ENPOINT = process.env.REACT_APP_SPOTIFY_AUTHORIZE_ENDPOINT
const RESPONSE_TYPE = 'token'
const SCOPE = 'playlist-modify-private'
const STATE =  generateRandomKey(16)

const SPOTIFY_AUTH_URL = `${AUTH_ENPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&state=${STATE}`

const Navbar = () => {
  const [token,setToken] = useState("")

  useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      if(!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash=""
          window.localStorage.setItem("token", token)
      }

      setToken(token)
  }, [])

  const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
      document.location.reload(true)
  }

  return (
    <div className="navbar">
        <div className="navbar-logo">
            <a href="/">Browntify</a>
        </div>
        <div className="navbar-nav">
            {!token ? (
                <a className='btn' href={SPOTIFY_AUTH_URL}>Login</a>
            ) : (
                <button onClick={logout}>Logout</button>
            )}
        </div>
    </div>
  )
}

export default Navbar