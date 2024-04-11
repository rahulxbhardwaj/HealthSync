import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters

const Profile = () => {
  const { id } = useParams(); // Get the user ID from the URL parameter
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://healthsyncedserver.vercel.app/user/${id}`, { method: 'GET' });
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <>
      <h2>User Profile</h2>
      {userData ? (
        <div>
          <p><strong>ID:</strong> {userData._id}</p>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Age:</strong> {userData.age}</p>
          <p><strong>BMI:</strong> {userData.bmi}</p>
          <p><strong>History:</strong> {userData.history}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Profile;
