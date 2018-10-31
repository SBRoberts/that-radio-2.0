import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPrimaryQuery } from '../actions/fetchPrimaryQuery';
import { fetchGifList } from '../actions/fetchGifList';
import { fetchActiveGif } from '../actions/fetchActiveGif';

class GifPanel extends Component {
  constructor(props){
    super(props)
    console.log(this.props);
  }
  clickHandler = (e) => {
    const link = e.currentTarget.dataset.link
    this.props.fetchActiveGif(link)
  }
  render() {
    const {displayGifPanel} = this.props.controlPanel
    const {gifList} = this.props
    return (
      <section id="gifPanel" className={`gifList ${displayGifPanel ? 'show' : null}`}>
        <ul className="gifList__container">
        {
          gifList.items.length ?
          gifList.items.map((gif) => {
            return(
              <li
              className="gifList__item"
              data-link={gif.images.original_mp4.mp4}
              onClick={this.clickHandler}
              key={gif.id}>
                <video
                aria-labelledby={gif.title}
                src={gif.images.downsized_small.mp4}
                type="video/mp4"
                autoPlay
                muted
                loop>
                Your browser does not support HTML5 video (╥﹏╥).
                </video>
              </li>
            )
          })
          : null
        }
        </ul>
      </section>
    )
  }
}
GifPanel.propTypes = {
  fetchPrimaryQuery: PropTypes.func.isRequired,
  fetchGifList: PropTypes.func.isRequired,
  fetchActiveGif: PropTypes.func.isRequired,
  primaryQuery: PropTypes.object,
  gifList: PropTypes.object,
}
// setInterval(() => {
// }, 50)
const mapStateToProps = state => ({
  queryTerm: state.primaryQuery.queryTerm,
  gifList: state.gifList,
  activeGif: state.activeGif.activeGif,
  controlPanel: state.controlPanel,
})
export default connect(mapStateToProps, { fetchPrimaryQuery, fetchGifList, fetchActiveGif})(GifPanel);