import React, {useState} from 'react'
import firebase from '../firebase'

const Sandbox= () => {
    const [formState, setFormState] = useState({
        email: "",
        password: "",        
    })

    const handleChange = (e) => {
        setFormState({
            ...formState, 
            [e.target.name]: e.target.value 
        }) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(formState.email, formState.password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // ..
  });
    }

    return (
    <form onSubmit={handleSubmit}>
        <p>{formState.email}, {formState.password}</p>
        <label>Email: <input type="text" name="email" onChange={handleChange}/>
        </label>
        <label>Password: <input type="text" name="password" onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" />
    </form> 
    )
}

export default Sandbox;