import React, { useState } from 'react';
import axios from 'axios';
import { Box, Flex, Heading, Input, Button, Alert, AlertIcon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { InputGroup, InputRightElement } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import useUserData from '../DATA/useUserData'; // Correct import filename


const PasswordInput = ({ showPassword, handleClick, setPassword }) => (
  <InputGroup size="md" mb={6}>
    <Input
      pr="4.5rem"
      type={showPassword ? 'text' : 'password'}
      placeholder="Password"
      borderRadius={12}
      isRequired
      _focus={{ boxShadow: 'outline' }}
      onChange={(e) => setPassword(e.target.value)}
    />
    <InputRightElement width="4.5rem">
      <Button h="1.75rem" size="sm" onClick={handleClick}>
        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
      </Button>
    </InputRightElement>
  </InputGroup>
);

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setUserData } = useUserData(); 

  const handleSignIn = async () => {
    try {
      if (!email || !password) {
        setFormError(true);
        return;
      }

      const response = await axios.post('http://localhost:8080/users/login', {
        user_email: email,
        user_password: password
      });

      if (response.status === 200) {
        const userData = response.data;
        console.log("Login response:", userData);
        localStorage.setItem('userData', JSON.stringify(userData));
        setUserData(userData); // Use the setUserData function from the hook
        setFormError(false);
        navigate('/welcome');
        window.location.reload();
      } else {
        console.error('Login failed:', response);
        setFormError(true);
      }
    } catch (error) {
      console.error('Login failed:', error);
      setFormError(true);
    }
  };

  return (
    <Flex minHeight="100vh" alignItems="center" justifyContent="center" bgGradient="linear(to-r, teal.500, blue.700)" position="relative" overflow="hidden">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <Box p={8} width="500px" height="auto" borderRadius={24} boxShadow="2xl" bg="rgba(255, 255, 255, 0.9)" borderColor={formError ? 'red.500' : 'transparent'} display="flex" flexDirection="column" justifyContent="center" alignItems="center" position="relative" zIndex={1} opacity={0.9}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Box textAlign="center" mb={6}>
              <Heading fontSize="2xl" fontWeight="bold" fontFamily="sans-serif" color="teal.600">Flight Reservation</Heading>
            </Box>
          </motion.div>
          {formError && (
            <Alert status="error" mb={6}>
              <AlertIcon />
              Login failed. Please check your credentials.
            </Alert>
          )}
          <Box width="100%" textAlign="center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Input placeholder="Email" size="lg" mb={6} borderRadius={12} isRequired value={email} onChange={(e) => setEmail(e.target.value)} borderColor={formError && !email ? 'red.500' : 'inherit'} _focus={{ boxShadow: 'outline' }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <PasswordInput showPassword={showPassword} handleClick={() => setShowPassword(prevState => !prevState)} setPassword={setPassword} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} mb={6}>
              <Button colorScheme="teal" size="lg" height="14" borderRadius={12} _hover={{ bg: 'teal.600' }} onClick={handleSignIn} mx="auto">Sign In</Button>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, #4FD1C5, #81E6D9)', zIndex: 0, borderRadius: '50% 0 50% 0', transform: 'scale(2)' }} />
    </Flex>
  );
};

export default LoginPage;
