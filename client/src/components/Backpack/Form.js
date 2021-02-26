/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";


function Form(props) {
  return (
  <div className="container">
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
      <button type="submit" className="btn btn__primary btn__lg" id="additem">
        Add
      </button>
    </form>
    </div>
  );
}

export default Form;