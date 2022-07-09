import React,{useState} from 'react'

export default function Login() {
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
            <h3>Login</h3>
            <form onSubmit={handlesubmit}>
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
                <button className="btn" type="submit">Login</button>
            </form>
        </div>
        </>
  )
}
