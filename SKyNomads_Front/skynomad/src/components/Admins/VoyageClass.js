import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Input, Button, Text, Flex } from '@chakra-ui/react';

const VoyageClass = () => {
  const [classVoyages, setClassVoyages] = useState([]);
  const [newVoyage, setNewVoyage] = useState({
    classVoyageNom: '',
    classVoyageCapacite: 0
  });

  useEffect(() => {
    // Fetch class voyages on component mount
    getClassVoyages();
  }, []);

  const handleDeleteVoyage = async (id) => {
    try {
      const confirmed = window.confirm('Are you sure you want to delete this voyage?');
      if (confirmed) {
        await axios.delete(`http://localhost:8080/api/class-voyages/${id}`);
        console.log('Voyage deleted:', id);
        // Refresh the list of class voyages after deleting
        getClassVoyages();
      }
    } catch (error) {
      console.error('Error deleting voyage:', error);
    }
  };
  const getClassVoyages = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/class-voyages');
      setClassVoyages(response.data);
    } catch (error) {
      console.error('Error fetching class voyages:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewVoyage({
      ...newVoyage,
      [name]: value
    });
  };

  const handleAddVoyage = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/class-voyages', newVoyage);
      console.log('New voyage added:', response.data);
       
      getClassVoyages();
    } catch (error) {
      console.error('Error adding new voyage:', error);
    }
  };

  return (
    <Box bg="white" p={4} borderRadius="md" boxShadow="md">
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold" color="green.600">
          Class Voyages
        </Text>
        <Button colorScheme="green" onClick={handleAddVoyage}>
          Add Voyage class 
        </Button>
      </Flex>
      <Box mt={4}>
        <Flex alignItems="center" mb={2}>
          <Text fontSize="lg" fontWeight="bold" color="green.600">
            Add New Voyage
          </Text>
        </Flex>
        <Input
          type="text"
          name="classVoyageNom"
          placeholder="Nom"
          value={newVoyage.classVoyageNom}
          onChange={handleInputChange}
          mr={2}
          mb={2}
          w="sm"
        />
        <Input
          type="number"
          name="classVoyageCapacite"
          placeholder="Capacite"
          value={newVoyage.classVoyageCapacite}
          onChange={handleInputChange}
          w="sm"
        />
        
      </Box>
      <Box mt={4}>
  <Flex alignItems="center" justifyContent="space-between">
    <Text fontSize="lg" fontWeight="bold" color="green.600">
      Class Voyages List
    </Text>
  </Flex>
  {classVoyages.length > 0 ? (
  <ul>
    {classVoyages.map((voyage) => (
      <li key={voyage.classVoyageId} className="bg-white p-2 rounded-md shadow-md mb-2 flex items-center justify-between">
        <div>
          <Text fontSize="lg" color="green.600">
            {voyage.classVoyageNom}
          </Text>
          <Text fontSize="md" color="gray.600">
            Capacite: {voyage.classVoyageCapacite}
          </Text>
        </div>
        <Button colorScheme="red" onClick={() => handleDeleteVoyage(voyage.classVoyageId)}>Delete</Button>
      </li>
    ))}
  </ul>
) : (
  <Text>No class voyages found</Text>
)}

</Box>

    </Box>
  );
};

export default VoyageClass;
