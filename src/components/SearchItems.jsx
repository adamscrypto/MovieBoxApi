import React, { useState } from 'react'


const SearchItems = ({query, onChange, placeholder='Search Movies...'}) => {
 
  return (
    <div>
        <input type="text" value={query} placeholder={placeholder} onChange={(e)=> onChange(e.target.value)}/>
    </div>
  )
}

export default SearchItems