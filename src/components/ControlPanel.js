import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStationList } from '../actions/stationListActions';
import { fetchActiveStation } from '../actions/fetchActiveStation';
import { displayGifPanel, displayControlPanel} from '../actions/controlPanelActions';

// Components
import StationList from './StationList';
import SearchForm from './SearchForm';

class ControlPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      shuffle: false,
      viewGifPanel: false,
    }
  }
  changeStation = (val) => {
    const stationList = this.props.stationList.stationList
    let i = this.getCurrentStationIndex() + val;
    // weird behavior where i at the 0 index === -1 on init - adding 1 changes it to 0
    // this conditional adds 1 to the index to ensure proper behaviour at the 0 index
    if (i === 0 && val === 1) {
      i++
    }
    if (i < stationList.length && i >= 0) {
      const newStation = stationList[i].id.videoId
      console.log(stationList[i].snippet.channelTitle);
      
      this.props.fetchActiveStation(newStation)
    }
  }
  getCurrentStationIndex = () => {
    // take active video ID from props, find the matching video ID from the station list and return the index of the current station
    const stationList = this.props.stationList.stationList
    const activeStation = this.props.activeStation.activeStation
    let findIndex = stationList.filter((station) => {
      let i;
      if (station.id.videoId === activeStation) {
        i = stationList.indexOf(station)
      }
      return i
    })[0]
    findIndex = stationList.indexOf(findIndex)
    return findIndex
  }

  toggleShuffle = () => {
    if(this.props.stationList){
      let stationList = this.props.stationList.stationList
      // if shuffle is on, randomize the stationList
      stationList.sort(function () { return 0.5 - Math.random() });
    }
  }

  displayGifPanel = (e) => {
    const checked = e.target.checked
    if(checked){
      this.props.displayGifPanel(true)
    } else {
      this.props.displayGifPanel(false)
    }
  }
  displayControlPanelBody = (e) => {
    const checked = e.target.checked
    if (checked) {
      this.props.displayControlPanel(true)
    } else {
      this.props.displayControlPanel(false)
    }
  }
  render() {
    const {displayControlPanel} = this.props.controlPanel
    return (
      <header id="controlPanel" className={displayControlPanel ? 'show' : null}>
        <div className="controlPanel controlPanel__body">
          <SearchForm />
          <StationList />
        </div>
        <ul className="controlPanel controlPanel__controls">
          <li className="controlPanel controlPanel__controls--item hamburgerContainer">
            <input type="checkbox" id="displayControlPanelBody" className="hiddenInput hamburgerInput" onChange={this.displayControlPanelBody}/>
            <label htmlFor="displayControlPanelBody" className="hamburger">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </label>
          </li>
          <li
          className="controlPanel controlPanel__controls--item"
          onClick={() => this.changeStation(1)}>
            <i className="fas fa-step-forward"></i>
          </li>
          <li
          className="controlPanel controlPanel__controls--item"
          onClick={() => this.changeStation(-1)}>
            <i className="fas fa-step-backward"></i>
          </li>
          <li className="controlPanel controlPanel__controls--item" onClick={this.toggleShuffle}>
            <button className="toggleShuffle">
              <i className="fas fa-random"></i>
            </button>
          </li>
          <li className="controlPanel controlPanel__controls--item" >
            <input type="checkbox" id="displayGifPanel" className="hiddenInput" onLoad={this.displayGifPanel} onChange={this.displayGifPanel}/>
            <label htmlFor="displayGifPanel" >
              <i className="fas fa-images"></i>
            </label>
          </li>
        </ul>
      </header>
    )
  }
}
const mapStateToProps = state => ({
  activeStation: state.activeStation,
  stationList: state.stationList.items,
  controlPanel: state.controlPanel,
})
export default connect(mapStateToProps, { fetchStationList, fetchActiveStation, displayGifPanel, displayControlPanel })(ControlPanel);
// export default ControlPanel;