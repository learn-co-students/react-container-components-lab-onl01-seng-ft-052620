import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "5GaSYIzP4l9xAPsb8WXGSRfSomhE6QIb";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = { reviews: [] };
  }

  componentDidMount() {
    this.findReviews();
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

  findReviews = () => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({ reviews: json.results });
      });
  };
}

export default LatestMovieReviewsContainer;
