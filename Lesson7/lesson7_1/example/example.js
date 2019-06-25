import {applyMiddleware, createStore} from 'redux';

const reducer = (initialState=0, action) => {
	if (action.type === 'INC') {
		return initialState + 1;
	} else if (action.type === "DEC") {
		return initialState - 1;
	}
	return initialState;
}

const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log('store изменился', store.getState())
})

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})


/////////



import {applyMiddleware, createStore} from 'redux';

const reducer = (state={}, action) => {
	return state;
}

const middleware = applyMiddleware();
const store = createStore(reducer, middleware);


store.dispatch({type: "FOO"})







///

import { combineReducers, createStore } from "redux";

// store.state = { user: {name: "Alice", age: 35}, tweets: [] }

const userReducer = (state={}, action) => {
  switch(action.type) {
    case "CHANGE_NAME": 
      return {...state, name: "Lev"}
    case "CHANGE_AGE": 
      return {...state, age: action.payload}
  }

  return state;
}

const tweetsReducer = (state=[], action) => {
  return state;
}

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

const store = createStore(reducers);

store.subscribe(() => {
  console.log("store изменился", store.getState());
});

store.dispatch({ type: "CHANGE_NAME", payload: "Alice" })
store.dispatch({ type: "CHANGE_AGE", payload: 35 })


/////
import { applyMiddleware, createStore } from 'redux';

const reducer = (state=0, action) => {
	if (action.type === 'INC') {
		return state + 1;
	} else if (action.type === "DEC") {
		return state - 1;
	} else if (action.type === 'E') {
    throw new Error('NOOO!');
  }
	return state;
}

const logger = (store) => (next) => (action) => {
  next(action);
}

const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch(e) {
    console.log('AAAAA', e);
  }
}

const middlewares = applyMiddleware(logger, error)

const store = createStore(reducer, middlewares);

store.subscribe(() => {
  console.log('store изменился', store.getState())
})

store.dispatch({type: "INC"})
store.dispatch({type: "E"})
