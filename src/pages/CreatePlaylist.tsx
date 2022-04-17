import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import NavbarComponent from '../component/NavbarComponent';
import SearchBar from '../component/SearchBar';
import TrackCard from '../component/TrackCard';
import FormCreatePlaylist from '../component/FormCreatePlaylist';
import { useAppSelector } from '../store';

function CreatePlaylist() {
  const [isSearched, setIsSearched] = useState(false);
  const { track, selectedTracks } = useAppSelector((state) => state.tracks);
  const tracks = track?.tracks.items;

  return (
    <div className="bg-dark pb-4">
      <NavbarComponent />
      <div>
        <Container style={{ minHeight: '100vh' }}>
          <h1 className="my-4 text-white">Create New Playlist</h1>
          <SearchBar setIsSearched={setIsSearched} />
          {isSearched && (
            <Row xs={1} md={2} lg={4} className="g-4 mt-3">
              {tracks && tracks.length > 0 ? (
                tracks?.map((tr) => <TrackCard key={tr.id} track={tr} />)
              ) : (
                <div className="text-white text-center m-auto fs-6">
                  No Tracks Found
                </div>
              )}
            </Row>
          )}
          {selectedTracks && selectedTracks.length > 0 && (
            <FormCreatePlaylist />
          )}
        </Container>
      </div>
    </div>
  );
}

export default CreatePlaylist;
