import React from 'react';
import { Link } from 'react-router-dom';
import './SingleNews.css';

const SingleNews = ({ news }) => {
    return (
        <div className="news-box col-md-3">
            <Link to={`/blog/${news.id}`}>
                <div>
                    <img className="img-fluid postImg" src={news.image} alt="" />
                    <h2 className="postTitle">{news.headline}</h2>
                    <span className="postDate">{news.published_date}</span>
                    <p className="postDesc">{news.news.substr(0, 140) + '...'}</p>
                </div>
            </Link>
        </div>
    );
};

export default SingleNews;