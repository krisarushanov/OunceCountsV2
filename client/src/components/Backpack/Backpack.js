import React from 'react';
import Todo from "./Todo";
import './index.css';


function Backpack() {
    return (
      <div className="todoapp stack-large">
        <h1>Your Backpack</h1>
        <form>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              What do you need to pack?
            </label>
          </h2>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Add
          </button>
        </form>
        <div className="filters btn-group stack-exception">
          <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>all</span>
            <span className="visually-hidden"> Items</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Active</span>
            <span className="visually-hidden"> Item</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Completed</span>
            <span className="visually-hidden"> tasks</span>
          </button>
        </div>
        <h2 id="list-heading">
          Items in your Backpack
        </h2>
        <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
         
        >
          <Todo name = "Item1" completed={false} id="todo-0"/>
          <Todo name= "Item2" completed={false} id ="todo-1"/>
          <Todo name= "Item3" completed={false} id="todo-2"/>
          
        
        </ul>
      </div>
    );
  }

  export default Backpack;