import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "5GaSYIzP4l9xAPsb8WXGSRfSomhE6QIb";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = { reviews: [], searchTerm: "" };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.updateTerm(event)}
            value={this.state.searchTerm}
          />
          <button type="submit"></button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

  findReviews = () => {
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then((resp) => resp.json())
      .then(
        (json) => {
          console.log(json.results);
          this.setState({
            reviews: json.results,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  updateTerm = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.findReviews();
  };
}

export default SearchableMovieReviewsContainer;
