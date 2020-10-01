import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?`
            + `api-key=${NYT_API_KEY}`;
const APPEND_KEY = `api-key=${NYT_API_KEY}`
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }
    
    updateSearchTerm = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }



    renderReviews = (reviews) => {
        this.setState({
            reviews: reviews
        })
    }


    getReviews(e){       
        e.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(json => this.renderReviews(json.results))
    }

    render(){
        return(
            <div className='searchable-movie-reviews'>
                <MovieReviews reviews={this.state.reviews}/>
                <form onSubmit={this.getReviews.bind(this)} >
                    <input onChange={this.updateSearchTerm} type="text" name='search-term'></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}