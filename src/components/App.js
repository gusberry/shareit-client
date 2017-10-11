import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Router from './Router';

const store = createStore(
  combineReducers({
    isDrawerOpen: (state = false, action) => {
      if (action.type === 'DrawerToggle') {
        return action.isDrawerOpen;
      }
      return state;
    },
  }),
  window &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default () => (
  <Provider store={store}>
    <Router
      onNavigationStateChange={(prev, current, action) => {
        store.dispatch({
          type: 'DrawerToggle',
          isDrawerOpen: action.routeName === 'DrawerOpen',
        });
      }}
    />
  </Provider>
);
