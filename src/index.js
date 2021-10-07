import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';

let renderEntireTree = (data) => {
    ReactDOM.render(
      <React.StrictMode>
        <App data={data} dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
renderEntireTree(store.getData())
store.subscribe(renderEntireTree)

reportWebVitals();
