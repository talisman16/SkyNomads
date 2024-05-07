import { useEffect, useState } from 'react';

const useUserData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const logout = () => {
    console.log("removing data ! ");
    localStorage.removeItem('userData');
    setUserData(null);
  };

  return { userData, logout };
};

export default useUserData;
