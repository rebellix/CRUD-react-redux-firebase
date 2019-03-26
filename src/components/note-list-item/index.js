import { connect } from 'react-redux';
import { removeItem, toggleItem } from '../../actions'

import NoteListItem from './note-list-item';

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItem(id)),
  toggleItem: id => dispatch(toggleItem(id))
});

export default connect(null, mapDispatchToProps)(NoteListItem)