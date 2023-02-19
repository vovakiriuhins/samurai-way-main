import React from 'react';
import './App.css';
import Technologies from "./Components/Technologies/Technologies";

function App() {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
}


function Header() {
    return (
        <div>
            <a href="#">Home</a>
            <a href="#">News Feed</a>
            <a href="#">Messages</a>
        </div>
    )
}




export default App;
