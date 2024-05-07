import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, FormLabel, Input, Select, Button, Flex, Switch, Box, Text, Link, Spacer } from "@chakra-ui/react";

const SearchFlight = () => {
  const [isOneWay, setIsOneWay] = useState(true);
  const [passengerCount, setPassengerCount] = useState(1);
  const [flightClass, setFlightClass] = useState('Economy');
  const [countries, setCountries] = useState([]);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name');
        setCountries(response.data.map((country) => country.name.common));
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <Box w="80%" mx="auto">
      <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
        <Flex mb={4} bg="gray.100" p={4} borderRadius="md" alignItems="center">
          <FormControl mr={4}>
            <FormLabel htmlFor="one-way-switch" fontWeight="normal">One way</FormLabel>
            <Switch id="one-way-switch" colorScheme="green" isChecked={isOneWay} onChange={() => setIsOneWay(!isOneWay)} />
          </FormControl>
          <FormControl mr={4}>
            <FormLabel htmlFor="passenger-count" fontWeight="normal">Passengers</FormLabel>
            <Input type="number" min={1} value={passengerCount} onChange={(e) => setPassengerCount(parseInt(e.target.value))} id="passenger-count" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="flight-class" fontWeight="normal">Class</FormLabel>
            <Select value={flightClass} onChange={(e) => setFlightClass(e.target.value)} id="flight-class">
              <option value="Economy">Economy</option>
              <option value="First Class">First Class</option>
            </Select>
          </FormControl>
        </Flex>
        <Flex mb={4} bg="gray.100" p={4} borderRadius="md" alignItems="center">
          <FormControl flex="1" mr={4}>
            <FormLabel htmlFor="source" fontWeight="normal">From</FormLabel>
            <Select value={source} onChange={(e) => setSource(e.target.value)} id="source">
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl flex="1">
            <FormLabel htmlFor="destination" fontWeight="normal">To</FormLabel>
            <Select value={destination} onChange={(e) => setDestination(e.target.value)} id="destination">
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </Select>
          </FormControl>
        </Flex>
        <Flex mb={4} bg="gray.100" p={4} borderRadius="md" alignItems="center">
          <FormControl flex="1" mr={4}>
            <FormLabel htmlFor="departure-date" fontWeight="normal">Departure</FormLabel>
            <Input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} id="departure-date" />
          </FormControl>
          {!isOneWay && (
            <FormControl flex="1">
              <FormLabel htmlFor="return-date" fontWeight="normal">Return</FormLabel>
              <Input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} id="return-date" />
            </FormControl>
          )}
        </Flex>
        <Flex justify="center" bg="gray.100" p={4} borderRadius="md">
          <Button colorScheme="green" type="submit" width="100%">Search Flights</Button>
        </Flex>
      </form>
    </Box>
  );
};

export default SearchFlight;
