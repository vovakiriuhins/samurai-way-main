import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {store} from "./redux/redux-store";
import {StoreType} from "./redux/redux-store";



type AppPropsType = {
    store: StoreType
}



const App: FC<AppPropsType> = (props) => {

    const state = props.store.getState();
    const dispatch = props.store.dispatch

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar state={props.store}/>
                <div className={"app-wrapper-content"}>
                    <Route path={'/profile'} render={ ()=> <Profile
                        store={props.store}/> }/>
                    <Route path={'/dialogs'} render={ ()=> <Dialogs store={store} /> }/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
