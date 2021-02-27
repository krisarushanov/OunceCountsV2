import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import  { useEffect } from "react";
import mtrainier from '../../images/mtrainier.jpeg';
import './style.css';

function Members() {
    // const { name } = props.memberObj;
    
    // useEffect(() => {
    //   axios.get("/api/wolfpack")
    //     .then(res => { 
    //       console.log(res) 
    //     })
    //     .catch(err => { 
    //       console.log(err) 
    //     })
    // }, [])
  
    return (
      <div className="container-fluid">
        <div className="row">
          Members:
           </div>
           <div className="card width:18rem;">
            <img src={mtrainier} className="card-img-top-thumbnail" alt="mtrainier" id="mtrainier"></img>
            <p className="card-text">Name: John Snow</p>
        </div>
        </div>
    )
    }
  
  export default Members;
  