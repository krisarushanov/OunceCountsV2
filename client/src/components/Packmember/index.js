import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Card(props) {
  const { fName, lName } = props.packmemberObj;

  

  useEffect(() => {
    axios.get("/api/alphapack")
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
        Wolf:
         </div>
      <div className="cardbody">
        <p>Name:{fName + " " + lName}</p>
      </div>
    </div>
  )
}

export default Card;
