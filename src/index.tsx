import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/state'
import {BrowserRouter} from "react-router-dom";

// type rerenderEntireTreePropsType = {
//     state: RootStatePropsType
//     addPost: (postMessage: string)=>void
// }

let _callSubscriber = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root'));
}

_callSubscriber();

store.subscribe(_callSubscriber)