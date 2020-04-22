import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
    render(){
        return(
            <div className="App">
                <h1> My first React from scratch </h1>
                <p>This has been a good exercise for me to better understand how react works as I have had to put the pieces together myself.</p>
            </div>
        );
    }
}

export default hot(module)(App);