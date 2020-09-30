import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export class SearchableMovieReviewsContainer extends Component {
    state= {
        searchTerm: "",
        reviews: []
    }
    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange}type="text" name="search" id="search"/>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
    handleSubmit = (e) => {
        e.preventDefault();
        fetch(URL + this.state.searchTerm)
        .then(resp => resp.json())
        .then(data => this.setState({
            reviews: data.reviews
        }))
    }
    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }
}

export default SearchableMovieReviewsContainer
