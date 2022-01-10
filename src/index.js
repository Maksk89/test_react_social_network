import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './my_redux/redux-store';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import { Provider } from './my_redux/StoreContext';

const rerenderEntireTree = (state) => {
    ReactDOM.render (
        <React.StrictMode>
            <Router>
                <Provider store = {store}>
                    <App />
                </Provider>
            </Router>
        </React.StrictMode>,
        document.getElementById ('root')
    );
};

rerenderEntireTree (store.getState ());
store.subscribe (() => {
    const state = store.getState ();
    rerenderEntireTree (state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals ();


