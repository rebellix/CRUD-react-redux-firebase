import * as actionTypes from './types'

const filterCards = (text) => {
	return {
		type: actionTypes.FILTER_CARDS,
		text
	};
}

const sortCards = () => {
	return {
		type: actionTypes.SORT_CARDS
	}
}

const setRenderingFilter = (filter) => {
	return {
		type: actionTypes.SET_RENDERING_FILTER,
		filter
	};
}

export {
	filterCards,
	sortCards,
	setRenderingFilter
}