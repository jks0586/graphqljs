import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SIGNIN_USER } from '../graphjs/mutations'

export default function Login () {
  const navigate = useNavigate()
  const [formdata, setFormdata] = useState('')

  const [signinUser, { data, loading, error }] = useMutation(SIGNIN_USER)

  if (loading) return <h1>Loading</h1>
  if (error) {
    console.log(error.message)
  }

  if (data) {
    console.log(data)
    localStorage.setItem('token', data.user.token)

    navigate('/')
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
    // console.log(formdata)
    signinUser({ variables: { existUser: formdata } })
    // navigate('/')
  }

  return (
    <>
      <div className='container my-container'>
        <h3>Login</h3>
        <form onSubmit={handlesubmit}>
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
          <Link to='/signup'>
            <p>Don't Have Account?</p>
          </Link>
          <button className='btn' type='submit'>
            Login
          </button>
        </form>
      </div>
    </>
  )
}
