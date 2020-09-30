import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';

class SearchableMovieReviewsContainer extends Component{
  state = {
    reviews: [],
    searchTerm: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch(URL + `query=${this.state.searchTerm}` + `&api-key=${NYT_API_KEY}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          reviews: data.results
        })
      })
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer