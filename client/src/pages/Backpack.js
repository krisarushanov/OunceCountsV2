/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-redundant-roles */
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
    
        <div className="todoapp stack-large" id="backpack">
         <Form addTask={addTask} />
          <div className="filters btn-group stack-exception">
            <FilterButton />
            <FilterButton />
            <FilterButton />
          </div>
          <h2 id="list-heading">Items in you Backpack</h2>
          <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
          >
          <Todo name = "Example" completed={false} id="todo-0"/>
          <Todo name= "Example" completed={false} id ="todo-1"/>
          <Todo name= "Example" completed={false} id="todo-2"/>
          
        
        </ul>

      </div>
      

      </Container>
    );
  }

  export default Backpack;