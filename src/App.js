import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

// components
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <>
            <Navbar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/rooms/" component={Rooms} />
                <Route exact path="/rooms/:slug" component={SingleRoom} />
                <Route component={Error} />
            </Switch>
        </>
    );
}

export default App;
