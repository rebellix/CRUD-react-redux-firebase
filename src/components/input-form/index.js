import { connect } from 'react-redux'
import { addItem } from '../../actions'

import InputForm from './input-form'

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: text => dispatch(addItem(text)),
  }
}

export default connect(null, mapDispatchToProps)(InputForm)