// Code MovieReviews Here
import React, { Component } from 'react'

// export class MovieReviews extends Component {
//     render() {
//         // console.log(this.props.movieData)
//         if (this.props.movieData !== []){
//         return (
//             <div>
//              Title: {this.props.movieData.display_title}<br/>
//              Release Date:{this.props.movieData.publication_date}
//              <p className = "summary-short">{this.props.movieData.summary_short}</p>
//             </div>
//         )
//         }
//     }
// }

const MovieReviews = ({moviesData}) => {
    return(
    <div className= "review-list">
        {moviesData.map(Review)}
   </div>
    )
}

const Review = ({display_title, publication_date, summary_short}) => {
    return (
    <div className= "review">
    {display_title}<br/>
    {publication_date}
    <p className = "summary-short">{summary_short}</p>
    </div>
    )
}


MovieReviews.defaultProps = {
    moviesData: []
  };

export default MovieReviews
