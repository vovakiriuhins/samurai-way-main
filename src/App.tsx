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
import {RootStatePropsType} from "./redux/state";
import {Friends} from "./components/Friends/Friends";



type AppPropsType = {
    state: RootStatePropsType
}



function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar state={props.state}/>
                <div className={"app-wrapper-content"}>
                    <Route path={'/profile'} render={ ()=> <Profile postData={props.state}/> }/>
                    <Route path={'/dialogs'} render={ ()=> <Dialogs state={props.state}/> }/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
