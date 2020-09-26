import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import MovieReview from './MovieReviews';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


class SearchableMovieReviewsContainer extends Component {

    constructor(){
        super()

        this.state = {
            reviews: [], 
            searchTerm: ""
        }

    }


    fetchData(){
        fetch(URL)
        .then(resp => resp.json())
        .then(data => this.setState({reviews: data.results}))
    }
    
    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.fetchData}>
                    <input type="text" value={this.state.searchTerm}></input>
                    <button type="submit">CLICK TO FETCH</button>
                </form>
            <MovieReview reviewsLists={this.state.reviews}/>
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer

