import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";


export type postDataPropsType = {
    id: number
    likesCount: number
    message: string
}
export type dialogsDataPropsType = {
    id: number
    name: string
}
export type messagesPropsType = {
    id: number
    message: string
}

export type AppPropsType = {
    postData: postDataPropsType[]
    dialogs: dialogsDataPropsType[]
    messages: messagesPropsType[]
}



function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={'/profile'} render={ ()=> <Profile postData={props.postData}/> }/>
                    <Route path={'/dialogs'} render={ ()=> <Dialogs dialogs={props.dialogs} messages={props.messages}/> }/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
