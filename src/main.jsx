import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import reducer from './reducers'
import {Provider} from 'react-redux'
import {configureStore, applyMiddleware, compose} from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

console.log(reducer)
const store =configureStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <App />
</Provider>
);
