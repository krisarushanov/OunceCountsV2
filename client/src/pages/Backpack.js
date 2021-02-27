import React from 'react';
import Todo from "../components/Backpack/Todo";
import '../components/Backpack/index.css';
import Form from'../components/Backpack/Form';
import '../components/Backpack/FilterButton'
import FilterButton from '../components/Backpack/FilterButton';
import Container from '../components/Grid/Container';



function addTask(name) {
  alert(name);
}

function Backpack(props) {
    return (
  
 <Container>
        
        <div className="row" > 
        <div className="col-md-5" id="colOne"> 
        <div className="card mb-4" id="cardOne">
     
        <div className="card-body"  > 
        <h1 style={{fontSize:"50px",fontWeight:"800", letterSpacing: "1.13px"}}>Pack your backpack</h1>
        <h2 style={{fontSize:"25px"}} >Tailor your list based on considerations such as weather,
          duration, and distance. Add, Edit and Remove items from your bag. 
        </h2>
        </div>
        </div>
        
        
        <div className="row" > 
        <div className="col-md-5" id="colTwo"> 
        <div className="card mb-4"id="cardTwo" >
        <div className="card-body"  > 
        <h1 style={{fontSize:"50px",fontWeight:"800", letterSpacing: "1.13px"}}>Wolfpack</h1>
        <h2 style={{fontSize:"25px"}} >Collaborate on your adventure Backpack
        with your Wolfpack to stay safe and avoid overpacking.
       
        </h2>
        </div>
        </div>
        </div>

      
        </div>
        </div>


      
        
        <div className="col"> 
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
     
      </div>
      </div>
    
      
      
   
   </Container>
      
    );
  }

  export default Backpack;