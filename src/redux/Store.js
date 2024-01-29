 import {createStore,combineReducers} from 'redux';
 import {applyMiddleware} from 'redux'
 import {thunk} from 'redux-thunk'


function dataInfo(state = {
    data: [],
    error: '',
    loading: false,
  }, action) {
    switch (action.type) {
      case 'set-data':
        return {
          ...state,
          data: action.payload
        };
      case 'loading':
        return {
          ...state,
          loading: action.payload
        };
      case 'error':
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  // Action Creators
  function setData(data) {
    return {
      type: 'set-data',
      payload: data
    };
  }
  
  function setLoading(isLoading) {
    return {
      type: 'loading',
      payload: isLoading
    };
  }
  
  function setError(error) {
    return {
      type: 'error',
      payload: error
    };
  }
  
  // Store
  const appReducer = combineReducers({
    dataInfo
  });
  
  const store = createStore(appReducer,applyMiddleware(thunk));
  
  export default store;
  
  export {
    setData,
    setError,
    setLoading
  };
  