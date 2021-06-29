import React from 'react';
import fakeData from '../../FakeData/FakeData.json';
import SingleNews from '../SingleNews/SingleNews';

const News = () => {
    return (
        <section id="services" className="services-container my-5">
            <div className="text-center my-md-4">
                <h2 className="text-brand mb-3">All News</h2>
            </div>
            <div className="container text-center">
                <div className="row" data-aos="zoom-in-down">

                    {
                        fakeData.map(news => <SingleNews key={fakeData.id} news={news}></SingleNews>)
                    }
                </div>
            </div>
        </section>
    );
};

export default News;