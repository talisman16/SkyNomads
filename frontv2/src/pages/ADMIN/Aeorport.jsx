import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Input, Button, FormControl, FormLabel, Text, Center, Spinner, List, ListItem, Flex, IconButton, useToast } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const AdminAirportSection = () => {
  const [newAeroport, setNewAeroport] = useState({
    aeroportVille: '',
    paysAeroport: '',
    nomAeroport: ''
  });
  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    fetchAirports();
  }, []);

  const fetchAirports = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8080/aeroports');
      setAirports(response.data);
    } catch (error) {
      console.error('Error fetching airports:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAeroport({
      ...newAeroport,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post('http://localhost:8080/aeroports', newAeroport);
      setNewAeroport({
        aeroportVille: '',
        paysAeroport: '',
        nomAeroport: ''
      });
      fetchAirports(); // Fetch airports again after adding a new airport
      toast({
        title: 'Airport Added',
        description: `${newAeroport.nomAeroport} has been added successfully.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error posting data:', error);
      toast({
        title: 'Error',
        description: 'Failed to add airport. Please try again later.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:8080/aeroports/${id}`);
      fetchAirports(); // Fetch airports again after deleting an airport
      toast({
        title: 'Airport Deleted',
        description: `Airport with ID ${id} has been deleted successfully.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error deleting airport:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete airport. Please try again later.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p={8} borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Heading as="h2" size="lg" mb={6}>Add Airport</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="aeroportVille" mb={4}>
          <FormLabel>Airport City</FormLabel>
          <Input type="text" name="aeroportVille" value={newAeroport.aeroportVille} onChange={handleInputChange} required />
        </FormControl>
        <FormControl id="paysAeroport" mb={4}>
          <FormLabel>Country</FormLabel>
          <Input type="text" name="paysAeroport" value={newAeroport.paysAeroport} onChange={handleInputChange} required />
        </FormControl>
        <FormControl id="nomAeroport" mb={4}>
          <FormLabel>Airport Name</FormLabel>
          <Input type="text" name="nomAeroport" value={newAeroport.nomAeroport} onChange={handleInputChange} required />
        </FormControl>
        <Button colorScheme="teal" type="submit" mt={4} isLoading={loading}>Add Airport</Button>
      </form>
      
      <Box mt={8}>
        <Heading as="h2" size="lg" mb={4}>Existing Airports</Heading>
        {loading ? (
          <Center>
            <Spinner size="lg" color="teal.500" />
          </Center>
        ) : (
          airports.length === 0 ? (
            <Text>No airports have been added yet.</Text>
          ) : (
            <List spacing={3}>
              {airports.map((airport) => (
                <Box key={airport.idAeroport} borderWidth="1px" borderRadius="lg" p="4" boxShadow="md" marginTop="5px">
                  <ListItem>{airport.nomAeroport} - {airport.aeroportVille}, {airport.paysAeroport}</ListItem>
                  <Flex justify="flex-end">
                    <IconButton icon={<FaTrash />} colorScheme="red" size="sm" onClick={() => handleDelete(airport.idAeroport)} />
                  </Flex>
                </Box>
              ))}
            </List>
          )
        )}
      </Box>
    </Box>
  );
};

export default AdminAirportSection;
