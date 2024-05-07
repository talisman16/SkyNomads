import React from 'react';
import { Box, Flex, Spacer, Button, Icon, Text } from '@chakra-ui/react';
import { AiFillMail } from 'react-icons/ai';

const Navbar = () => {
  return (
    <Box
      bgGradient="linear(to-r, teal.300, blue.500)"
      boxShadow="md"
      px={4}
      py={3}
      transition="all 0.3s"
      _hover={{ boxShadow: 'lg' }}
    >
      <Flex alignItems="center">
        <Box p="2">
          <Flex alignItems="center">
            <Icon as={AiFillMail} boxSize={6} color="white" />
            <Text ml="2" fontSize="xl" fontWeight="bold" color="white" transition="all 0.3s" _hover={{ color: 'teal.200' }}>
              SkyNomads
            </Text>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Button
            colorScheme="whiteAlpha"
            variant="ghost"
            mr={4}
            fontSize="sm"
            transition="all 0.3s"
            _hover={{ bg: 'teal.200', color: 'white' }}
          >
            About
          </Button>
          <Button
            colorScheme="whiteAlpha"
            variant="ghost"
            mr={4}
            fontSize="sm"
            transition="all 0.3s"
            _hover={{ bg: 'teal.200', color: 'white' }}
          >
            Reservations
          </Button>
          <Button
            colorScheme="whiteAlpha"
            variant="ghost"
            fontSize="sm"
            transition="all 0.3s"
            _hover={{ bg: 'teal.200', color: 'white' }}
          >
            Login
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
