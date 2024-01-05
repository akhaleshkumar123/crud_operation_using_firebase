import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Readdata() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Function to fetch data from Firebase
    const fetchData = async () => {
      try {
        const response = await axios.get('https://authandcrud-900c0-default-rtdb.firebaseio.com/users.json');
        // Assuming your Firebase structure is an array of users
        const userDataArray = Object.values(response.data);
        setUserData(userDataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name </th>
            <th scope="col">Email</th>
            <th scope="col">Profile</th>
            <th scope="col">Location</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.profile}</td>
              <td>{user.location}</td>
              <td>
                <button style={{ backgroundColor: 'green', color: 'white' }}>Edit</button>
                <button style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Readdata;
