import React from 'react'
import { useParams } from 'react-router-dom'

const CollectionPage = () => {
  const params =  useParams()
  console.log(params);
  return (
    <h1 className='collection-page'>Collection Page</h1>
  )
}

export default CollectionPage