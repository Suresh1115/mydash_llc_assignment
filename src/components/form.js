import React, {useState} from "react";

function Form(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleEmailChange =(e)=>{
   setEmail(e.target.value);
  }
  
  const handlePasswordChange =(e)=>{
    setPassword(e.target.value);
  }

  const handleConfPasswordChange =(e)=>{
    setConfPassword(e.target.value);
  }

  const handleChange =(e)=>{
    setName(e.target.value);
  }

  const handlePhoneNumberChange =(e)=>{
    setPhoneNumber(e.target.value);
  }

  const handleSubmit=(e)=>{
    if(password!=confPassword)
    {
      alert("password Not Match");
    }
    else{
      alert('A form was submitted with Name :"' + name +'" and Email :"' + email +'"and phoneNumber:"' + phoneNumber +'"');
    }
    e.preventDefault();
  }

	return (
    <div>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <h3>Create an account</h3> 
        <label>Your email address</label><br/>
        <input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} /><br/>
        <label>Your  password</label><br/>
        <input type="password" value={password} required onChange={(e)=> {handlePasswordChange(e)}} /><br/>
        <label>Confirm Your Password</label><br/>
        <input type="password" value={confPassword} required onChange={(e)=> {handleConfPasswordChange(e)}} /><br/>
        <label>Your full name</label><br/>
        <input type="text" value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
        <label>Your phone number</label><br/>
        <input type="number" value={phoneNumber} required onChange={(e)=> {handlePhoneNumberChange(e)}} /><br/>
        <input type="checkbox" className="checkbox" />
        <label className="condition">I read and agree Terms and Conditions</label><br/>
        <button>Create account</button>
      </form>
    </div>        
	);
}
export default Form;