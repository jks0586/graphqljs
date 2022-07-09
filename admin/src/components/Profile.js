import React,{useState} from 'react'

export default function Profile() {
  
  return (
    <>
        <div className="container my-container">
            <div>
                <img className="circle" src="https://robohash.org/avtar.png"  alt="pic"/>
                <h5>Gunjan Sharma</h5>
                <h5>abc@gmail.com</h5>
            </div>
            <blockquote>
                <h6>This is working fine</h6>
                <p className="right-align">gunjan</p>
            </blockquote>
        </div>
        </>
  )
}
