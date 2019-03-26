import React from 'react'

import './note-list-item.css'

const NoteListItem = ({ note, removeItem, toggleItem }) => {

  const { text, important, id } = note;
  
  return (
    <li className="list-group-item">
      <button
        onClick={ () => toggleItem(id) }
        className="btn btn-light circle"
        id="important" 
			>
				<i className={
          important ? 'fas fa-star important' : 'fas fa-star'
        }></i>    
			</button>
      <div className="content-box">
        <span 
          className={
            important ? 'item-content item-important' : 'item-content'
          }
        >
          { text }
        </span>
      </div>
      <button
        onClick={ () => removeItem(id) }
        className="btn btn-light no-border hidden"  
      >
        <i className="fas fa-times"></i>    
      </button>
    </li>
  )
}

export default NoteListItem