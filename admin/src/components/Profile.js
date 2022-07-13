import { useQuery } from "@apollo/client";
import React from "react";
// import { useNavigate } from 'react-router-dom'
import { GET_MY_PROFILE } from "../graphjs/queries";

export default function Profile() {
  const { loading, error, data } = useQuery(GET_MY_PROFILE, {
    refetchQueries: ["getMyProfile"],
  });
  //   const navigation = useNavigate()
  if (loading) return <h1>Profile Is Loading</h1>;
  if (error) {
    console.log(error.message);
  }

  if (data) {
    // console.log(data)
  }

  return (
    <>
      <div className="container my-container">
        <div>
          <img
            className="circle"
            src={`https://robohash.org/${data.me.firstName}.png`}
            alt="pic"
          />
          <h5>
            {data.me.firstName} {data.me.lastName}
          </h5>
          <h5>{data.me.email}</h5>
        </div>
        {data.me.quotes.map((qt) => {
          return (
            <blockquote>
              <h6>{qt.name}</h6>
              <p className="right-align">{data.me.firstName}</p>
            </blockquote>
          );
        })}
      </div>
    </>
  );
}
