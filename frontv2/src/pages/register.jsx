import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import { Box, Flex, Heading, Input, Button, Alert, AlertIcon, Select } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formError, setFormError] = useState(false);
  const [countryOptions, setCountryOptions] = useState([]);

  useEffect(() => {
    // Fetch countries data
    axios.get('https://api.first.org/data/v1/countries')
      .then(response => {
        const countries = response.data.data;
        // Extract country codes and names and format as options
        const options = Object.keys(countries).map(countryCode => ({
          value: countryCode,
          label: countries[countryCode].country,
        }));
        setCountryOptions(options);
      })
      .catch(error => {
        console.error('Error fetching countries data:', error);
      });
  }, []);

  const handleSignUp = () => {
    if (!email || !password || !nom || !prenom || !selectedCountry || !selectedCity || !phoneNumber) {
      setFormError(true);
    } else {
      // Implement sign-up logic
      setFormError(false);
      // Redirect to another page, e.g., dashboard
    }
  };

  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, teal.500, blue.700)"
      position="relative"
      overflow="hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          p={8}
          width="500px"
          height="600px"
          borderRadius={24}
          boxShadow="2xl"
          bg="rgba(255, 255, 255, 0.9)"
          borderColor={formError ? 'red.500' : 'transparent'}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
          zIndex={1}
          opacity={0.9}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box textAlign="center" mb={6}>
              <Heading fontSize="2xl" fontWeight="bold" fontFamily="sans-serif">
                Registration
              </Heading>
            </Box>
          </motion.div>
          {formError && (
            <Alert status="error" mb={6}>
              <AlertIcon />
              Please fill in all fields.
            </Alert>
          )}
          <Box width="100%" textAlign="center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Input
                placeholder="Email"
                size="lg"
                mb={6}
                borderRadius={12}
                isRequired
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                borderColor={formError && !email ? 'red.500' : 'inherit'}
                _focus={{ boxShadow: 'outline' }}
              />
              <Flex justify="space-between">
                <Input
                  placeholder="Nom"
                  size="lg"
                  width="45%" // Adjust width to fit both inputs in one row
                  mr={2} // Add margin-right for spacing between inputs
                  mb={6} // Add margin-bottom to create spacing
                  borderRadius={12}
                  isRequired
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  borderColor={formError && !nom ? 'red.500' : 'inherit'}
                  _focus={{ boxShadow: 'outline' }}
                />
                <Input
                  placeholder="Prenom"
                  size="lg"
                  width="45%" // Adjust width to fit both inputs in one row
                  ml={2} // Add margin-left for spacing between inputs
                  mb={6} // Add margin-bottom to create spacing
                  borderRadius={12}
                  isRequired
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  borderColor={formError && !prenom ? 'red.500' : 'inherit'}
                  _focus={{ boxShadow: 'outline' }}
                />
              </Flex>
              <Input
                placeholder="Password"
                size="lg"
                mb={6}
                type="password"
                borderRadius={12}
                isRequired
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                borderColor={formError && !password ? 'red.500' : 'inherit'}
                _focus={{ boxShadow: 'outline' }}
              />
              <Select
                placeholder="Select your country"
                size="lg"
                mb={6}
                borderRadius={12}
                isRequired
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                borderColor={formError && !selectedCountry ? 'red.500' : 'inherit'}
                _focus={{ boxShadow: 'outline' }}
              >
                {countryOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
              <Input
  placeholder="City"
  size="lg"
  mb={6}
  borderRadius={12}
  isRequired
  value={selectedCity}
  onChange={(e) => setSelectedCity(e.target.value)}
  borderColor={formError && !selectedCity ? 'red.500' : 'inherit'}
  _focus={{ boxShadow: 'outline' }}
/>

           <PhoneInput
              placeholder="Phone Number"
              size="lg"
              mb={6}
              borderRadius={12}
              isRequired
              value={phoneNumber}
              onChange={setPhoneNumber}
              borderColor={formError && !phoneNumber ? 'red.500' : 'inherit'}
              _focus={{ boxShadow: 'outline' }}
              defaultCountry="US"
            />

            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              mb={6} // Add margin-bottom to create spacing
            >
              <Button
                colorScheme="teal"
                size="lg"
                height="14"
                borderRadius={12}
                _hover={{ bg: 'teal.600' }}
                onClick={handleSignUp}
                mx="auto"
              >
                Sign Up
              </Button>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, #4FD1C5, #81E6D9)',
          zIndex: 0,
          borderRadius: '50% 0 50% 0',
          transform: 'scale(2)',
        }}
      />
    </Flex>
  );
};

export default RegisterPage;
