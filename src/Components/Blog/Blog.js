import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import NavigationBar from '../NavigationBar/NavigationBar';

const Blog = ({ news }) => {
    return (
        <div className="col-md-6">
            <img className="img-fluid postImg" src={news.img} alt="" />
            <Link to={`/blog/${news.id}`}>
                <h2 className="postTitle">{news.headline}</h2>
            </Link>
            <span className="postDate">{news.published_date}</span>
            <p className="postDesc">{news.news.substr(0, 140) + '...'}</p>
        </div>
    );
};

export default Blog;