import React, { Component } from 'react'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPrimaryQuery } from '../actions/fetchPrimaryQuery';
import { fetchStationList } from '../actions/stationListActions';
import { fetchGifList } from '../actions/fetchGifList';

class SearchForm extends Component {
  submitHandler = (e) => {
    e.preventDefault()
    this.props.fetchStationList(this.props.queryTerm.queryTerm)
    this.props.fetchGifList(this.props.queryTerm.queryTerm)
    console.log(this.props);
    
    // console.log(this.props.queryTerm.queryTerm)
    // setInterval(() => {
    //   console.log(this.props);
    // }, 500)
    
  }
  changeHandler = (e) => {
    const queryTerm = e.target.value
    this.props.fetchPrimaryQuery(queryTerm)
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label htmlFor="primaryQuery">
          <h3>What are your vibes?</h3>
        </label>
        <input type="text" onChange={this.changeHandler}/>
        <button type="submit">
          Search
        </button>
      </form>
    )
  }
}

setInterval(() => {
  SearchForm.propTypes = {
    fetchPrimaryQuery: PropTypes.func.isRequired,
    fetchStationList: PropTypes.func.isRequired,
    fetchGifList: PropTypes.func.isRequired,
    stationList: PropTypes.object,
    gifList: PropTypes.object,
    primaryQuery: PropTypes.object,
  }
}, 50)
const mapStateToProps = state => ({
  queryTerm: state.primaryQuery.queryTerm,
  stationList: state.stationList.items,
  gifList: state.gifList.items,
})
export default connect(mapStateToProps, {fetchPrimaryQuery, fetchStationList, fetchGifList })(SearchForm);