import React, {useState} from 'react';
import {app} from '../firebase'
import {getAuth,createUserWithEmailAndPassword}  from "firebase/auth";
import SignUpGoolglle from './SignUpGooglle';


const auth=getAuth(app);
function Ragistation() {
 const [email,setEmail]=useState(null)
 const [password, setPassword]=useState(null)




  const ragistation= async(e)=>{
    e.preventDefault();
     await createUserWithEmailAndPassword(auth, email, password).then((data)=>{
      console.log('Ragistation succesfully',data);
      alert('Ragistation sucessufully')
    }).catch((err)=>console.log(err));
    console.log(password,email);
    setEmail('')
    setPassword('')
  }
  
  return (
    <>
    <h1 style={{width:"30%", margin:"auto", marginTop:"10px", color:'pink' }} > Sign In form</h1>
   <form style={{alignItems:"center"}}>
  <div className="mb-3 " style={{width:"60%", margin:"auto"}} >
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      autocomplete="off"
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

  <div>

<SignUpGoolglle/>
  </div>
  
  <button type="submit" className="btn btn-sucess " style={{marginLeft:"550px", marginTop:"20px", width:"200px", background:"pink"}}  onClick={ragistation} >
    Sign In  
  </button>
</form>



    </>
  )
}

export default Ragistation;