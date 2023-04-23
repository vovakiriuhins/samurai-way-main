import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/state'
import {BrowserRouter} from "react-router-dom";


let _rerenderEntoreTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root'));
}

_rerenderEntoreTree();

store.subscribe(_rerenderEntoreTree)