import React from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    //  const [data, setData] = React.useState([])
    //  useEffect(() => {
    //      fetch('https://api.github.com/users/surajshetty14')
    //      .then((response) => response.json())
    //      .then(data => {
    //          console.log(data)
    //          setData(data)
    //      })
    //  }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} width={300} alt="" />
    <h1 className='text-center m-4 text-yellow-400 p-4 text-5xl'>Name: {data.login}</h1>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/surajshetty14')
    return response.json()
}