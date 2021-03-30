/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import Todo from "../components/Backpack/Todo";
import '../components/Backpack/index.css';
import Form from'../components/Backpack/Form';
import '../components/Backpack/FilterButton'
import FilterButton from '../components/Backpack/FilterButton';
import { Container, Row, Col, Card} from 'react-bootstrap';

function addTask(name) {
  alert(name);
}
function Backpack(props) {
    return (
 <Container id="backpackHome" style={{ flexDirection:'column', alignContent:'center', justifyContent:'center'}}>
        <Row  >
        <Col  lg={12} md={8} sm={4} style={{display:'flex', justifyContent:'center', alignContent:'center'}} >
        <Card id="backpackCardOne">
          <Card.Body>
            <Card.Title style={{fontSize:'3vh', font:'Arial',fontWeight:'700'}}>Tailor your list based on considerations such as weather,
             duration, and distance.  </Card.Title>
           </Card.Body>
        </Card>
        </Col>
       
        <Col lg={12} md={8} sm={4} style={{display:'flex', justifyContent:'center', alignContent:'center'}} >
        
        <div className="todoapp stack-large">
         <Form addTask={addTask} />
          <div className="filters btn-group stack-exception">
            <FilterButton />
            <FilterButton />
            <FilterButton />
          </div>
          <h2 id="list-heading">Items in your Backpack</h2>
          <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
          >
          <Todo name = "First-aid Kit" completed={false} id="todo-0"/>
          <Todo name= "GPS Navigation" completed={false} id ="todo-1"/>
          <Todo name= "Fire Starter" completed={false} id="todo-2"/>     
        </ul>
        </div>
        </Col>

        <Col lg={12} md={8} sm={4} style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
      
        <div class="fb-share-button" data-href="https://ounce-counts.herokuapp.com/" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Founce-counts.herokuapp.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
         </Col>
          </Row>
          </Container>
    );
  }
  export default Backpack;