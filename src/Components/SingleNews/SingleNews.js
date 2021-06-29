import React from 'react';
import { Link } from 'react-router-dom';
import './SingleNews.css';

const SingleNews = ({ news }) => {
    return (
        <div className="news-box col-md-4">
            <img className="img-fluid postImg" src={news.image} alt="" />
            <Link to={`/blog/${news.id}`}>
                <h2 className="postTitle">{news.headline}</h2>
            </Link>
            <span className="postDate">{news.published_date}</span>
            <p className="postDesc">{news.news.substr(0, 140) + '...'}</p>
        </div>
    );
};

export default SingleNews;