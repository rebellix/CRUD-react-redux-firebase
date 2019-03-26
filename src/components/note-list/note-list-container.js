import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { sendData } from '../../actions'

import NoteList from './note-list'

class NoteListContainer extends Component {
  constructor() {
		super();
		this.state = {
			isListSent: false
		};
  }

  sendAndRedirect = () => {
    this.setState({ isListSent: true })
  }
  
  render() {
    const { notes, sendData } = this.props;
    return this.state.isListSent
            ? <Redirect to="/" />
            : <NoteList
                notes={ notes }
                sendData={ sendData }
                sendAndRedirect= { this.sendAndRedirect }
              />
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendData: arr => dispatch(sendData(arr))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteListContainer)