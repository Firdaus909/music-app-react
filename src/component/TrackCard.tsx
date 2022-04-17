import React, { FC } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../store';
import { trackAction } from '../store/tracks-slice';
import { Item } from '../type/TrackType';

interface trackProps {
  track: Item;
}

const TrackCard: FC<trackProps> = ({ track }) => {
  const { album, name, artists, uri } = track;
  const selectedTracks = useAppSelector((state) => state.tracks.selectedTracks);
  const dispatch = useAppDispatch();

  const handleSelect = () => {
    const selected = selectedTracks?.find((turi) => turi === uri);
    let newSelected;
    if (!selected) {
      newSelected = [...selectedTracks, uri];
    } else {
      newSelected = selectedTracks?.filter((turi) => turi !== uri);
    }
    dispatch(trackAction.setSelectedTracks(newSelected));
  };

  const isSelected = selectedTracks?.find((turi) => turi === uri);

  return (
    <Col>
      <Card className="text-center h-100">
        <Card.Img variant="top" src={album.images[0].url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {artists[0].name} - {album.name}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button onClick={handleSelect} className="w-100">
            {isSelected ? 'Deselect' : 'Select'}
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default TrackCard;
