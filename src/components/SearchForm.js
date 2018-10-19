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
  }
  changeHandler = (e) => {
    const label = e.target.parentNode.getElementsByTagName('label')
    const queryTerm = e.target.value
    this.props.fetchPrimaryQuery(queryTerm)

    // if the query is not empty, float the label
    if (queryTerm){
      label[0].classList.add('float')
    } else{
      label[0].classList.remove('float')
    }
  }
  render() {
    return (
      <form onSubmit={this.submitHandler} className="searchForm">
        <input type="search" onChange={this.changeHandler}/>
        <label htmlFor="primaryQuery">
          <h3>Search Vibes</h3>
        </label>
        <button type="submit">
          <i className="fas fa-search"></i>
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