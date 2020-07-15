import actionTypes from '../actionTypes';

const initialState = {
  currentTheme: 'light',
  isLoading: false,
};

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SWITCH_THEME:
      if (state.currentTheme === 'light') {
        return { currentTheme: 'dark' };
      } else return { currentTheme: 'light' };

    case actionTypes.SET_LOADING_TRUE:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.SET_LOADING_FALSE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}

export default themeReducer;
