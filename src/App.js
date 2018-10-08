import React, { Component } from 'react';
import {Provider} from 'react-redux';
import './App.css';

import store from './store';

import ControlPanel from './components/ControlPanel'
import MainDisplay from './components/MainDisplay'
import GifPanel from './components/GifPanel'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MainDisplay />
          <ControlPanel />
          <GifPanel />
        </div>
      </Provider>
    );
  }
}

export default App;
