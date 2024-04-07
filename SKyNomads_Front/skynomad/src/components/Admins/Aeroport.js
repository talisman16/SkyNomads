import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Card, CardBody, Input, Button, FormControl, FormLabel, Heading, List, ListItem, Stack, Text, Flex, Spacer } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Aeroport = () => {
  const [aeroports, setAeroports] = useState([]);
  const [newAeroport, setNewAeroport] = useState({
    aeroportVille: '',
    paysAeroport: '',
    nomAeroport: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/aeroports');
      setAeroports(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
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
      await axios.post('http://localhost:8080/aeroports', newAeroport);
      setNewAeroport({
        aeroportVille: '',
        paysAeroport: '',
        nomAeroport: ''
      });
      fetchData(); // Refresh data after successful POST
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this airport?')) {
      try {
        await axios.delete(`http://localhost:8080/aeroports/${id}`);
        fetchData(); 
        toast.success("Aeropot deleted ! ")
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    }
  };
  

  return (
    <Box p={4}>

<Heading as="h2" size="lg" mt={8} mb={4}>Add New Airport</Heading>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" alignItems="flex-start" mb={4}>
          <FormLabel htmlFor="aeroportVille" mb={1}>Airport City:</FormLabel>
          <Input
            type="text"
            id="aeroportVille"
            name="aeroportVille"
            value={newAeroport.aeroportVille}
            onChange={handleInputChange}
            borderRadius="md"
            borderColor="gray.300"
            _focus={{ borderColor: "blue.500" }}
          />
          <FormLabel htmlFor="paysAeroport" mb={1}>Country:</FormLabel>
          <Input
            type="text"
            id="paysAeroport"
            name="paysAeroport"
            value={newAeroport.paysAeroport}
            onChange={handleInputChange}
            borderRadius="md"
            borderColor="gray.300"
            _focus={{ borderColor: "blue.500" }}
          />
          <FormLabel htmlFor="nomAeroport" mb={1}>Airport Name:</FormLabel>
          <Input
            type="text"
            id="nomAeroport"
            name="nomAeroport"
            value={newAeroport.nomAeroport}
            onChange={handleInputChange}
            borderRadius="md"
            borderColor="gray.300"
            _focus={{ borderColor: "blue.500" }}
          />
        </Flex>
        <Button type="submit" colorScheme="green" size="md" width="100%" mb={4}>Add Airport</Button>
      </form>

      <Heading as="h2" size="lg" mb={4}>Airports</Heading>
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={4}>
        {aeroports.map((aeroport) => (
          <Box key={aeroport.idAeroport} bg="white" borderRadius="md" boxShadow="md" p={4} m={2}>
            <Flex direction="column" alignItems="flex-start">
              <Flex alignItems="center" mb={2}>
                <Box bg="gray.200" p={2} borderRadius="md" mr={2}>
                  <Text fontWeight="bold">City:</Text>
                </Box>
                <Text fontWeight="bold" fontSize="xl">{aeroport.aeroportVille}</Text>
              </Flex>
              <Flex alignItems="center" mb={2}>
                <Box bg="gray.200" p={2} borderRadius="md" mr={2}>
                  <Text fontWeight="bold">Country:</Text>
                </Box>
                <Text fontWeight="bold" fontSize="xl">{aeroport.paysAeroport}</Text>
              </Flex>
              <Flex alignItems="center" mb={4}>
                <Box bg="gray.200" p={2} borderRadius="md" mr={2}>
                  <Text fontWeight="bold">Airport:</Text>
                </Box>
                <Text fontWeight="bold" fontSize="xl">{aeroport.nomAeroport}</Text>
              </Flex>
              <Button colorScheme="red" size="sm" mt={2} onClick={() => handleDelete(aeroport.idAeroport)}>Delete</Button>
            </Flex>
          </Box>
        ))}
      </Box>
      <ToastContainer />


     
    </Box>
  );
};

export default Aeroport;
