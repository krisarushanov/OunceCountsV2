/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div id="aboutbg">
      <div className="container">
      <main className="row">
            <div className="cardHome" id="description">
              <h1 className="title" id="titleHome" style={{marginLeft:'320px'}}>Pack, prepare &  plan your adventure.</h1>
            <hr />
              <div className="cardHomeBody">
              The key to an epic adventure is prepartation. <br></br> Share your custom backpack with friends to collaborate on your next adventure.
            </div>
            </div>

            <Card style={{ marginLeft:'440px', width: '28rem', marginTop:'160px', backgroundColor:"#5483b9"}}>
               
                    <Card.Body id="backpackCard">
                        
                        <Card.Text style={{ color: 'white', fontWeight:'bold'}}>
                            Adventure is out there.
                        </Card.Text>
                       <Link to="/backpack">
                        <Button href="../pages/Backpack.js" variant="secondary">Build your backpack</Button>
                        </Link>
                    </Card.Body>
            </Card> 

        
    </main>
</div>
    </div>
  );
}

export default Home;
