import './App.css';
import '../styles/header.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from '../components/header';
import Home from '../components/home';
import NewUser from '../components/newUser'; 
import Login from '../components/login';
import AboutUs from '../components/aboutus';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}
