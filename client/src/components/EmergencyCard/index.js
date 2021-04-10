import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Card(props) {
  const { fName, lName, pNum } = props.emergencyContactObj;

  

  useEffect(() => {
    axios.get("/api/wolfpack")
      .then(res => { 
        console.log(res) 
      })
      .catch(err => { 
        console.log(err) 
      })
  }, [])

  return (
    <div className="card">
      <div className="card-header">
        Emergency Contact:
         </div>
      <div className="cardbody">
        <p>Name:{fName + " " + lName}</p>
        <p>Phone Number: {pNum}</p>
      </div>
    </div>
  )
}

export default Card;
