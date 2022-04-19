import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useAppSelector } from '../../store/hooks';

const Profile: FC = () => {
  const user = useAppSelector((state) => state.user.user);

  return <Flex>{user ? user.display_name : 'Stranger'}</Flex>;
};

export default Profile;
