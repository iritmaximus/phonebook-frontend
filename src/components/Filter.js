import React from 'react'

const Filter = ({ newFilter, handleNewFilter }) => {

  return (
    <>
      Filter shown with: 
      <input 
      value={newFilter}
      onChange={handleNewFilter}
      />
    </>
  )
}


export default Filter