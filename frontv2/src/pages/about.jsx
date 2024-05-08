import React from 'react';
import { Box, Flex, Heading, Text, Image, Icon, Stack, Link } from '@chakra-ui/react';
import { FaPlane, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const AboutUsPage = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="3xl" mb={8} textAlign="center" color="blue.500">
        Welcome to SKUynomads
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justify="center">
        <Box maxW="md" textAlign="center" mr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
          <Image src="/airplane.jpg" alt="Airplane" borderRadius="md" />
        </Box>
        <Box>
          <Text fontSize="xl" mb={4} textAlign="center">
            Discover the world with SKUynomads - Your Ultimate Travel Companion.
          </Text>
          <Text fontSize="xl" mb={4} textAlign="center">
            At SKUynomads, we're dedicated to providing seamless travel experiences that inspire and connect people
            across the globe.
          </Text>
          <Text fontSize="xl" textAlign="center">
            Let us take you on an adventure of a lifetime.
          </Text>
        </Box>
      </Flex>
      <Box mt={12}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Our Mission
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Our mission at SKUynomads is to make travel accessible, enjoyable, and memorable for everyone. We aim to
          provide personalized experiences that exceed expectations and create lifelong memories.
        </Text>
      </Box>
      <Box mt={12}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Our Values
        </Heading>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={6} justify="center">
          <Box textAlign="center">
            <Icon as={FaPlane} boxSize={12} color="blue.500" />
            <Text mt={2} fontSize="lg">
              Safe Journeys
            </Text>
            <Text fontSize="lg">Your safety is our top priority.</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaStar} boxSize={12} color="yellow.500" />
            <Text mt={2} fontSize="lg">
              Excellence
            </Text>
            <Text fontSize="lg">We strive for excellence in every aspect of our service.</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaMapMarkerAlt} boxSize={12} color="green.500" />
            <Text mt={2} fontSize="lg">
              Reliability
            </Text>
            <Text fontSize="lg">Count on us for reliable and punctual travel experiences.</Text>
          </Box>
        </Stack>
      </Box>
      <Box mt={12} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Contact Us
        </Heading>
        <Text fontSize="xl">Have questions or need assistance? Reach out to our customer support team:</Text>
        <Link href="tel:123-456-7890" fontSize="2xl" fontWeight="bold" mt={4} color="blue.500">
          123-456-7890
        </Link>
        <Link href="mailto:info@skuynomads.com" fontSize="2xl" fontWeight="bold" mt={2} color="blue.500">
          info@skuynomads.com
        </Link>
      </Box>
    </Box>
  );
};

export default AboutUsPage;
