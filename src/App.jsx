import './App.css';
import '../styles/header.scss';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from '../components/header';
import Home from '../components/home';
import NewUser from '../components/newUser'; 
import Login from '../components/login';
import AboutUs from '../components/aboutus';
export default function App() {
  return (
  <>
  <BrowserRouter>
    <Header />
  <Routes>
  {/* <Route index element={<Header />} /> */}
     <Route index element={<Home />} />
     <Route path="/home" element={<Home />} />
    <Route path="/NewUser" element={<NewUser />} />
     <Route path="/login" element={<Login />} />
    <Route path="/aboutus" element={<AboutUs />} />
  </Routes>
  
  </BrowserRouter>


    
    {/* <Header /> */}
    {/* <Router>
    <Switch>
       {/* <Route path="/newuser" component={NewUser} />  */}
       {/* </Switch> */}
        {/* </Router> */} 
    {/* <Home /> */}
   </>
  )
}
