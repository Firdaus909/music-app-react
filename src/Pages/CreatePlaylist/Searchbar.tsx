import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import {
  HStack,
  FormControl,
  Input,
  Button,
  Flex,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Formik, FormikHelpers as FormikActions } from 'formik';
import * as Yup from 'yup';
import Services from '../../services/service';
import { useAppDispatch } from '../../store/hooks';
import { trackAction } from '../../store/slice/trackSlice';

interface Values {
  q: string;
  limit: string;
  type: string;
  market: string;
}

interface searchbarProps {
  setError: Dispatch<SetStateAction<string>>;
  setIsSearched: Dispatch<SetStateAction<boolean>>;
}

const Searchbar: FC<searchbarProps> = ({ setError, setIsSearched }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleSearch = async (params: Values) => {
    try {
      const { data } = await Services.searchTracks(params);
      dispatch(trackAction.setTrack(data));
      setIsSearched(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        const errMsg = err.message;
        setError(errMsg);
      }
    }
  };

  return (
    <Flex>
      <Formik
        initialValues={{ q: '', limit: '10', type: 'track', market: 'ID' }}
        onSubmit={async (
          values: Values,
          { resetForm }: FormikActions<Values>
        ) => {
          setIsLoading(true);
          await handleSearch(values);
          setIsLoading(false);
          resetForm();
        }}
        validationSchema={Yup.object({
          q: Yup.string().required('Please Type Something!'),
        })}
      >
        {(formik) => (
          <HStack
            as="form"
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <FormControl pos="relative" isInvalid={!!formik.errors.q}>
              <Input
                name="q"
                value={formik.values.q}
                onChange={formik.handleChange('q')}
                _focus={{ outline: 'none' }}
                bg="whiteAlpha.700"
              />
              <FormErrorMessage pos="absolute" top="2rem" left="0.5rem">
                {formik.errors.q}
              </FormErrorMessage>
            </FormControl>
            <Button type="submit" bg="whiteAlpha.700" disabled={isLoading}>
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
          </HStack>
        )}
      </Formik>
    </Flex>
  );
};

export default Searchbar;
