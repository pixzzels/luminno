import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import categoryReducer from './category';
import listingsReducer from './listings';
import reviewsReducer from './reviews';


const rootReducer = combineReducers({
  session: sessionReducer,
  category: categoryReducer,
  listing: listingsReducer,
  review: reviewsReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;

// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import sessionReducer from './session';
// import categoryReducer from './category';
// import listingsReducer from './listings';

// // used to persist state by loading/storing store into local storage
// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('state');
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// };

// //samesies
// export const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('state', serializedState);
//   } catch {
//     // ignore write errors
//   }
// };

// const persistedState = loadState();

// const rootReducer = combineReducers({
//   session: sessionReducer,
//   category: categoryReducer,
//   listing: listingsReducer,
// });

// let enhancer;

// if (process.env.NODE_ENV === 'production') {
//   enhancer = applyMiddleware(thunk);
// } else {
//   const logger = require('redux-logger').default;
//   const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   enhancer = composeEnhancers(applyMiddleware(thunk, logger));
// }

// const configureStore = createStore(rootReducer, persistedState, enhancer);

// configureStore.subscribe(() => {
//   saveState({
//     session: configureStore.getState().session,
//     category: configureStore.getState().category,
//     listing: configureStore.getState().listing
//   });
// });

// export default configureStore;