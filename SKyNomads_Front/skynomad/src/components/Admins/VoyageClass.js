import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      // Refresh the list of class voyages after adding a new one
      getClassVoyages();
    } catch (error) {
      console.error('Error adding new voyage:', error);
    }
  };

  return (
    <div>
      <h2>Class Voyages</h2>
      <div>
        <h3>Add New Voyage</h3>
        <input type="text" name="classVoyageNom" placeholder="Nom" value={newVoyage.classVoyageNom} onChange={handleInputChange} />
        <input type="number" name="classVoyageCapacite" placeholder="Capacite" value={newVoyage.classVoyageCapacite} onChange={handleInputChange} />
        <button onClick={handleAddVoyage}>Add Voyage</button>
      </div>
      <div>
        <h3>Class Voyages List</h3>
        <ul>
          {classVoyages.map((voyage) => (
            <li key={voyage.classVoyageId}>
              {voyage.classVoyageNom} - Capacite: {voyage.classVoyageCapacite}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VoyageClass;
