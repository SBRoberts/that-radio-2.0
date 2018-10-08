import React, { Component } from 'react'
import { connect } from 'react-redux';

class MainDisplay extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <section id="mainDisplay">
        <iframe
          id="videoFrame"
          title="videoFrame"
          src={`http://www.youtube.com/embed/${this.props.activeStation.activeStation}`}
          width="100%" height="200px"
          frameBorder="0"
          allowFullScreen>
        </iframe>
        {
          this.props.activeGif.activeGif ? 
            <video aria-labelledby="Active Gif Background" src={this.props.activeGif.activeGif} type="video/mp4" autoPlay loop>
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
  activeGif: state.activeGif.activeGif
})
export default connect(mapStateToProps)(MainDisplay);