import { useQuery } from '@apollo/client'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GET_USER_BY_ID } from '../graphjs/queries'
import { useParams } from 'react-router-dom'
export default function OtherUserProfile () {
  const navigate = useNavigate()
  const { userid } = useParams()
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { userid }
  })

  if (loading) {
    return <h1>Profile Is Loading</h1>
  }
  if (error) {
    console.log(error.message)
  }

  if (data) {
    // console.log(data)
  }

  return (
    <>
      <div className='container my-container'>
        <div>
          <img
            className='circle'
            src={`https://robohash.org/${data.user.firstName}.png`}
            alt='pic'
          />
          <h5>
            {data.user.firstName} {data.user.lastName}
          </h5>
          <h5>{data.user.email}</h5>
        </div>
        {data.user.quotes.map(qt => {
          return (
            <blockquote key={qt._id}>
              <h6>{qt.name}</h6>
              <p className='right-align'>{data.user.firstName}</p>
            </blockquote>
          )
        })}
      </div>
    </>
  )
}
