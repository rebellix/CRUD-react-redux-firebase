import _ from 'lodash'

const initState = {
  notes: [],
  notesLists: [],
  visibleNotesLists: [],
  loading: true,
  error: null
}

const rootReducer = (state = initState, action) => {

  switch(action.type) {
    
		case 'ADD_ITEM':
			const newNote = {
				id: action.id,
				text: action.text,
				important: false
			}
      return {
				...state,
				notes: [newNote,...state.notes]
			}
          
		case 'REMOVE_ITEM':
			return {
				...state,
				notes: state.notes.filter(item => item.id !== action.index)
			}

		case 'TOGGLE_ITEM':
			return {
				...state,
				notes: state.notes.map(item =>
					item.id === action.index 
					? {...item, important: !item.important } 
					: item
				)
      }
    
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
	      notesLists: [],
        loading: true,
        error: null
      };

    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        notesLists: action.payload,
        visibleNotesLists: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        notesLists: [],
        loading: false,
        error: action.payload
      };
    
		case 'SEND_DATA':
			return {
				...state,
				notes: []
			}
    
    case 'FILTER_CARDS':
      return {
        ...state,
        visibleNotesLists: _.filter(state.notesLists, list => {
          const hasItem = list.items.some(item => item.text.includes(action.text))
          return hasItem ? list : null
        })
      }
    
    case 'SORT_CARDS':
      const reversedLists = _.reduceRight(state.visibleNotesLists, (acc, val) => {
        return acc.concat(val)
      }, [])
      return {
        ...state,
        visibleNotesLists: reversedLists
      }

    case 'FETCH_ITEM_SUCCESS':
      return {
        ...state,
        active: action.payload
      }

    default:
      return state
  }
}

export default rootReducer