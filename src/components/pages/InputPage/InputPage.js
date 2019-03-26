import React from 'react'

import InputForm from '../../input-form'
import NoteList from '../../note-list'

import './InputPage.css'

const InputPage = () => {
  return (
    <div className="container">
      <InputForm />
      <NoteList />
    </div>
  );
}

export default InputPage