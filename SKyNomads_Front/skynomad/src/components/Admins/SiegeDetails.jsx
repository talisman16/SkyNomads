import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
import { FormControl, FormLabel, Input, Select, Button, Flex  , Text , Badge ,Divider , Box , Heading} from '@chakra-ui/react';



const SiegeDetails = () => {
  const [siegeDetails, setSiegeDetails] = useState([]);
  const [classVoyages, setClassVoyages] = useState([]);
  const [vols, setVols] = useState([]);
  const [selectedClassVoyage, setSelectedClassVoyage] = useState('');
  const [selectedVol, setSelectedVol] = useState('');
  const [prixSiege, setPrixSiege] = useState('');
  
  useEffect(() => {
    // Fetch available class voyages
    axios.get('http://localhost:8080/api/class-voyages')
      .then(response => {
        setClassVoyages(response.data);
      })
      .catch(error => {
        console.error('Error fetching class voyages: ', error);
      });

    // Fetch available vols
    axios.get('http://localhost:8080/details-vols')
      .then(response => {
        setVols(response.data);
      })
      .catch(error => {
        console.error('Error fetching vols: ', error);
      });

    // Fetch siege details
    axios.get('http://localhost:8080/api/siege-details')
      .then(response => {
        setSiegeDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching siege details: ', error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/siege-details', {
        classVoyage: {
          classVoyageId: selectedClassVoyage
        },
        detailsVol: {
          vol_id: selectedVol
        },
        prix : prixSiege
      });
      
      // Fetch updated siege details and update the state
      const response = await axios.get('http://localhost:8080/api/siege-details');
      setSiegeDetails(response.data);
  
      // Clear the selected values after successful submission
      setSelectedClassVoyage('');
      setSelectedVol('');
      setPrixSiege('')
    } catch (error) {
      console.error('Error submitting data: ', error);
    }
  };

  const handleDelete = async (siegeDetailId) => {
    // Display a confirmation dialog
    const confirmDelete = window.confirm("Are you sure you want to delete this siegeDetail?");
    
    if (confirmDelete) {
      try {
        // Send DELETE request to delete the siegeDetail
        await axios.delete(`http://localhost:8080/api/siege-details/${siegeDetailId}`);
        
        // Filter out the deleted siegeDetail from the state
        setSiegeDetails(prevSiegeDetails => prevSiegeDetails.filter(siegeDetail => siegeDetail.siegeDetailId !== siegeDetailId));
      } catch (error) {
        console.error('Error deleting siegeDetail: ', error);
      }
    }
  };


  return (
    <Box bg="white" p={6} rounded="md" shadow="md" mt={4}>
      <Heading size="md" mb={4} color="green.600">Siege Details</Heading>
      <form onSubmit={handleSubmit}>
  <Flex justify="space-between" align="center" mb={4}>
    <FormControl>
      <FormLabel>Select Class Voyage</FormLabel>
      <Select value={selectedClassVoyage} onChange={(e) => setSelectedClassVoyage(e.target.value)} required>
        <option value="">Select Class Voyage</option>
        {classVoyages.map(classVoyage => (
          <option key={classVoyage.classVoyageId} value={classVoyage.classVoyageId}>{classVoyage.classVoyageNom}</option>
        ))}
      </Select>
    </FormControl>
    <FormControl>
      <FormLabel>Select Vol ID</FormLabel>
      <Select value={selectedVol} onChange={(e) => setSelectedVol(e.target.value)} required>
        <option value="">Select Vol ID</option>
        {vols.map(vol => (
          <option key={vol.vol_id} value={vol.vol_id}>{vol.vol_id}</option>
        ))}
      </Select>
    </FormControl>
    <FormControl>
      <FormLabel>Price</FormLabel>
      <Input type="number" value={prixSiege} onChange={(e) => setPrixSiege(e.target.value)} required />
    </FormControl>
    <Button type="submit" colorScheme="green">Submit</Button>
  </Flex>
</form>

      
      {siegeDetails.map(siegeDetail => (
        <Box key={siegeDetail.siegeDetailId} mb={4} p={4} bg="gray.100" rounded="md">
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="lg" fontWeight="bold" color="green.600">
              {siegeDetail.classVoyage.classVoyageNom}
            </Text>
            <Badge colorScheme="green" fontSize="sm" px={2} py={1} rounded="full">
              Capacity: {siegeDetail.classVoyage.classVoyageCapacite}
            </Badge>
          </Flex>
          <Divider borderColor="gray.300" mb={2} />
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="md" color="gray.600">
              {siegeDetail.detailsVol.sourceAeroport.aeroportVille}
            </Text>
            <Text fontSize="md" color="gray.600">
              {siegeDetail.detailsVol.destinationAeroport.aeroportVille}
            </Text>
          </Flex>
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="md" color="gray.600">
              Departure: {new Date(siegeDetail.detailsVol.dateDeparture).toLocaleString()}
            </Text>
            <Text fontSize="md" color="gray.600">
              Arrival: {new Date(siegeDetail.detailsVol.dateArrival).toLocaleString()}
            </Text>
            <Text fontSize="md" color="gray.600">
              Aircraft: {siegeDetail.detailsVol.typeAvion}
            </Text> 

            <Text fontSize="md" color="gray.600">
           Price: {siegeDetail.prix }
          </Text>
 
          </Flex>
          <Button colorScheme="red" onClick={() => handleDelete(siegeDetail.siegeDetailId)}>Delete</Button>
        </Box>
      ))}
    </Box>
  );
}

export default SiegeDetails;
