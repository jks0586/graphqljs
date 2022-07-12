import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SIGNUP_USER } from '../graphjs/mutations'
export default function Signup () {
  const navigate = useNavigate()
  const [formdata, setFormdata] = useState('')

  const [signupUser, { data, loading, error }] = useMutation(SIGNUP_USER)

  if (loading) return <h1>Loading</h1>
  if (error) {
    console.log(error.message)
  }

  if (data) {
    console.log(data)
  }
  const handleChange = e => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
    // console.log(formdata)
  }

  const handlesubmit = e => {
    e.preventDefault()
    console.log(formdata)
    signupUser({ variables: { userNew: formdata } })
    // navigate('/')
  }

  return (
    <>
      <div className='container my-container'>
        <h3>Signup</h3>
        {error && <div className='red card-panel'>{error.message}</div>}
        {data && data.user && (
          <div className='green card-panel'>
            {data.user.firstName} is Signedup. Now you can login
          </div>
        )}
        <form onSubmit={handlesubmit}>
          <input
            type='text'
            name='firstName'
            placeholder='Enter first name'
            onChange={e => handleChange(e)}
            required
          />

          <input
            type='text'
            name='lastName'
            placeholder='Enter first name'
            onChange={e => handleChange(e)}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Enter Email'
            onChange={e => handleChange(e)}
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Enter password'
            onChange={e => handleChange(e)}
            required
          />
          <Link to='/login'>
            <p>Already have an Account</p>
          </Link>
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
