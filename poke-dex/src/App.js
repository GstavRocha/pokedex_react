import React from "react";
import './style/App.css';
import MainBody from "./main/MainBody";
import NavBar from "./main/head/NavBar";
import FootMark from "./main/footer/footMark";

function App() {
    return (
        <React.Fragment>
            <NavBar/>
            <MainBody/>
            <FootMark/>
        </React.Fragment>
    )
};
export default App;
