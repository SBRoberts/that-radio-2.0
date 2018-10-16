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
    return (
      <ul className="stationList">
        {
          this.props.stationList ?
            this.props.stationList.stationList.map((station) => {
              // console.log(station);
              const backgroundImage = {
                backgroundImage: `url("${station.snippet.thumbnails.high.url}")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }
              
              return(
                <li
                data-video-id={station.id.videoId}
                key={station.id.videoId}
                onClick={this.clickHandler}
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

// delay prop type set to allow stationList to return with a value when fetchStationList is called
setInterval(() => {
  StationList.propTypes = {
    // fetchStationList: PropTypes.func.isRequired,
    fetchActiveStation: PropTypes.func.isRequired,
    stationList: PropTypes.object.isRequired,
    activeStation: PropTypes.object.isRequired,
  }
}, 50)
const mapStateToProps = state => ({
  activeStation: state.activeStation.activeStation,
  stationList: state.stationList.items,
})
export default connect(mapStateToProps, {fetchStationList, fetchActiveStation})(StationList);


