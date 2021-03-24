import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [], 
    searchTerm: ''
  }

  handleSearchInputChange =(e) => {
    this.setState({ searchTerm: e.target.value })
  }

  handleSearch = (e) => {
    e.preventDefault();

    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({reviews: res.results }));
  }


  render() {

    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSearch}>
          <label htmlFor="search-input">Search Movie Reviews</label>
          <input id="search-input" type="text" onChange={this.handleSearchInputChange}/>
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer