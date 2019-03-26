import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import _ from 'lodash'

import { 
  fetchData,
  removeList,
  toggleImportant, 
  toggleCompleted, 
  removeItemFromList 
} from '../../actions'

import ListDetails from './list-details'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class ListDetailsContainer extends Component {
  state = {
    exists: true,
    local: {}
  }
  
  componentDidCatch() {
    this.setState({ exists: false })
  }

  componentDidMount() {
    this.props.fetchData();
  }

  static getDerivedStateFromProps(nextProps) {
    return { local: nextProps.project }
  }

  markAsImportant = (id) => {
    this.setState({
      local: {
        ...this.state.local,
        items: _.map(this.state.local.items, item => {
          if (item.id === id) item.important = !item.important
          return item
        })
      }
    })
  }

  markAsCompleted = (id) => {
    this.setState({
      local: {
        ...this.state.local,
        items: _.map(this.state.local.items, item => {
          if (item.id === id) item.completed = item.completed ? false : true
          return item
        })
      }
    })
  }

  markAsRemoved = (id) => {
    const newLocal = _.remove(this.state.local.items, item => item.id === id);
    this.setState({
      local: {
        publishedAt: this.state.publishedAt,
        items: newLocal
      }
    })
  }

  approveChanges = () => {
    this.props.fetchData();
  }

  render() {
    const {
      project, 
      id,
      loading,
      error, 
      removeList, 
      toggleImportant, 
      toggleCompleted, 
      removeItemFromList 
    } = this.props;

    const localProject = this.state.local;

    if (loading) return <Spinner />    
    if (error) return <ErrorIndicator />  
    return this.state.exists && project
            ? <ListDetails 
                project={ localProject }
                id={ id }
                removeList={ removeList }
                key={ id } 
                toggleCompleted={ toggleCompleted }
                toggleImportant={ toggleImportant }
                removeItemFromList={ removeItemFromList }
                markAsImportant={ this.markAsImportant }
                markAsCompleted={ this.markAsCompleted }
                markAsRemoved={ this.markAsRemoved }
                approveChanges={ this.approveChanges }
              />
            : <Redirect to="/" /> 
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const { notesLists, loading, error } = state;
  const project = notesLists ? notesLists[id] : null;
  return {
    project, id, loading, error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
    removeList: uid => dispatch(removeList(uid)),
    toggleImportant: (uid,id) => dispatch(toggleImportant(uid,id)),
    toggleCompleted: (uid,id) => dispatch(toggleCompleted(uid,id)), 
    removeItemFromList: (uid,id) => dispatch(removeItemFromList(uid,id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDetailsContainer)