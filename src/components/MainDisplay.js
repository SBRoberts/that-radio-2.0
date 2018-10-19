import React, { Component } from 'react'
import { connect } from 'react-redux';
import YouTube from 'react-youtube';

class MainDisplay extends Component {
  constructor(){
    super();
    this.state = {
      autoPlay: 1,
    }
  }
  componentDidMount(){
    // this.toggleAutoPlay()
    console.log(this.props);
    
  }
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
    const stationList = this.props.stationList.stationList
    const stationDetails = stationList.filter((station) => station.id.videoId === activeStation)
    const pageTitle = document.getElementById('pageTitle')
    let details = {};
    if(stationDetails[0]){
      pageTitle.innerHTML = `That Radio - ${stationDetails[0].snippet.channelTitle}`
      details = stationDetails[0].snippet
    }
    return details
  }

  toggleAutoPlay = () => {
    window.addEventListener('resize', (e) => {
      const width = e.currentTarget.innerWidth
      const height = e.currentTarget.innerHeight
      if (width <= 420 || height <= 420) {
        this.setState({
          autoPlay: 0,
        })
      } else{
        this.setState({
          autoPlay: 1,
        })
      }
    })
  }
  render() {
    return (
      
      <section id="mainDisplay">
      {
        this.props.activeStation.activeStation ?
          <YouTube
            videoId={this.props.activeStation.activeStation}
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
        this.props.activeStation.activeStation && this.props.stationList.stationList ?
          <h3 className="activeStation">{this.getActiveStationDetails(this.props.activeStation.activeStation)["channelTitle"]}</h3>
        : null
      }
      {
        this.props.activeGif.activeGif ? 
          <video
          className="gifOverlay"
          id="gifOverlay"
          aria-labelledby="Active Gif Background"
          src={this.props.activeGif.activeGif}
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
  activeStation: state.activeStation.activeStation,
  stationList: state.stationList.items,
  activeGif: state.activeGif.activeGif
})
export default connect(mapStateToProps)(MainDisplay);