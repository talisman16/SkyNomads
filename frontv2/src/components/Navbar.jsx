import React from 'react';
import { Box, Flex, Button, Icon, Text } from '@chakra-ui/react';
import { AiFillMail } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <Box
      bg="teal.500"
      boxShadow="md"
      px={4}
      py={3}
      transition="all 0.3s"
      _hover={{ boxShadow: 'lg' }}
    >
      <Flex alignItems="center" justifyContent="center">
        <Box p="2">
          <Flex alignItems="center">
            <Icon as={AiFillMail} boxSize={6} color="white" />
            <Text ml="2" fontSize="xl" fontWeight="bold" color="white" transition="all 0.3s" _hover={{ color: 'teal.200' }}>
              SkyNomads
            </Text>
          </Flex>
        </Box>
        <Box ml={4}>
          {/* Use Link components to navigate to different routes */}
          <Link to="/about">
            <Button
              colorScheme="teal"
              variant="outline"
              borderWidth="2px"
              borderColor="teal.200"
              fontSize="sm"
              fontWeight="bold"
              transition="all 0.3s"
              _hover={{ bg: 'teal.200', color: 'white' }}
              mx={2}
            >
              About
            </Button>
          </Link>
          <Link to="/register">
            <Button
              colorScheme="blue"
              variant="outline"
              borderWidth="2px"
              borderColor="blue.200"
              fontSize="sm"
              fontWeight="bold"
              transition="all 0.3s"
              _hover={{ bg: 'blue.200', color: 'white' }}
              mx={2}
            >
              Register
            </Button>
          </Link>
          <Link to="/login">
            <Button
              colorScheme="orange"
              variant="outline"
              borderWidth="2px"
              borderColor="orange.200"
              fontSize="sm"
              fontWeight="bold"
              transition="all 0.3s"
              _hover={{ bg: 'orange.200', color: 'white' }}
              mx={2}
            >
              Login
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
