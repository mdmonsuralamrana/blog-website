import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../FakeData/FakeData.json';


const BlogDetails = () => {
    const { id } = useParams();
    const currentBlog = fakeData.find(blog => blog.id === Number(id));

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12 text-center">
                    <img src={currentBlog.image} alt="" />
                    <h2>{currentBlog.headline}</h2>
                    <br />
                    <span>Published on - {currentBlog.published_date}</span>
                    <br />
                    <p>{currentBlog.news}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;