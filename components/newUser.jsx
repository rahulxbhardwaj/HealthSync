import React, { useState } from 'react';
import '../styles/newUser.scss';

const NewUser = () => {
  const [form, setForm] = useState({});

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('https://healthsyncedserver.vercel.app/newUser', {
          method: 'POST',
          body: JSON.stringify(form),
          headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      if (response.ok) {
          alert('Data saved');
          // Redirect to a specific URL
          window.location.href = 'https://healthsynced.vercel.app/'; // Change this to your actual URL
      } else {
          // Handle error cases here
          console.error('Failed to save data:', data.error);
          alert('Failed to save data. Please try again.');
      }
  };


  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <label id="name">Name</label>
        <input type="text" onChange={handleForm} name="name" className="form-control" placeholder="Name" />

        <label id="age">Age</label>
        <input type="number" onChange={handleForm} name="age" className="form-control" placeholder="Age" />

        <label id="age">BMI</label>
        <input type="number" onChange={handleForm} name="bmi" className="form-control" placeholder="BMI" />

        <label id="age">Mobile No:</label>
        <input type="number" onChange={handleForm} name="number" className="form-control" placeholder="98XX" />

        <div className="form-row-history">
          <label id="history">History Record</label>
          <textarea
            className="form-control"
            rows="4"
            style={{ width: '50%', marginTop: 10, marginRight: 120 }}
            onChange={handleForm}
            name="history"
            placeholder="Enter history record here"
          ></textarea>
        </div>

        <input type="submit" id="submit" className="submit" />
      </form>
    </>
  );
};

export default NewUser;
