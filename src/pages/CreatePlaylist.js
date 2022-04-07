import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import NavbarComponent from '../component/NavbarComponent'
import SearchBar from '../component/SearchBar'
import TrackCard from '../component/TrackCard'
import FormCreatePlaylist from '../component/FomCreatePlaylist'

function CreatePlaylist() {
  const [isSearched, setIsSearched] = useState(false)
  const tracks = useSelector((state) => state.tracks.tracks)
  const selectedTracks = useSelector((state) => state.tracks.selectedTracks)

  return (
    <div className='bg-dark pb-4'>
      <NavbarComponent />
      <div>
        <Container style={{ minHeight: '100vh' }}>
          <h1 className='my-4 text-white'>Create New Playlist</h1>
          <SearchBar setIsSearched={setIsSearched} />
          <Row xs={1} md={2} lg={4} className="g-4 mt-3">
            {isSearched ? tracks.length > 0 ? tracks.map((tr) => (
              <TrackCard
                key={tr.id}
                track={tr}
              />
            )) : (
              <div className='text-white text-center m-auto fs-6'>No Tracks Found</div>
            ) : (<></>)}
          </Row>
          {selectedTracks.length > 0 && (
            <FormCreatePlaylist />
          )}
        </Container>
      </div>
    </div>
  )
}

export default CreatePlaylist