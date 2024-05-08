import React from 'react';
import { Flex, Box, Text, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex
      bg="gray.800"
      color="white"
      p="4"
      justify="space-between"
      alignItems="center"
      direction={{ base: 'column', md: 'row' }}
    >
      <Box>
        <Text fontSize="lg" fontWeight="bold">Connect with us:</Text>
        <Flex mt="2">
          <IconButton
            aria-label="Facebook"
            icon={<FaFacebook />}
            variant="ghost"
            colorScheme="white"
            mr="2"
            _hover={{ color: 'teal.300' }}
          />
          <IconButton
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="ghost"
            colorScheme="white"
            mr="2"
            _hover={{ color: 'teal.300' }}
          />
          <IconButton
            aria-label="Instagram"
            icon={<FaInstagram />}
            variant="ghost"
            colorScheme="white"
            mr="2"
            _hover={{ color: 'teal.300' }}
          />
          <IconButton
            aria-label="Linkedin"
            icon={<FaLinkedin />}
            variant="ghost"
            colorScheme="white"
            _hover={{ color: 'teal.300' }}
          />
        </Flex>
      </Box>
      <Text mt={{ base: '4', md: '0' }}>&copy; 2024  Skynomads. All rights reserved.</Text>
    </Flex>
  );
};

export default Footer;
