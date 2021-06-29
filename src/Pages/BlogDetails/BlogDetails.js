import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../FakeData/FakeData.json';


const NewsDetails = () => {
    const { id } = useParams();
    const currentNews = fakeData.find(News => News.id === Number(id));

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12 text-center">
                    <img src={currentNews.image} alt="" />
                    <h2>{currentNews.headline}</h2>
                    <br />
                    <span>Published on - {currentNews.published_date}</span>
                    <br />
                    <p>{currentNews.news}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;