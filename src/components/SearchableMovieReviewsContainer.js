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
            reviews: [],
            searchTerm: ""
        }
    }
    // handleSubmit=(event)=>{
    //     this.fetchMoviewReviews()

    // }
    fetchMovieReviews=(e)=>{
        e.preventDefault()
        console.log("State: ", this.state)
        fetch(URL+ "&query=" + this.state.searchTerm)
        .then(resp => resp.json())
        .then(object=> {
            this.setState({reviews: object.results})
         })
    }
    handleSearchTerm=(event)=>{
        this.setState({searchTerm: event.target.value})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.fetchMovieReviews}>
                    <div className="search-movies">
                        <input 
                            type="text"
                            value={this.state.searchTerm}
                            onChange={this.handleSearchTerm}
                        />
                    </div>
                    <div>
                        <input 
                            type="submit"
                            value="Search"
                        />
                    </div>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
export default SearchableMovieReviewsContainer