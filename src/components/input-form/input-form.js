import React from 'react'

import './input-form.css'

const InputForm = ({ addItem }) => {
  let input;
  const placeholder = 'Enter todo item';
  
  return (
    <form
      onSubmit={ e => {
        e.preventDefault();
        if (!input.value.trim()) {
          alert('Nothing was typed');
          return;
        }
        addItem(input.value);
        input.value = '';
      }}>
      <div className="form-group">
        <input 
          type="text" 
          className="form-control" 
          id="textInput" 
          placeholder={ placeholder }
          ref={ node => (input = node) }
        />
      </div>
    </form>
  )
}

export default InputForm