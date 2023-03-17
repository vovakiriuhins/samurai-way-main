import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {dialogsDataPropsType, messagesPropsType, postDataPropsType} from './App';



const postData: postDataPropsType[] = [
    {id: 1, message: "It is my first post!", likesCount: 14},
    {id: 2, message: "My congratulations!", likesCount: 11},
]


const dialogs: dialogsDataPropsType[] = [
    {id: 1, name: "Vovan"},
    {id: 2, name: "Nikitos"},
    {id: 3, name: "Sergey"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Vladick"},
    {id: 6, name: "Andrey"},
]
const messages: messagesPropsType[] = [
    {id: 1, message: "Hello"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Welcome back!"},
    {id: 4, message: "How is it going?"},
    {id: 5, message: "Wanna fight with me?"},
    {id: 6, message: "Bye bye dude"},
]

ReactDOM.render(
    <App postData={postData} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);