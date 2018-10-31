import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';

import {connect} from 'react-redux';
import {fetchStationList} from '../actions/stationListActions';
import {fetchActiveStation} from '../actions/fetchActiveStation';


class StationList extends Component {
  componentDidMount() {
    // this.getVideos()
    // this.props.fetchStationList()
  }
  clickHandler = (e) => {
    const key = e.currentTarget.dataset.videoId
    this.props.fetchActiveStation(key)
    
  }
  render() {
    const stationList = this.props.stationList.items;
    return (
      <ul className="stationList">
        {
          stationList.length ?
            stationList.map((station) => {
              return(
                <li
                data-video-id={station.id.videoId}
                key={station.id.videoId}
                onClick={this.clickHandler}
                onTouchStart={this.clickHandler}
                className="stationList__station">
                  <h4>{station.snippet.channelTitle}</h4>
                </li>
              )
            })
          : null
        }
      </ul>
    )
  }
}

StationList.propTypes = {
  // fetchStationList: PropTypes.func.isRequired,
  fetchActiveStation: PropTypes.func.isRequired,
  stationList: PropTypes.object.isRequired,
  activeStation: PropTypes.object,
}

const mapStateToProps = state => ({
  activeStation: state.activeStation,
  stationList: state.stationList,
})
export default connect(mapStateToProps, {fetchStationList, fetchActiveStation})(StationList);


