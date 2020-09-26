import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import MovieReview from './MovieReviews';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;


class SearchableMovieReviewsContainer extends Component {

        state = {
            reviews: [], 
            searchTerm: ""
        }


    fetchData(e){
        e.preventDefault()
        fetch(URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(data => this.setState({reviews: data.results}))
    }

    handleSearch(e){
        this.setState({
            searchTerm: e.target.value
        })
    }
    
    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.fetchData}>
                    <input onChange={this.handleSearch} type="text" value={this.state.searchTerm}></input>
                    <button type="submit">CLICK TO FETCH</button>
                </form>
                <MovieReview reviewsLists={this.state.reviews}/>
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer

