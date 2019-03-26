import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchData } from '../../actions';

import ListField from './list-field'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class ListFieldContainer extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  
  render() {
    const { visibleNotesLists, loading, error } = this.props;
    if (loading) return <Spinner />    
    if (error) return <ErrorIndicator />   
    return <ListField cards={ visibleNotesLists } />;
  }
}

const mapStateToProps = ({ visibleNotesLists, loading, error }) => {
  return {
    visibleNotesLists, loading, error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFieldContainer)