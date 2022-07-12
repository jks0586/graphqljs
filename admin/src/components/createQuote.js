import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CREATE_QUOTE } from '../graphjs/mutations'
import { GET_ALL_QUOTES } from '../graphjs/queries'

export default function CreateQuote () {
  const [quote, setQuote] = useState('')

  const [createQuote, { data, loading, error }] = useMutation(CREATE_QUOTE, {
    refetchQueries: [GET_ALL_QUOTES, 'getAllQuotes']
  })
  const navigation = useNavigate()
  if (loading) return <h1>Loading</h1>
  if (error) {
    console.log(error.message)
  }

  if (data) {
    // console.log(data)
  }
  const handleSubmit = e => {
    e.preventDefault()
    createQuote({ variables: { name: quote } })
    navigation('/')
    console.log(quote)
  }

  return (
    <div className='container my-container'>
      {error && <div className='red'>{error.message}}</div>}
      {data && data.quote && (
        <div className='green card-panel'>{data.quote}</div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={quote}
          onChange={e => setQuote(e.target.value)}
          placeholder='Write your quote'
        />
        <button className='btn green'>Create</button>
      </form>
    </div>
  )
}
