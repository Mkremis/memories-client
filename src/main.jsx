import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import App from './App.jsx';
import rootReducer from './reducers'; // Asegúrate de importar el objeto de reducers, no solo el reducer
import './index.css'

const store = configureStore({
  reducer: rootReducer // Pasar el objeto de reducers aquí
}, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
