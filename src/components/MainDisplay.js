import React, { Component } from "react";
import { connect } from "react-redux";
import YouTube from "react-youtube";
import playSvg from "../assets/play.svg";

class MainDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: true
    };
    this.mainDisplay = React.createRef();
    this.musicPlayer = React.createRef();
  }
  componentDidMount() {
    this.mainDisplay.current.addEventListener("click", e => {
      this.playPause();
    });
  }
  playPause = async e => {
    const { internalPlayer } = this.musicPlayer.current;
    const playerState = await internalPlayer.getPlayerState();

    // if the player state is 1 - video is playing, run pause function on key press
    if (playerState === 1) {
      internalPlayer.pauseVideo();
      this.setState({ isPlaying: false });
    } else if (playerState === 2) {
      // if player state is 2 - video is paused, run play function on key press
      internalPlayer.playVideo();
      this.setState({ isPlaying: true });
    } else {
      return;
    }
  };
  changeHandler = e => {
    document.addEventListener("keypress", key => {
      if (key.code === "Space" || key.code === "KeyK") {
        this.playPause();
      }
    });

    // unmute video, to ensure consistency
    e.target.unMute();
  };
  getActiveStationDetails = activeStation => {
    const stationList = this.props.stationList.items;
    const stationDetails = stationList.filter(
      station => station.id.videoId === activeStation
    );
    const pageTitle = document.getElementById("pageTitle");
    let details = {};
    if (stationDetails[0]) {
      pageTitle.innerHTML = `That Radio - ${stationDetails[0].snippet.channelTitle}`;
      details = stationDetails[0].snippet;
    }
    return details;
  };
  render() {
    const { activeStation, activeGif } = this.props;

    return (
      <section ref={this.mainDisplay} className="mainDisplay">
        {activeStation.item ? (
          <YouTube
            videoId={activeStation.item}
            id="videoFrame"
            className="videoFrame visuallyhidden"
            ref={this.musicPlayer}
            onReady={this.changeHandler}
            opts={{
              height: "390",
              width: "640",
              playerVars: {
                autoplay: 1
              }
            }}
          />
        ) : null}
        {activeStation.item ? (
          <h3 className="activeStation">
            {this.getActiveStationDetails(activeStation.item)["channelTitle"]}
          </h3>
        ) : null}
        {activeGif.item ? (
          <video
            className="gifOverlay"
            id="gifOverlay"
            aria-labelledby="Active Gif Background"
            src={activeGif.item}
            type="video/mp4"
            autoPlay
            loop
          >
            {/* <source src={this.props.activeGif.activeGif} type="video/mp4" /> */}
            Your browser does not support HTML5 video (╥﹏╥).
          </video>
        ) : null}
        {activeStation.item && (
          <img
            src={playSvg}
            alt="Play button"
            role="button"
            className={`playButton ${
              this.state.isPlaying ? "playButton--hide" : ""
            }`}
          />
        )}
      </section>
    );
  }
}
const mapStateToProps = state => ({
  activeStation: state.activeStation,
  stationList: state.stationList,
  activeGif: state.activeGif
});
export default connect(mapStateToProps)(MainDisplay);
