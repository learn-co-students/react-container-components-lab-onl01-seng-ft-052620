import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super()
        this.state = {
            searchTerm: "",
            reviews: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(URL+this.state.searchTerm)
        fetch(URL + this.state.searchTerm)
            .then(resp => resp.json())
            .then(json => this.setState({reviews: json.results}))
    }
    
    handleChange = (event) => {
        this.setState({searchTerm: "&query=" + event.target.value})
    }

    render(){
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <label for="search">Search: </label>
                    <input onChange={this.handleChange} id="search" />   
                    <input type="submit" value="submit" />
                </form>
                <strong>SEARCH RESULTS:</strong>
                <MovieReviews reviews={this.state.reviews}/>
                <h1>------------</h1>
            </div>
        )
    }
}
export default SearchableMovieReviewsContainer;
