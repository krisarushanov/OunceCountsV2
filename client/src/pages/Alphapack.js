/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Packmember from '../components/Packmember';
import Container from '../components/Grid/Container';
import Form from '../components/Backpack/Form';
import FilterButton from '../components/Backpack/FilterButton';
import Todo from "../components/Backpack/Todo";

function addWolf(event) {
    const { fName, lName } = event.target;
    set
}

function Alphapack () {
    return (
        <div>
            <div className="container" id="alphapic">
                <main className="row">
                    
                    <hr />
                    <div className="container" id="members">
                        <h1 className="title" id="title" text-align="center">Alphapack Backpack</h1>
                        </div>
                        <h3>Pack Members</h3>
                    <div className="container">
                        <div className="container" id="wolves">
                        <Packmember packmemberObj={{ fName: "Jerry", lName: "Smith" }} />
                        <Packmember packmemberObj={{ fName: "Shirley", lName: "McDonald" }} />
                        <Packmember packmemberObj={{ fName: "Erna", lName: "Ford" }} />
                        </div>
                        <div className="input-group mb-3" id="search">
                            <input type="text" className="form-control" placeholder="Pack Member's Email" aria-label="Pack Member's Email"
                            aria-describedby="basic-addon2"></input>
                            <div className="input-grou-append">
                                <button onClick={}></button> <button className="btn btn-outline-secondary" type="button">ADD A WOLF</button>
                            </div>
                        </div>
                    </div>

                       
    
        <div className="todoapp stack-large" id="backpack">
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
                        
                </main>
            </div>
        </div>
    )
}

export default Alphapack;