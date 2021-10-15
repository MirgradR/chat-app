import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import { Provider } from 'react-redux';

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderEntireTree(store.getState())

// store.subscribe(() => {
//   let state = store.getState()
//   renderEntireTree(state)
// })

reportWebVitals();
