import React from 'react'

const MovieReview = ({title, author, publication_date, summary, full_article_link}) => (
    <div className="times-review">
        <p>Title: {title}</p>
        <p>Author: {author}</p>
        <ul>
            <li>
                Publication Date: {publication_date}
            </li>
            <li>
                Summary: {summary}
            </li>
            <li>
                Article Link: {full_article_link}
            </li>
        </ul>
        <hr />
    </div>
)
export default MovieReview;