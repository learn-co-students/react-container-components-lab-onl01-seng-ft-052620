import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component{
    constructor(){
        super()
        this.state = {
            reviews: []
        }
    }
    componentDidMount(){
        fetch(URL)
            .then(resp => resp.json())
            .then(json => {
                this.setState({reviews: json.results}
            )})
    }
    render(){
        return(
            <div className="latest-movie-reviews">
                <strong>Latest Reviews:</strong>
                <MovieReviews reviews={this.state.reviews} />
                <h1>----------</h1>
            </div>
        )
    }

}

export default LatestMovieReviewsContainer;