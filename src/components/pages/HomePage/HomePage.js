import React from 'react'

import FilterPanel from '../../filter-panel'
import ListField from '../../list-field'

import './HomePage.css'

const HomePage = () => {
  return (
    <div className="container">
      <FilterPanel />
      <ListField />
    </div>
  );
}

export default HomePage