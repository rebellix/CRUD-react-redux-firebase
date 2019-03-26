import SortSelect from './sort-select'
import { connect } from 'react-redux'
import { sortCards } from '../../actions'

const mapDispatchToProps = dispatch => {
  return {
    sortCards: () => dispatch(sortCards())
  }
}

export default connect(null, mapDispatchToProps)(SortSelect)