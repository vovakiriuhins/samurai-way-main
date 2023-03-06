import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";


function App(): JSX.Element {
    return (
        <div className={"app-writer"}>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}


export default App;
