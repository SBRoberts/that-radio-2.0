import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import logo from "./assets/boombox.svg";

import store from "./store";

import ControlPanel from "./components/ControlPanel";
import MainDisplay from "./components/MainDisplay";
import GifPanel from "./components/GifPanel";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ControlPanel />
          <main>
            <div className="landing">
              <img src={logo} alt="That Radio Logo" />
              <h1>That Radio</h1>
              <h2>A Live-Stream Radio App</h2>
            </div>
            <MainDisplay />
            <GifPanel />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
