import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Heading, Text, Button, FormControl, Input, Stack, Select } from '@chakra-ui/react';

const FlightReservations = () => {
  const flights = [
    {
      id: 1,
      countryFrom: 'United States',
      countryTo: 'Canada',
      price: '$300',
      time: '6h 30m',
      passengerLimit: '100',
      airlineName: 'Delta Airlines',
      image: 'https://source.unsplash.com/random/800x600?airplane',
    },
    {
        id: 1,
        countryFrom: 'United States',
        countryTo: 'Canada',
        price: '$300',
        time: '6h 30m',
        passengerLimit: '100',
        airlineName: 'Delta Airlines',
        image: 'https://source.unsplash.com/random/800x600?airplane',
      },
    {
      id: 2,
      countryFrom: 'Canada',
      countryTo: 'United States',
      price: '$250',
      time: '5h 45m',
      passengerLimit: '150',
      airlineName: 'Air Canada',
      image: 'https://source.unsplash.com/random/800x600?airplane',
    },
    // add more flights here
  ];

  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [passengers, setPassengers] = React.useState(1);
  const [dateFrom, setDateFrom] = React.useState('');
  const [dateTo, setDateTo] = React.useState('');
  const [oneWay, setOneWay] = React.useState(true);

  const countries = ['United States', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'Chile'];

  return (
    <Box className="container mx-auto px-4 py-8">
      <Heading className="text-4xl font-bold mb-8 text-green-700">Flight Reservations</Heading>
      <Box className="mt-8">
        <Heading className="text-2xl font-bold mb-4 text-green-700">Search Flights</Heading>
        <FormControl>
          <Stack spacing={4} direction={['column', 'row']}>
            <Box flex={1}>
              <Select placeholder="Departure" value={from} onChange={(e) => setFrom(e.target.value)}>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Select>
              <Input type="date" placeholder="Date from" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
            </Box>
            <Box flex={1}>
              <Select placeholder="Arrival" value={to} onChange={(e) => setTo(e.target.value)}>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Select>
              <Input type="date" placeholder="Date to" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
            </Box>
            <Box>
              <Input type="number" placeholder="Number of passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} />
              <Select placeholder="One way" value={oneWay} onChange={(e) => setOneWay(e.target.value === 'true')}>
                <option value="true">One way</option>
                <option value="false">Round trip</option>
              </Select>
              <Button className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50">
                Search
              </Button>
            </Box>
          </Stack>
        </FormControl>
      </Box>
      <Box className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {flights.map((flight) => (
          <Box key={flight.id} className="bg-white rounded-lg shadow-lg p-4">
            <Link to={`/flights/${flight.id}`}>
              <Image src={flight.image} alt={flight.airlineName} className="w-full h-60 object-cover rounded-t-lg mb-4" />
            </Link>
            <Heading className="text-2xl font-bold mb-2 text-green-700">{flight.countryFrom} - {flight.countryTo}</Heading>
            <Text className="text-gray-700 mb-2">Price: {flight.price}</Text>
            <Text className="text-gray-700 mb-2">Time: {flight.time}</Text>
            <Text className="text-gray-700 mb-4">Passenger Limit: {flight.passengerLimit}</Text>
            <Link to={`/flights/${flight.id}`}>
              <Button className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50">
                See More
              </Button>
            </Link>
            <Link to={`/book/${flight.id}`}>
              <Button className="bg-green-700 text-white py-2 px-4 rounded-lg ml-2 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50">
                Book Now
              </Button>
            </Link>
          </Box>
        ))}
      </Box>
  
    </Box>
  );
};

export default FlightReservations;
