import actionTypes from '../actionTypes';

const switchTheme = () => ({
  type: actionTypes.SWITCH_THEME,
});

const setLoadingTrue = () => ({
  type: actionTypes.SET_LOADING_TRUE,
});

const setLoadingFalse = () => ({
  type: actionTypes.SET_LOADING_FALSE,
});

export default { switchTheme, setLoadingTrue, setLoadingFalse };
