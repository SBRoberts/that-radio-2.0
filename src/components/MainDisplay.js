import React, { Component } from 'react'
import { connect } from 'react-redux';
import YouTube from 'react-youtube';

class MainDisplay extends Component {
  playPause = (e) => {
    // if the player state is 1 - video is playing, run pause function on key press
    if (e.target.j.playerState === 1) {
      e.target.pauseVideo()
    } else if (e.target.j.playerState === 2) {
      // if player state is 2 - video is paused, run play function on key press
      e.target.playVideo()
    }
    
  }
  changeHandler = (e) => {
    document.addEventListener('keypress', (key) => {
      if (key.code === "Space" || key.code === "KeyK"){
        this.playPause(e)
      }
    })
    document.getElementById('mainDisplay').addEventListener('click', () => {
      this.playPause(e)
    })
    
    // unmute video, to ensure consistency
    e.target.unMute()
  }
  getActiveStationDetails = (activeStation) => {
    const stationList = this.props.stationList.items
    const stationDetails = stationList.filter((station) => station.id.videoId === activeStation)
    const pageTitle = document.getElementById('pageTitle')
    let details = {};
    if(stationDetails[0]){
      pageTitle.innerHTML = `That Radio - ${stationDetails[0].snippet.channelTitle}`
      details = stationDetails[0].snippet
    }
    return details
  }
  render() {
    const {activeStation, activeGif} = this.props
    
    return (
      <section id="mainDisplay">
      {
        activeStation.item ?
          <YouTube
            videoId={activeStation.item}
            id="videoFrame"
            className="videoFrame visuallyhidden"
            onReady={this.changeHandler}
            opts={
              {
                height: '390',
                width: '640',
                playerVars: {
                  autoplay: 1
                }
              }
            }
          />
        : null
      }
      {
        activeStation.item ?
          <h3 className="activeStation">{this.getActiveStationDetails(activeStation.item)["channelTitle"]}</h3>
        : null
      }
      {
        activeGif.item ? 
          <video
          className="gifOverlay"
          id="gifOverlay"
          aria-labelledby="Active Gif Background"
          src={activeGif.item}
          type="video/mp4"
          autoPlay
          loop>
            {/* <source src={this.props.activeGif.activeGif} type="video/mp4" /> */}
            Your browser does not support HTML5 video (╥﹏╥).
          </video>
        : null
      }
      </section>
    )
  }
}
const mapStateToProps = state => ({
  activeStation: state.activeStation,
  stationList: state.stationList,
  activeGif: state.activeGif
})
export default connect(mapStateToProps)(MainDisplay);