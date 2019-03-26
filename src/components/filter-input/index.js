import FilterInput from './filter-input'
import { connect } from 'react-redux'
import { filterCards } from '../../actions'

const mapDispatchToProps = dispatch => {
  return {
    filterCards: inputValue => dispatch(filterCards(inputValue))
  }
}

export default connect(null, mapDispatchToProps)(FilterInput)