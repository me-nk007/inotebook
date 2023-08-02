import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom'

const Signup = (props) => {
      const [credentials, setCredentials] = useState({name: "", email: "",password:"", cpassword:""});
 
      let navigate = useNavigate();

     const handleSubmit = async (e)=>{
        e.preventDefault();
        const {name, email, password} = credentials;             // Destructuring in Javascript
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },       
            body: JSON.stringify({name, email, password})          
          });
        const json = await response.json()
        console.log(json);
        if (json.success){
            localStorage.setItem('token', json.authtoken);
            navigate("/")
            props.showAlert("Account Created Successfully","success")
        }
        else{
            props.showAlert("Invalid details","danger")
        }
    }  
        const onChange = (e)=>{
            setCredentials({...credentials, [e.target.name]: e.target.value})      // Using Spread Operator
        }

  return (
    <div className="container mt-2">
    <h2 className="my-2">Create an account to use iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="name" className="form-label"><strong>Enter your name</strong></label>
          <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label"><strong>Enter your Email address</strong></label>
          <input type="email" className="form-control" id="email" name="email" onChange={onChange}aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label"><strong>Password</strong></label>
          <input type="password" className="form-control" id="password"  name="password" minLength={5} required  onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label"><strong>Confirm Password</strong></label>
          <input type="password" className="form-control" id="cpassword" name="cpassword" minLength={5} required onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
