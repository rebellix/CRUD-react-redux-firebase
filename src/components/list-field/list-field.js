import React from 'react'

import _ from 'lodash'

import ListCard from '../list-card'

import './list-field.css'

const ListField = ({ cards }) => {
  if (cards) 
    return (
    <div className="container">
      <div className="row cards-container">
        {
          _.map(cards, (card, key) => 
            <ListCard content={ card } key={ key } uid={ key }/>)
            .reverse()
        }
      </div>
    </div>
    )
  else {
    return (
      <div>Sorry there's nothing to see yet! Go add new list</div>
    )
  }   
}

export default ListField
