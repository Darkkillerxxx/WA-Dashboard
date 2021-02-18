import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './styles/CustomStyle.css';
import reportWebVitals from './reportWebVitals';
import '../src/styles/css/bootstrap.css';
import '../src/styles/css/bootstrap.min.css';
import '../src/styles/css/bootstrap-grid.css';
import {Provider} from 'react-redux'
import {createStore,combineReducers} from 'redux';
import MainReducer from './Store/Reducers/Main'

const rootReducer=combineReducers({
  Main:MainReducer,
})

const store=createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
