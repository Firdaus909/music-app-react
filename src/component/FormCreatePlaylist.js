import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { tracksAction } from '../store/tracks-slice';
import { addItems, postPlaylist } from '../utils/api';

function FormCreatePlaylist() {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errMsg, setErrMsg] = useState('Please Type Something');

  const user = useSelector((state) => state.user.user);
  const selectedTracks = useSelector((state) => state.tracks.selectedTracks);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    if (!errMsg) {
      const playlistData = {
        title,
        description,
      };
      const userID = user.id;
      const {
        data: { id },
      } = await postPlaylist(userID, playlistData);
      await addItems(id, selectedTracks);

      dispatch(tracksAction.setSelectedTracks([]));
      setTitle('');
      setDescription('');
      window.location = '/myplaylist';
    }
  };

  const handleTitle = (e) => {
    const { value } = e.target;
    setTitle(value);
    if (!value) {
      setErrMsg('Please Type Something');
    } else if (value.length < 10) {
      setErrMsg('Type At Least 10 Characters');
    } else {
      setErrMsg('');
    }
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="w-50 m-auto mt-4"
    >
      <Form.Group className="mb-4">
        <Form.Label className="text-white fs-4">Playlist Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={handleTitle}
          required
          minLength={10}
        />
        <Form.Control.Feedback type="invalid" className="text-center fs-6">
          {errMsg}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white fs-4">
          Playlist Description
        </Form.Label>
        <Form.Control
          as="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ resize: 'none', height: '10rem' }}
        />
      </Form.Group>
      <Form.Group className="text-center">
        <Button type="submit" className="w-50 mt-3">
          Create Playlist
        </Button>
      </Form.Group>
    </Form>
  );
}

export default FormCreatePlaylist;
