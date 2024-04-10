import React, { useState } from 'react';
import '../styles/newUser.scss';


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
  <form onSubmit={handleSubmit}>
    {/* <p>{JSON.stringify(form)}</p> */}
  <label className='mt-50' >Name</label>
  <input type="text" onChange={handleForm} name="name"></input>
    <label>Age</label>
    <input type="number" onChange={handleForm} name="age"></input>
  <input type="submit"></input>
  
  </form>

    
  </>
)
};

export default NewUser;