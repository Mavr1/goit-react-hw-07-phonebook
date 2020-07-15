import actionTypes from '../actionTypes';

const initialState = {
  list: [],
  filter: '',
  error: null,
};

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_CONTACTS_SUCCESS:
      return {
        ...state,
        list: action.payload.contacts,
      };

    case actionTypes.GET_ALL_CONTACTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case actionTypes.ADD_CONTACT_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload.contact],
      };

    case actionTypes.ADD_CONTACT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case actionTypes.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.DELETE_CONTACT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case actionTypes.FILTER_CONTACTS:
      return {
        ...state,
        filter: action.payload.filter,
      };

    default:
      return state;
  }
}

export default contactReducer;
