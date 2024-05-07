import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [editing, setEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleInputChange = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    setUserData(updatedData);
    localStorage.setItem('userData', JSON.stringify(updatedData));
    setEditing(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-8">
      {userData ? (
        <div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">User Profile</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="border-b border-gray-200 pb-4">
              <p className="text-gray-700 font-semibold">User Email  :</p>
              {!editing ? (
                <p className="text-gray-800">{userData.user_email}</p>
              ) : (
                <input
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  type="email"
                  name="user_email"
                  value={updatedData.user_email || ''}
                  onChange={handleInputChange}
                />
              )}
            </div>


            <div className="border-b border-gray-200 pb-4">
              <p className="text-gray-700 font-semibold">User Name :</p>
              {!editing ? (
                <p className="text-gray-800">{userData.user_nom}</p>
              ) : (
                <input
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  type="email"
                  name="user_email"
                  value={updatedData.user_nom || ''}
                  onChange={handleInputChange}
                />
              )}
            </div>

            <div className="border-b border-gray-200 pb-4">
              <p className="text-gray-700 font-semibold">First Name:</p>
              {!editing ? (
                <p className="text-gray-800">{userData.user_prenom}</p>
              ) : (
                <input
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  type="text"
                  name="user_prenom"
                  value={updatedData.user_prenom || ''}
                  onChange={handleInputChange}
                />
              )}
            </div>


            <div className="border-b border-gray-200 pb-4">
              <p className="text-gray-700 font-semibold">Phone Number :</p>
              {!editing ? (
                <p className="text-gray-800">{userData.user_PhoneNumber}</p>
              ) : (
                <input
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  type="text"
                  name="user_prenom"
                  value={updatedData.user_PhoneNumber || ''}
                  onChange={handleInputChange}
                />
              )}
            </div>

            <div className="border-b border-gray-200 pb-4">
              <p className="text-gray-700 font-semibold">City  :</p>
              {!editing ? (
                <p className="text-gray-800">{userData.user_Ville}</p>
              ) : (
                <input
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  type="text"
                  name="user_prenom"
                  value={updatedData.user_Ville || ''}
                  onChange={handleInputChange}
                />
              )}
            </div>
          

            <div className="border-b border-gray-200 pb-4">
              <p className="text-gray-700 font-semibold"> Pays :</p>
              {!editing ? (
                <p className="text-gray-800">{userData.user_pays} </p>
              ) : (
                <input
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  type="text"
                  name="user_prenom"
                  value={updatedData.user_pays || ''}
                  onChange={handleInputChange}
                />
              )}
            </div>
          

          </div>
          {!editing ? (
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
          ) : (
            <div className="flex">
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      ) : (
        <p className="text-red-600">Please Log in!</p>
      )}
    </div>
  );
};

export default Dashboard;
