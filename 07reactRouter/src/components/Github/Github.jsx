import React, { useState , useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
       const data =  useLoaderData()
    //  const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/SanjuRohilla')
    //    .then(response => response.json())
    //    .then(data => {
    //       console.log(data);
    //       setData(data);
    //    })
    // }, [])
    
  return (
    <div>
        Github Repos: {data.public_repos}
        <img src={data.avatar_url} alt="git picture" width={300} />
     </div>
  )
}

export default Github

export const githubInfoLoader =  async ()  => {
    const response =  await fetch('https://api.github.com/users/SanjuRohilla')
    return response.json()
}