import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './my_redux/state';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as ReactDOM from 'react-dom';

const rerenderEntireTree = (state) => {
    ReactDOM.render (
        <React.StrictMode>
            <Router>
                <App state = {state} dispatch = {store.dispatch.bind (store)} />
            </Router>
        </React.StrictMode>,
        document.getElementById ('root')
    );
}

rerenderEntireTree (store.getState ());
store.subscribe (rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals ();


