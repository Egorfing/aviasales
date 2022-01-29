import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import Reducer from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Reducer().store}>
      <PersistGate loading={null} persistor={Reducer().persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

