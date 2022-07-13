import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_QUOTES } from '../graphjs/queries'
export default function Home () {
  // useEffect(() => {
  //   fetch('http://localhost:4000', {
  //     method: 'post',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       query: `
  //     query getAllQuotes{
  //       quotes{
  //         name
  //       }
  //     }
  //     `
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, [])
  const { loading, error, data } = useQuery(GET_ALL_QUOTES)

  if (loading) return <h1>Loading</h1>
  if (error) {
    console.log(error.message)
  }

  if (data) {
    console.log(data)
  }

  return (
    <div className='container'>
      {data.quotes.map(quote => {
        return (
          <blockquote key={quote._id}>
            <h6>{quote.name}</h6>
            <p className='right-align'>~{quote.by.firstName}</p>
          </blockquote>
        )
      })}
    </div>
  )
}
