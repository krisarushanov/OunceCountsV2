import { useState, useEffect, useContext } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { signup, UserContext } from "./UserProvider";

export function SignupForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [emergencyContactName, setemergencyContactName] = useState("");
  const [emergencyContactPhone, setemergencyContactPhone] = useState("");
  const [password, setPassword] = useState("");
  const [optIn, setOptIn] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const history = useHistory();

  const { setIsSigningUp } = useContext(UserContext);

  useEffect(() => {
    if (result) {
      console.log("-----got a sign up result");
      setIsSubmitted(false);
      setIsSigningUp(false);
      if (result.success) {
        history.push("/");
      } else {
        console.log("SignupForm::error ", result.error);
        setError(result.error);
      }
    }
  }, [result, setIsSigningUp, history]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("---------------Starting sign up");
    setIsSigningUp(true);
    const signupResult = await signup({ email, password, fname, lname, optIn, emergencyContactName, emergencyContactPhone });
    console.log("---------Setting sign up result");
    setResult(signupResult);
  };

  return (
    <div>
      {!isSubmitted && (!result || (result && error)) && (
        <>
          <h1>Sign up for access</h1>
          {error && <Alert variant="danger">{error.message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value.trim());
                }}
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={lname}
                onChange={(e) => {
                  setLname(e.target.value.trim());
                }}
              />
            </Form.Group>
            <Form.Group controlId="formEmergencyContactName">
              <Form.Label>Emergency Contact Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Name of your emergency contact"
                value={lname}
                onChange={(e) => {
                  setLname(e.target.value.trim());
                }}
              />
            <Form.Group controlId="formEmergencyContactPhone">
              <Form.Label>Emergency COntact Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the phone number of your emergency contact"
                value={lname}
                onChange={(e) => {
                  setLname(e.target.value.trim());
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value.trim());
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value.trim());
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Yes! I would like to receive updates"
                checked={optIn}
                onChange={(e) => {
                  setOptIn(e.target.checked);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <p>
            Already have an account? <Link to="/">Sign in here!</Link>
          </p>
        </>
      )}
    </div>
  );
}

export default SignupForm;




// import React, { Component } from "react";
// import "./style.css";

// class Form extends Component {
//   // Setting the component's initial state
//   state = {
//     firstName: "",
//     lastName: "",
//     password: ""
//   };

//   handleInputChange = event => {
//     // Getting the value and name of the input which triggered the change
//     const value = event.target.value;
//     const name = event.target.name;

//     // Updating the input's state
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     event.preventDefault();

//     // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
//     alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
//     this.setState({
//       firstName: "",
//       lastName: "",
//     });
//   };

//   render() {
//     // Notice how each input has a `value`, `name`, and `onChange` prop
//     return (
//       <div>
//         <p>
//           Hello {this.state.firstName} {this.state.lastName}
//         </p>
//         <form className="form">
//           <input
//             value={this.state.firstName}
//             name="firstName"
//             onChange={this.handleInputChange}
//             type="text"
//             placeholder="First Name"
//           />
//           <input
//             value={this.state.lastName}
//             name="lastName"
//             onChange={this.handleInputChange}
//             type="text"
//             placeholder="Last Name"
//           />
//           <button onClick={this.handleFormSubmit}>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;