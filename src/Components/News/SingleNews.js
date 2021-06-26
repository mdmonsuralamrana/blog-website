import React, { useEffect, useState } from 'react';

const SingleNews = ({news}) => {

    // const [getNews, setGetNews] = useState([]);

    // useEffect(() =>{
    //     fetch('news')
    //     .then(
    // },[])

    return (
        <div className="col-md-4 col-sm-12 p-4">
            <div className="news-container shadow p-4 rounded">
                <img style={{ height: '150px', width: 'auto' }}
                    className="img-fluid"
                    src={news.image} alt="" />
                <h5 className="my-3">{news.headline}</h5>
                <p>{news.published_date}</p>
                <p
                    style={{ textAlign: "justify" }}
                    className="text"
                >
                    {news.news}
                </p>
            </div>
        </div>
    );
};

export default SingleNews;