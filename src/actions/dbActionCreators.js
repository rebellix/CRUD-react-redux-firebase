import * as actionTypes from './types'
import {
  todosRef
} from '../config'

import _ from 'lodash'

const sendData = arr => dispatch => {
	todosRef.push().set({
		publishedAt: Date.now(),
		items: arr
	})
	.then(dispatch({
		type: actionTypes.SEND_DATA
	}))
	.catch(err => dispatch(dataError(err)));	
}

const dataRequested = () => {
  return {
    type: actionTypes.FETCH_DATA_REQUEST
  }
}

const dataLoaded = (data) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: data
  }
}

const dataError = (error) => {
  return {
    type: actionTypes.FETCH_DATA_FAILURE,
    payload: error
  }
}

const fetchData = () => dispatch => {
	dispatch(dataRequested());
	todosRef.once('value')
		.then(snapshot => dispatch(dataLoaded(snapshot.val())))
		.catch(error => dispatch(dataError(error)))
}

const removeList = uid => dispatch => {
	todosRef.child(uid).remove();
};

const toggleImportant = (uid,id) => dispatch => {
	todosRef.child(`${ uid }/items/`).once('value')
	 .then(snapshot => snapshot.val())
	 .then(val => {
		 _.map(val, (item, num) => {
			if (item.id === id) {
				todosRef.child(`${ uid }/items/${ num }`).update({ 
					important: !item.important
				})
			}
		 })
	 })
	 .catch(err => console.log(err))
	}

const toggleCompleted = (uid,id) => dispatch => {
	todosRef.child(`${ uid }/items/`).once('value')
		.then(snapshot => snapshot.val())
	  .then(val => {
			_.map(val, (item,num) => {
				if (item.id === id) {
					todosRef.child(`${ uid }/items/${ num }`).update({ 
						completed: item.completed ? false : true
					})
				}
				return item
			})
		})
		.catch(err => console.log(err))
}

const removeItemFromList = (uid,id) => dispatch => {
	let newItems;
	todosRef.child(`${ uid }/items/`).once('value')
		.then(snapshot => {
			newItems = snapshot.val().filter(item => item.id !== id);
			return newItems
		})
		.then(newItems => todosRef.child(uid).update({
			items: newItems
		}))
		.catch(err => console.log(err));
}


export {
	sendData,
	fetchData,
  removeList,
  dataRequested,
  dataLoaded,
	dataError,
	toggleImportant,
	toggleCompleted,
	removeItemFromList
}