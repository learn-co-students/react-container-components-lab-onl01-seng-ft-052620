import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

  state={
    reviews: [],
    searchTerm: ""
  }

  componentDidUpdate(){
      fetch(URL+`&query=${this.state.searchTerm}`)
      .then(resp=>resp.json())
      .then(data=>this.setState({reviews: data.results}))
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      searchTerm: this.searchInput.value
    })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref={searchInput => this.searchInput = searchInput}></input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
