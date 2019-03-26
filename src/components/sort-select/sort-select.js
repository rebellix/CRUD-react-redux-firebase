import React from 'react'

import './sort-select.css'

const SortSelect = ({ sortCards }) => {
  return (
    <div className="input-group mb-3">
      <select
        onChange={ () => sortCards() }
        className="custom-select sort" 
        id="sortSelect"
        defaultValue="1"
      >
        <option value="1">Latest first</option>
        <option value="2">Oldest first</option>
      </select>
      <div className="input-group-append">
        <label 
          className="input-group-text" 
          htmlFor="sortSelect"
        >
          Sort
        </label>
      </div>
    </div>
  )
}

export default SortSelect