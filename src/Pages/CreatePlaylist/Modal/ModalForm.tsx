import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, FormikHelpers as FormikActions } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import Services from '../../../services/service';
import { trackAction } from '../../../store/slice/trackSlice';
import ModalCard from './ModalCard';

interface modalProps {
  onClose: () => void;
  isOpen: boolean;
}

interface Values {
  name: string;
  description: string;
  collaborative: boolean;
  public: boolean;
}

const ModalForm: FC<modalProps> = ({ onClose, isOpen }) => {
  const user = useAppSelector((state) => state.user.user);
  const selectedTracks = useAppSelector((state) => state.track.selectedTracks);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleSubmit = async (params: Values) => {
    if (user) {
      const userID = user.id;
      try {
        const {
          data: { id },
        } = await Services.postPlaylist(userID, params);
        await Services.addItems(
          id,
          selectedTracks.map((tr) => tr.uri)
        );
        dispatch(trackAction.setSelectedTrack([]));
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log(err.message);
        }
      }
    }
  };

  return (
    <Modal onClose={onClose} size="xl" isOpen={isOpen}>
      <ModalOverlay />
      <Formik
        initialValues={{
          name: '',
          description: '',
          collaborative: false,
          public: false,
        }}
        onSubmit={async (
          values: Values,
          { resetForm }: FormikActions<Values>
        ) => {
          setIsLoading(true);
          await handleSubmit(values);
          setIsLoading(false);
          resetForm();
          history.push('/my-playlist');
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .required('Please Type Something!')
            .min(10, 'Type At Least 10 Characters'),
        })}
      >
        {(formik) => (
          <ModalContent
            as="form"
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <ModalHeader>Create Playlist</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl pos="relative" isInvalid={!!formik.errors.name}>
                <FormLabel>Playlist Name</FormLabel>
                <Input
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange('name')}
                  _focus={{ outline: 'none' }}
                />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  rows={3}
                  resize="none"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange('description')}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Selected Tracks</FormLabel>
                <Box
                  h="20rem"
                  mt={2}
                  overflowY="scroll"
                  css={{
                    '&::-webkit-scrollbar': {
                      width: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                      width: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: 'cyan',
                      borderRadius: '24px',
                    },
                  }}
                >
                  {selectedTracks.map((st) => (
                    <ModalCard key={st.id} tracks={st} />
                  ))}
                </Box>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" colorScheme="cyan" disabled={isLoading}>
                {isLoading ? 'Please Wait...' : 'Create Playlist'}
              </Button>
            </ModalFooter>
          </ModalContent>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalForm;
