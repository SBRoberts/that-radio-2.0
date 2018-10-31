import React, { Component } from 'react'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPrimaryQuery } from '../actions/fetchPrimaryQuery';
import { fetchStationList } from '../actions/stationListActions';
import { fetchGifList } from '../actions/fetchGifList';

class SearchForm extends Component {
  constructor(){
    super()
    this.state = {
      isLabelFloat: false,
    }
  }
  submitHandler = (e) => {
    e.preventDefault()
    const { queryTerm } = this.props.primaryQuery
    this.props.fetchStationList(queryTerm)
    this.props.fetchGifList(queryTerm)
  }
  changeHandler = (e) => {
    const queryTerm = e.target.value
    this.props.fetchPrimaryQuery(queryTerm)

    // if the query is not empty, float the label
    if (queryTerm.length){
      this.setState({
        isLabelFloat: true
      })
    } else{
      this.setState({
        isLabelFloat: false
      })
    }
  }
  render() {
    const {isLabelFloat} = this.state
    return (
      <form onSubmit={this.submitHandler} className="searchForm">
        <input type="search" onChange={this.changeHandler}/>
        <label htmlFor="primaryQuery" className={isLabelFloat ? "float" : ""}>
          <h3>Search Vibes</h3>
        </label>
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    )
  }
}

SearchForm.propTypes = {
  fetchPrimaryQuery: PropTypes.func.isRequired,
  fetchStationList: PropTypes.func.isRequired,
  fetchGifList: PropTypes.func.isRequired,
  stationList: PropTypes.object,
  gifList: PropTypes.object,
  primaryQuery: PropTypes.object,
}

const mapStateToProps = state => ({
  queryTerm: state.primaryQuery.queryTerm,
  stationList: state.stationList,
  gifList: state.gifList,
  primaryQuery: state.primaryQuery
})
export default connect(mapStateToProps, {fetchPrimaryQuery, fetchStationList, fetchGifList })(SearchForm);