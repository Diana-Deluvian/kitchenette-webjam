import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppRouter';
import store from "./store";
import { Provider } from "react-redux";
import './styles.scss';

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );