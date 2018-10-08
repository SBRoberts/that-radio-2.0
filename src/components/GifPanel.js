import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { fetchStationList } from '../actions/stationListActions';
import { fetchPrimaryQuery } from '../actions/fetchPrimaryQuery';
import { fetchGifList } from '../actions/fetchGifList';
import { fetchActiveGif } from '../actions/fetchActiveGif';

class GifPanel extends Component {
// create action to manage gif-related things
// create a reducer to dispatch gid actions
// import gif action in this file
// add gif info that I want in my props to map state func
// add action to export default connect
  componentDidMount(){
    // console.log(this.props);
    
  }
  clickHandler = (e) => {
    const link = e.currentTarget.dataset.link
    // console.log(link);
    this.props.fetchActiveGif(link)

    // fetchActiveGif
    
  }
  render() {
    return (
      <div>
        <ul>
        {
          this.props.gifList.items ?
          this.props.gifList.items.gifList.map((gif) => {
            return(
              <li data-link={gif.images.original_mp4.mp4} onClick={this.clickHandler} key={gif.id}>
                <video aria-labelledby={gif.title} autoPlay loop>
                  <source src={gif.images.downsized_small.mp4} type="video/mp4"/>
                  Your browser does not support HTML5 video (╥﹏╥).
                </video>
              </li>
            )
          })
          : null
        }
        </ul>
      </div>
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
})
export default connect(mapStateToProps, { fetchPrimaryQuery, fetchGifList, fetchActiveGif })(GifPanel);