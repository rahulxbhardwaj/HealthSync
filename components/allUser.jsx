import React, { useEffect, useState } from 'react';
import '../styles/allUser.scss';

const Alluser = () => {
  const [userData, setUserData] = useState([]);
  const [showUserData, setShowUserData] = useState(false);
  const [password, setPassword] = useState('chamak');
  const [passwordInput, setPasswordInput] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://healthsyncedserver.vercel.app/alluser', { method: 'GET' });
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePasswordInput = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleSubmitPassword = () => {
    // Check if the entered password matches the expected password
    if (passwordInput === password) {
      setShowUserData(true); // Show user data if password matches
    } else {
      alert('Incorrect password. Please try again.');
    }
    setPasswordInput(''); // Reset the password input field
  };

  const handleUserClick = (userId) => {
    // Find the selected user from userData array based on userId
    const user = userData.find(user => user._id === userId);
    setSelectedUser(user);
  };

  return (
    <>
      {selectedUser && (
        <div className="user-profile">
          <h3>User Profile</h3>
          <p><strong>ID:</strong> {selectedUser._id}</p>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Age:</strong> {selectedUser.age}</p>
          <p><strong>BMI:</strong> {selectedUser.bmi}</p>
           <p><strong>Mobile no:</strong> {selectedUser.mobile}</p>
          <p><strong>History:</strong> {selectedUser.history}</p>
        </div>
      )}

      <h2 id="alluser">All Users</h2>
      {!showUserData && (
        <>
          <input
            type="password"
            placeholder="Enter Password"
            value={passwordInput}
            onChange={handlePasswordInput} id = "password"
          />
          <button onClick={handleSubmitPassword}>Submit</button>
        </>
      )}
      {showUserData && (
        <>
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>BMI</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user._id} onClick={() => handleUserClick(user._id)}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.bmi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Alluser;
