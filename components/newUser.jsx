import React, { useState } from 'react';
import '../styles/newUser.scss';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const NewUser = () => {

  const [form,setForm] = useState({});
  
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value,
    })
    
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('https://healthsyncedserver.vercel.app/newUser',{method:'POST',body:JSON.stringify(form),headers:{'Content-Type':'application/json'}});
  const data = await response.json();
  console.log(data);
}
  
return(
  <>
  <form onSubmit={handleSubmit} className="form-container">
    {/* <p>{JSON.stringify(form)}</p> */}
  <label id="name" >Name</label>
  <input type="text" onChange={handleForm} name="name" class="form-control" placeholder='Name'></input>
    <label id="age">Age</label>
    <input type="number" onChange={handleForm} name="age" class="form-control" placeholder='Age'></input>
    <br></br>
  <input type="submit" id="submit" class="submit"></input>
  
  </form>

    
  </>
)
};

export default NewUser;