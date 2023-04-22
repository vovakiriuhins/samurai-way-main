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
import {store, StoreType} from "./redux/state";



type AppPropsType = {
    // state: RootStatePropsType
    store: StoreType
    // addPost: ()=>void
    // updateNewPostText: (newText: string) => void
}



const App: FC<AppPropsType> = (props) => {

    const state = props.store.getState();
    const dispatch = props.store.dispatch

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar state={state}/>
                <div className={"app-wrapper-content"}>
                    <Route path={'/profile'} render={ ()=> <Profile
                        newPostText={state} postData={state}
                        store={props.store}/> }/>
                    <Route path={'/dialogs'} render={ ()=> <Dialogs store={store} state={state}/> }/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
