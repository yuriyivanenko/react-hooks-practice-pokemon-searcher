import React from 'react'

function Search({ handleSearchText }) {
  const handleSearchChange = ({ target }) => handleSearchText(target.value)

  return (
    <div className='ui search'>
      <div className='ui icon input'>
        <input className='prompt' onChange={handleSearchChange} />
        <i className='search icon' />
      </div>
    </div>
  )
}

export default Search
