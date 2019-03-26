import { connect } from 'react-redux'
import { removeList } from '../../actions'

import ListCard from './list-card'

const mapDispatchToProps = (dispatch) => {
  return {
    removeList: uid => dispatch(removeList(uid))
  }
}

export default connect(null, mapDispatchToProps)(ListCard)