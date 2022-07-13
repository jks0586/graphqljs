import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_QUOTES_BY_USER,GET_MY_PROFILE } from '../graphjs/queries'
export default function Home () {
  
  // const queryMultiple = () => {
  //   const res1 = useQuery(GET_ALL_QUOTES_BY_USER, {
  //     refetchQueries: ["getAllQuotesByUser"],
  //   });
  //   const res2 =  useQuery(GET_MY_PROFILE, {
  //     refetchQueries: ["getMyProfile"],
  //   });
  //   return [res1, res2];
  // }
  
  // const [
  //     { loading: loading1, data: data1,error: error1 },
  //     { loading: loading2, data: data2 ,error: error2}
  // ] = queryMultiple()


  // if (loading1) return <h1>Loading</h1>
  // if (error1) {
  //   console.log(error1.message)
  // }

  // if (data1) {
  //   console.log(data1)
  // }

  // if (loading2) return <h1>Loading</h1>
  // if (error2) {
  //   console.log(error2.message)
  // }

  // if (data2) {
  //   console.log(data2)
  // }



  const { loading, error, data } = useQuery(GET_ALL_QUOTES_BY_USER, {
    refetchQueries: ["getAllQuotesByUser"],
  })

  if (loading) return <h1>Loading</h1>
  if (error) {
    console.log(error.message)
  }

  if (data) {
    console.log(data)
  }

  return (
    <div className='container'>
      {data.uquotes.map(quote => {
        return (
          <blockquote key={quote._id}>
            <h6>{quote.name}</h6>
            <p className='right-align'>~{data.me.firstName}</p>
          </blockquote>
        )
      })}
    </div>
  )
}
