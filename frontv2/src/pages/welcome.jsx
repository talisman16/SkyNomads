import React from 'react';
import useUserData from '../DATA/useUserData';

const Welcome = () => {
  const { userData } = useUserData();
  
  return (
    <div>
      {userData && (
        <div>Welcome {userData.user_nom}</div>
      )}
    </div>
  );
};

export default Welcome;
