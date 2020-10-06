// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
    const checkUndefined = (props) => {
        if (props === undefined){
            return true
        }else{
            return false
        }
    }
    return(
        <ul className='review-list'>
            {checkUndefined(props.reviews) ? console.log('wait') : props.reviews.map(r => {
                return (
                    <li className='review'>
                        <h3>{r.display_title}</h3>
                        <p>{r.summary_short}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default MovieReviews;