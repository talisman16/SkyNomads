import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, FormLabel, Input, Select, Grid, GridItem , Text } from '@chakra-ui/react';

const FlightDetails = () => {
  const [airports, setAirports] = useState([]);
  const [formData, setFormData] = useState({
    sourceAeroport: '', // This should be an object like { idAeroport: 212 }
    destinationAeroport: '', // This should be an object like { idAeroport: 302 }
    dateDeparture: '',
    dateArrival: '',
    typeAvion: ''
  });
  
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/aeroports')
      .then(response => {
        setAirports(response.data);
      })
      .catch(error => {
        console.error('Error fetching airports:', error);
      });

      axios.get('http://localhost:8080/details-vols').then(response => {
        setDetails(response.data)
      }).catch(error => 
        {
            console.log("error in get flight details " , error);
        })
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this flight detail?')) {
      axios.delete(`http://localhost:8080/details-vols/${id}`)
        .then(response => {
          console.log('Flight detail deleted successfully:', response.data);
          // Update the details state after deletion
          setDetails(details.filter(detail => detail.vol_id !== id));
        })
        .catch(error => {
          console.error('Error deleting flight detail:', error);
        });
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    // If the field name is sourceAeroport or destinationAeroport, create an object with idAeroport
    const updatedValue = name === 'sourceAeroport' || name === 'destinationAeroport' ? { idAeroport: value } : value;
    setFormData({
      ...formData,
      [name]: updatedValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if sourceAeroport and destinationAeroport are not empty
    if (!formData.sourceAeroport || !formData.destinationAeroport) {
      console.error('Source Airport or Destination Airport is empty. Aborting request.');
      return; // Prevent the request from being sent
    }
    
    const formDataWithCorrectFormat = {
      ...formData,
      sourceAeroport: { idAeroport: formData.sourceAeroport },
      destinationAeroport: { idAeroport: formData.destinationAeroport }
    };
    
    // Log the data before sending the POST request
    console.log('Data being sent:', formDataWithCorrectFormat);
    
    axios.post('http://localhost:8080/details-vols', formDataWithCorrectFormat)
      .then(response => {
        console.log('Flight details submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error submitting flight details:', error);
      });
  };
  
  
  const handleSourceAirportChange = (selectedAirport) => {
    setFormData({
      ...formData,
      sourceAeroport: selectedAirport
    });
  };
  
  const handleDestinationAirportChange = (selectedAirport) => {
    setFormData({
      ...formData,
      destinationAeroport: selectedAirport
    });
  };
  

  return (
    <Box p={4}>
    {details.length === 0 ? (
      <Text>No flight details added yet!</Text>
    ) : (
      <Grid templateColumns="1fr 1fr" gap={4}>
        {details.map((detail) => (
          <GridItem key={detail.vol_id}>
            <Box borderWidth="1px" borderRadius="md" p={4}>
              <Text fontSize="lg" fontWeight="bold">{detail.vol_id} : {detail.sourceAeroport.nomAeroport} - {detail.sourceAeroport.aeroportVille}, {detail.sourceAeroport.paysAeroport}</Text>
              <Text><strong>Destination Airport:</strong> {detail.destinationAeroport.nomAeroport} - {detail.destinationAeroport.aeroportVille}, {detail.destinationAeroport.paysAeroport}</Text>
              <Text><strong>Departure Date:</strong> {new Date(detail.dateDeparture).toLocaleString()}</Text>
              <Text><strong>Arrival Date:</strong> {new Date(detail.dateArrival).toLocaleString()}</Text>
              <Text><strong>Aircraft Type:</strong> {detail.typeAvion}</Text>
              <Button colorScheme="red" onClick={() => handleDelete(detail.vol_id)} mt={2}>Delete</Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
    )}
    <Box borderWidth="1px" borderRadius="md" p={4} mt={4}>
      <form onSubmit={handleSubmit}>
        <Grid templateColumns="1fr 1fr" gap={4}>
        
          <FormControl>
  <FormLabel>Source Airport:</FormLabel>
  <Select name="sourceAeroport" onChange={(e) => handleSourceAirportChange(e.target.value)} required>
    <option disabled selected value="">Select Source Airport </option>
    {airports.map(airport => (
      <option key={airport.idAeroport} value={airport.idAeroport}>
        {airport.nomAeroport} - {airport.aeroportVille}, {airport.paysAeroport}
      </option>
    ))}
  </Select>
</FormControl>
<FormControl>
  <FormLabel>Destination Airport:</FormLabel>
  <Select name="destinationAeroport" onChange={(e) => handleDestinationAirportChange(e.target.value)} required>
    <option disabled selected value="">Select a Destination Airport </option>
    {airports.map(airport => (
      <option key={airport.idAeroport} value={airport.idAeroport}>
        {airport.nomAeroport} - {airport.aeroportVille}, {airport.paysAeroport}
      </option>
    ))}
  </Select>
</FormControl>

        </Grid>
        <Grid templateColumns="1fr 1fr" gap={4} mt={4}>
          <FormControl>
            <FormLabel>Departure Date:</FormLabel>
            <Input type="datetime-local" name="dateDeparture" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Arrival Date:</FormLabel>
            <Input type="datetime-local" name="dateArrival" onChange={handleChange} />
          </FormControl>
        </Grid>
        <Grid templateColumns="1fr 1fr" gap={4} mt={4}>
          <FormControl>
            <FormLabel>Aircraft Type:</FormLabel>
            <Input type="text" name="typeAvion" onChange={handleChange} />
          </FormControl>
        </Grid>
        <Button type="submit" mt={4} colorScheme="green">Submit</Button>
      </form>
    </Box>
  </Box>
  
  );
};

export default FlightDetails;
