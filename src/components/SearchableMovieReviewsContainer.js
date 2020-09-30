import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'RoUFCCfCUbl2clzVnKoHeu2tnvAAJtpX';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleChange = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch(URL + '&query=' + this.state.searchTerm)
        .then(resp => resp.json())
        .then(resp => {
            this.setState({ reviews: resp.results})
        })
    }
    
    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search MovieReviews</label>
                    <input type="text" name="search" id="search-input" value={this.state.searchTerm} onChange={this.handleChange} />
                    <button type="sumit">Submit</button>
                </form>
                <h2>Movie Review By Search:</h2>
                <MovieReviews reviews = {this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
