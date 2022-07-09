import React,{useState} from 'react'

export default function Signup() {
  const [formdata,setFormdata]=useState("");
  const handleChange=(e)=>{
    setFormdata({
      ...formdata,
      [e.target.name]:e.target.value
    })
    console.log(formdata);
  }

  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(formdata);
  }
  
  return (
    <>
        <div className="container my-container">
            <h3>Signup</h3>
            <form onSubmit={handlesubmit}>
              <input 
                type="text"
                name="firstName"
                placeholder="Enter first name"
                onChange={(e)=>handleChange(e)}
                required
                />

                <input 
                type="text"
                name="lastName"
                placeholder="Enter first name"
                onChange={(e)=>handleChange(e)}
                required
                />
              <input 
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={(e)=>handleChange(e)}
                required
                />
              <input 
                type="password"
                name="password"
                placeholder="Enter password"
                
                onChange={(e)=>handleChange(e)}
                required
                />
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
        </>
  )
}
