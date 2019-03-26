import * as actionTypes from './types'
import uuid from 'uuid'

const addItem = (text) => {
	return {
		type: actionTypes.ADD_ITEM,
    id: uuid.v4(),
    important: false,
		text
	};
}

const toggleItem = (index) => {
	return {
		type: actionTypes.TOGGLE_ITEM,
		index
	};
}

const removeItem = (index) => {
	return {
		type: actionTypes.REMOVE_ITEM,
		index
	};
}

export {
  addItem,
  toggleItem,
  removeItem
}