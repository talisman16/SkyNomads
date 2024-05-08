import React, { useState, useEffect } from 'react';
import { Box, Flex, Button, Text, Icon } from '@chakra-ui/react';
import { AiFillMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Navbar = ({ userData, logout }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(!!userData); // Initialize userLoggedIn based on userData
  const navigate = useNavigate(); // Access the navigate function from useNavigate hook

  // Watch for changes in userData
  useEffect(() => {
    // Update userLoggedIn whenever userData changes
    setUserLoggedIn(!!userData); // Convert userData to a boolean value
  }, [userData]);

  return (
    <Box
      bg="teal.500"
      boxShadow="md"
      px={4}
      py={3}
      transition="all 0.3s"
      _hover={{ boxShadow: 'lg' }}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Box p="2">
            <Flex alignItems="center">
              <Icon as={AiFillMail} boxSize={6} color="white" />
              <Text ml="2" fontSize="xl" fontWeight="bold" color="white" transition="all 0.3s" _hover={{ color: 'teal.200' }}>
                SkyNomads
              </Text>
            </Flex>
          </Box>
          {/* Always show About link */}
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
        </Flex>
        <Box>
          {userData && userLoggedIn && (
            <Flex alignItems="center">
              <Text fontSize="sm" fontWeight="bold" color="white" mr={2}>
                Welcome {userData.user_prenom}
              </Text>
              {userData.user_email === 'admin@admin.com' && (
                <Link to="/admin">
                  <Button
                    colorScheme="purple"
                    variant="outline"
                    borderWidth="2px"
                    borderColor="purple.200"
                    fontSize="sm"
                    fontWeight="bold"
                    transition="all 0.3s"
                    _hover={{ bg: 'purple.200', color: 'white' }}
                    mx={2}
                  >
                    Admin Panel
                  </Button>
                </Link>
              )}
              <Button
                colorScheme="red"
                variant="outline"
                borderWidth="2px"
                borderColor="red.200"
                fontSize="sm"
                fontWeight="bold"
                transition="all 0.3s"
                _hover={{ bg: 'red.200', color: 'white' }}
                onClick={() => {
                  logout(); // Call the logout function
                  navigate('/login'); // Redirect to /login after logout
                }}
              >
                Logout
              </Button>
            </Flex>
          )}
          {!userLoggedIn && (
            <Flex>
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
            </Flex>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
