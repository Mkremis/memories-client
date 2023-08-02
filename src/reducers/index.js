// import {combineReducers} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import posts from './posts'


export default combineReducers({
    posts: posts // Aquí deberías tener otros reducers si los tienes, separados por coma
  });