/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Col, Row, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Home() {
  return (
    
    <Container id='homePage' style={{display:'flex', flexDirection:'column', alignContent:'center', justifyContent:'center'}}>
      
      <Row>    
      <Col lg={12} md={8} sm={4} >
            <Card style={{backgroundColor:'transparent', border:'none'}}>
              <Card.Body>
                <Card.Title id="homePageTitle" >Pack, prepare & plan your adventure</Card.Title>
                   <Card.Text id="homePageText">
                    The key to an epic adventure is prepartation
                  </Card.Text>
              </Card.Body>
              
            </Card>
            </Col>
          
         <Col lg={12} md={8} sm={4} style={{display:'flex', justifyContent:'center', alignContent:'center'}} >   
         
          <Card id="homeButton" style={{width: '40rem', }}>
               <Card.Body id="backpackCard">
                  <Card.Text >
                    Adventure is out there.</Card.Text>
                     <Link to="/backpack">
                       <Button style={{fontSize:'20px'}} href="../pages/Backpack.js" variant="secondary">Start packing</Button>
                        </Link>
                </Card.Body>
            </Card> 
          
          </Col>
          </Row>
   
           

       
  
    </Container>

    
  )};

export default Home;
