import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header.js";
import Main from "./components/main.js";
import Modals from "./components/modals.js";

const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <Modals />
        </div>
    );
    
}

ReactDOM.render(<App />, document.querySelector(".react-components"));