import React from "react";
import "./index.css";
import { useState } from "react";



function App() {
  const [values, setValues] = useState({
   firstName:"",
   lastName:"",
   email:"", 
  });

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true)
    }
    setSubmitted(true);
  }

  
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
        <input 
          onChange ={handleFirstNameInputChange}
          value={values.firstName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? <span>Please enter a First Name</span> : null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input 
          onChange ={handleLastNameInputChange}
          value={values.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? <span>Please enter a Last Name</span> : null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input 
          onChange ={handleEmailInputChange}
          value={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? <span>Please enter an Email Address</span> : null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
export default App;
