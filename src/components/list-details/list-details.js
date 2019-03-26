import React, { Fragment } from 'react'

import _ from 'lodash'
import moment from 'moment'

import './list-details.css'

const ListDetails = ({ 
  project, 
  id, 
  removeList, 
  toggleImportant, 
  toggleCompleted, 
  removeItemFromList,
  markAsImportant,
  markAsCompleted,
  markAsRemoved,
  approveChanges
}) => {
  const { items, publishedAt } = project;

    return (
      <Fragment>
        <div className="card list-details">
          <div className="card-header">
            <div className="details-time-area">
              { moment(publishedAt).format('MMMM Do YYYY, h:mm:ss') }
            </div>
            <div className="details-button-area">
              <button 
                type="button" 
                className="btn btn-outline-danger"
                onClick={ () => {
                  removeList(id);
                  approveChanges()
                  } 
                }
              >
                <i className="fas fa-times"></i>
              </button>     
            </div>     
          </div>
          <ul className="list-group list-group-flush">
            {
              _.map(items, item => {
                if(item) 
                  return (
                  <li 
                    className="list-group-item"
                    key={ item.id }  
                  >
                    <button
                      onClick={ () => {
                        toggleImportant(id, item.id);
                        markAsImportant(item.id);
                      } }
                      className="btn btn-light circle"
                      id="important" 
                    >
                      <i className={
                        item.important ? 'fas fa-star important' : 'fas fa-star'
                      }></i>    
                    </button>
                    <div 
                      onClick={ () => {
                        toggleCompleted(id, item.id);
                        markAsCompleted(item.id);
                        } 
                      }
                      className="details-content-box"
                    >
                      <span
                        className={ item.completed ? 'item-content item-completed' : 'item-content' }
                      >
                        { item.text }
                      </span>
                    </div>
                    <button
                      onClick={ () => {
                        removeItemFromList(id, item.id);
                        markAsRemoved(item.id)
                       } 
                      }
                      className="btn btn-light no-border hidden"  
                    >
                      <i className="fas fa-times"></i>    
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <button 
            onClick={ () => approveChanges() }
            type="button"
            className="btn btn-success btn-lg btn-block approve-changes"
          >
            Approve
        </button>
      </Fragment>
    )

}

export default ListDetails