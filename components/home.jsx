import React from 'react';
import Doctor from '../assets/doctor.jpg';
import '../styles/home.scss';

const Home = () => {
  return (
    <>
      <img src={Doctor} alt="Doctor" id="doctor" />
       <div class="overlay-text">Syncing Health for Seamless Care</div>
    </>
  );
};

export default Home;