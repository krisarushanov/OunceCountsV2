import React from 'react';
import '../App.css';

function Backpack(props) {
    return (
      <div className="todoapp stack-large">
        <h1>Backpack</h1>
        <form>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              Add an Item
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
        
        <h2 id="list-heading">
          Items Remaining
        </h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-0" type="checkbox" defaultChecked={true} />
              <label className="todo-label" htmlFor="todo-0">
                Example
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden"></span>
              </button>
              <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden"></span>
              </button>
            </div>
          </li>
          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-1" type="checkbox" />
              <label className="todo-label" htmlFor="todo-1">
                Example
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden"></span>
              </button>
              <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden"></span>
              </button>
            </div>
          </li>
          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-2" type="checkbox" />
              <label className="todo-label" htmlFor="todo-2">
                Example
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden"></span>
              </button>
              <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden"></span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
  export default Backpack;