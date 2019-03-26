import React, { Fragment } from 'react';

import NoteListItem from '../note-list-item'

import './note-list.css'

const NoteList = ({ notes, sendData, sendAndRedirect }) => {
  return (
    <Fragment>
      <ul className="list-group">
        {
          notes.map(note => <NoteListItem note={ note } key={ note.id }/>)
        }
      </ul>
      <button
        onClick={ () => {
            if(notes.length) {
              sendData(notes);
              sendAndRedirect()
              }
            else {
              setTimeout(() => sendAndRedirect(), 2000)
            }          
          }
        } 
        type="button" 
        className="btn btn-primary btn-lg btn-block send-to-firebase"
      >
        Confirm
      </button>
    </Fragment>
  );
}

export default NoteList