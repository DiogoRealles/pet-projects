import React from 'react'

const page = ({ params: { id } }: { params: { id: string } }) => {
  // const id = params();
  return (
    <div>
      <h1>Post</h1>
      <h1>ID: {id}</h1>
    </div>
  )
}

export default page
