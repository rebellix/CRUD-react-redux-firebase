import React from 'react'

import './filter-input.css'

const FilterInput = ({ filterCards }) => {
  let input;

  return (
    <div className="input-group mb-3">
      <input
        onChange={ (e) => filterCards(e.target.value) } 
        type="text" 
        className="form-control search-form-input" 
        placeholder="Search for..." 
        id="filterInput" 
        aria-describedby="button-addon2" 
      />
      <div className="input-group-append">
        <label 
          className="input-group-text" 
          htmlFor="filterInput"
        >
          Filter
        </label>
      </div>
    </div>
  )
}
export default FilterInput