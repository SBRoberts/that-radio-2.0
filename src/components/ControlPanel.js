import React, { Component } from 'react';

// Components
import StationList from './StationList';
import SearchForm from './SearchForm';

class ControlPanel extends Component {
render() {
    return (
      <div>
        <SearchForm />
        <StationList />
      </div>
    )
  }
}

export default ControlPanel;