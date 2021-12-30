import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './my_redux/state';

import App from './App';
import { addPost, updateNewPostText } from './my_redux/state';

const rerenderEntireTree = (state) => {
    ReactDOM.render (
        <React.StrictMode>
            <Router>
                <App appState = {state} addPost = {addPost}
                     updateNewPostText = {updateNewPostText} />
            </Router>
        </React.StrictMode>,
        document.getElementById ('root')
    );
}

rerenderEntireTree (state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals ();
