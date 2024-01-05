import React from 'react';
import { useState } from 'react';
import axios from "axios";



function Create() {

const [datails,setdetail]=useState({
    fname:'',
    lname:'',
    email:'',
    profile:'',
    location:''
});



const sendData = async (e) => {
    e.preventDefault();

    const { fname, lname, email, profile, location } = datails;

    try {
        const response = await axios.post("https://authandcrud-900c0-default-rtdb.firebaseio.com/person.json", {
            fname,
            lname,
            email,
            profile,
            location,
        });

        // Assuming you want to display a success message when the request is successful
        alert('Data saved successfully');
    } catch (error) {
        console.error('Error saving data:', error);
        // Handle the error as needed
    }
};

  return (
    <>
   <form>
  <div className="mb-2  mt-3"  style={{width:"60%", margin:"auto"}}>
    
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onChange={(e)=>setdetail({...datails,fname:e.target.value})}
      placeholder='Please enter your first name'
    />
 
  </div>
  <div className="mb-2" style={{width:"60%", margin:"auto"}}>
   
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onChange={(e)=>setdetail({...datails,lname:e.target.value})}
      placeholder=' Please enter your  Last Name'
    />
  </div>
  <div className="mb-2" style={{width:"60%", margin:"auto"}}>
   
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onChange={(e)=>setdetail({...datails,email:e.target.value})}
      placeholder='Pleaser enter your email'
    />
  </div>
  <div className="mb-2" style={{width:"60%", margin:"auto"}}>
  
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onChange={(e)=>setdetail({...datails,profile:e.target.value})}
      placeholder='Pleaser enter your Profile'
    />
  </div>
  <div className="mb-2" style={{width:"60%", margin:"auto"}}>
  
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onChange={(e)=>setdetail({...datails,location:e.target.value})}
      placeholder='Pleaser enter your Location'
    />
  </div>
<div className="" style={{width:'20%', margin:"auto", paddingLeft:"10px"}}>

  <button type="submit" className="btn btn-secondary" onClick={sendData}>
    ADD Your Data 
  </button>
</div>
</form>



    </>
  )
}

export default Create;