import { Box, Flex, Heading, Icon, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { useAppSelector } from '../../store/hooks';

const Profile = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <Box minH="calc(100vh - 80px)">
      <Heading textAlign="center" py={4}>
        Profile
      </Heading>
      <Flex flexDir={{ base: 'column', md: 'row' }}>
        <Box p={4}>
          <Image
            mx={{ base: 'auto', md: '3rem', lg: '5rem' }}
            borderRadius="full"
            boxSize="250px"
            src={user?.images[0].url}
            fallbackSrc="https://via.placeholder.com/150"
          />
        </Box>
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          w={{ base: '100%', md: '60%' }}
          p={4}
        >
          <Flex flexDir="column">
            <Box mb="2rem">
              <Heading fontSize="1.5rem" mb={2}>
                Username
              </Heading>
              <Text ml="0.5rem">{user?.display_name}</Text>
            </Box>
            <Box mb="2rem">
              <Heading fontSize="1.5rem" mb={2}>
                Live In (Country)
              </Heading>
              <Text ml="0.5rem">{user?.country || 'Out Of Nowhere'}</Text>
            </Box>
          </Flex>
          <Flex flexDir="column" ml={{ base: '0', md: '5rem' }}>
            <Box mb="2rem">
              <Heading fontSize="1.5rem" mb={2}>
                Total Followers
              </Heading>
              <Text ml="0.5rem">{user?.followers.total}</Text>
            </Box>
            <Box mb="2rem">
              <Heading fontSize="1.5rem" mb={2}>
                Visit Me On
              </Heading>
              <Link ml="0.5rem" href={user?.external_urls.spotify} isExternal>
                Spotify <Icon as={FiExternalLink} />
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Profile;
