import React from 'react'
import { Link } from 'react-router-dom'

import moment from 'moment'

import './list-card.css'

const renderSwitch = (item) => {
  const { important, completed } = item;
  if (important && completed) return 'item-important completed-item'
  else if (important) return 'item-important'
  else if (completed) return 'completed-item'
  else return null
}

const ListCard = ({ content, uid, removeList }) => {
  const { items = [], publishedAt } = content;
  return (
    <div className="card">
 
        <div className="card-header">
          <div className="time-area">
            { moment(publishedAt).format('lll') }
          </div>
          <div className="button-area">
            <Link to={'/project/' + uid}>
              <button 
                type="button" 
                className="btn btn-outline-success"
              >

                  <i className="fas fa-edit"></i>
              </button>
            </Link>
            <button 
              type="button" 
              className="btn btn-outline-danger"
              onClick={ () => removeList(uid) }
              >
              <i className="fas fa-times"></i>
            </button>     
          </div>     
        </div>
        <ul className="simple-list">
          {
            items.map((item, uid) => 
              <li 
                key={ uid }
                className={ renderSwitch(item) }
              >
                { item.text }
              </li>)
          }
        </ul>

    </div>
  )
}

export default ListCard