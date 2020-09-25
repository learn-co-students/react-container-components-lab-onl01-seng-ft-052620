import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { replace } from 'sinon';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;


// Code SearchableMovieReviewsContainer Here

export class SearchableMovieReviewsContainer extends Component {
constructor(){
    super()
    this.state ={
        reviews : [],
        searchTerm: ""
    }
}  

handleChange = (event) =>{
    this.setState({
        searchTerm: event.target.value
    })
}

handleSubmit = (event) =>{
    event.preventDefault()
    console.log(this.state.searchTerm)
    fetch(URL + this.state.searchTerm)
    .then(resp => resp.json())
    .then(reviews => {
        this.setState({ reviews: reviews.results })
    })
}
    render() {
        return (
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <label >Search Reviews</label>
                    <input type ="text" name="search" value = {this.state.searchTerm} onChange ={this.handleChange}></input>
                </form>
                <br/>
                <MovieReviews moviesData = {this.state.reviews}/>
            </div>
        )
    }
}


export default SearchableMovieReviewsContainer
