import React from 'react'

import FilterInput from '../filter-input'
import SortSelect from '../sort-select'

import './filter-panel.css'

const FilterPanel = () => {
  return (
    <form className="search-form">
        <FilterInput />
        <SortSelect />
      </form>
  )
}

export default FilterPanel