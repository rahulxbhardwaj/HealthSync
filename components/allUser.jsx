import React, { useEffect, useState } from 'react';
import '../styles/allUser.scss';

const Alluser = () => {
  const [userData, setUserData] = useState([]);
  const [showUserData, setShowUserData] = useState(false);
  const [password, setPassword] = useState('doctor123');
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

  const handleDeleteUser = async (userId) => {
    try {
      console.log(userId);
      const response = await fetch(`https://healthsyncedserver.vercel.app/delete/${userId}`, {
        method: 'DELETE',
      });
      console.log(response);
      if (response.ok) {
        // If deletion is successful, fetch updated data
        await fetchData();
      } else {
        console.error('Failed to delete user');
        alert('Failed to delete user. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user. Please try again.');
    }
  };

  const handleUserClick = (userId) => {
    const clickedUser = userData.find(user => user._id === userId);
    setSelectedUser(clickedUser);
  };

  return (
    <>
      {selectedUser && (
        <div className="user-profile">
          <h3 id="h3alluser">User Profile</h3>
          <p><strong>ID:</strong> {selectedUser._id}</p>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Age:</strong> {selectedUser.age}</p>
          <p><strong>BMI:</strong> {selectedUser.bmi}</p>
          <p><strong>Mobile no:</strong> {selectedUser.mobile}</p>
          <p><strong>History:</strong> {selectedUser.history}</p>
        </div>
      )}

      <h2 id="alluser">All User</h2>
      {!showUserData && (
        <>
          <input
            type="password"
            value={passwordInput}
            onChange={handlePasswordInput} id = "password"
            placeholder="Hint : doctor123"
          />
          <button onClick={handleSubmitPassword} id="submit">Submit</button>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user._id} onClick={() => handleUserClick(user._id)}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.bmi}</td>
                  <td><button onClick={(e) => {
                    e.stopPropagation(); // Prevent row click event
                    handleDeleteUser(user._id);
                  }}>Delete</button></td>
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
