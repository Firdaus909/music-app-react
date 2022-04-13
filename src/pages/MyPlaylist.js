import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavbarComponent from '../component/NavbarComponent';
import MyPlaylistCard from '../component/MyPlaylistCard';

function MyPlaylist() {
  const playlist = useSelector((state) => state.tracks.userPlaylist);
  const user = useSelector((state) => state.user.user);

  return (
    <div className="pb-3 bg-dark">
      <NavbarComponent />
      <div>
        <Container style={{ minHeight: '100vh' }}>
          <h1 className="my-4 text-white">
            {user && `${user.display_name}'s Playlist`}
          </h1>
          <Row xs={1} md={2} lg={4} className="g-3">
            {playlist.length > 0 ? (
              playlist.map((pl) => <MyPlaylistCard key={pl.id} playlist={pl} />)
            ) : (
              <div className="text-white">
                You have no saved tracks.{' '}
                <Link className="text-decoration-none text-info" to="/create">
                  Create One
                </Link>
              </div>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MyPlaylist;
