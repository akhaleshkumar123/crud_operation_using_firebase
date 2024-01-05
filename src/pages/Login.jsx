import React, { useState } from 'react';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {app}  from "../firebase";



const auth=getAuth(app);




function Login(){
  const [email, setEmail]=useState();
  const [password, setPassword]=useState();

  const signin=()=>{
    signInWithEmailAndPassword(auth, email, password).then(()=>{
      alert('login successfully ')
    }).catch((error)=>{
      console.log(error)
    })
    setEmail('')
    setPassword('')
  }
  return <>
   <h1 style={{width:"30%", margin:"auto", marginTop:"10px", color:"purple" }} > Login form</h1>
   <form style={{alignItems:"center"}}>
   <div className="mb-3 " style={{width:"60%", margin:"auto"}} >
     <label htmlFor="exampleInputEmail1" className="form-label">
       Email address
     </label>
     <input
       type="email"
       className="form-control"
       id="exampleInputEmail1"
       aria-describedby="emailHelp"
       value={email}
       onChange={(e)=>{setEmail(e.target.value)}}
      
     />
     <div id="emailHelp" className="form-text">
       We'll never share your email with anyone else.
     </div>
   </div>
   <div className="mb-3" style={{width:"60%", margin:"auto"}} >
     <label htmlFor="exampleInputPassword1" className="form-label">
       Password
     </label>
     <input
       type="password"
       className="form-control"
      id="exampleInputPassword1"
       value={password}
       onChange={(e)=>{setPassword(e.target.value)}}
     />
   </div>
   <button type="button" className="btn btn-primary" style={{ marginLeft: "550px", marginTop: "20px", width: "200px", backgroundColor: "purple" }} onClick={signin}>
  Login
</button>


 </form> 
  
  </>
}

export default Login;











































