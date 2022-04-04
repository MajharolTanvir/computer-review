import React from 'react';
import useReview from '../../hooks/useReview';
import image from '../../img/gsmarena_000.jpg'

const Home = () => {
    const [reviews] = useReview([])
    const reviewDetails = reviews.slice(0, 3)

    return (
        <div className='container'>
            <div className='row my-5 py-5 justify-content-center align-items-center'>
                <div className="col-md-6 col-lg-6 col-xl-6">
                    <h4>Apple MacBook Air M1 2020</h4>
                    <h4>Chose your first gaming laptop</h4>
                    <p>This is our go-to recommendation for those in search of a MacOS laptop for everyday basic use. The MacBook Air was updated in the first half of 2020 with new Intel processors and, most importantly, a new keyboard. However, in November, Apple announced its new homegrown M1 processors would be replacing Intel's CPUs in the Air. Using Apple's M1, the company promises an operating system with better performance and longer battery life -- up to 18 hours.</p>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 border-3">
                    <img className='w-100' src={image} alt="" />
                </div>
            </div>
            <div>
                <h3 className='text-center py-4'>Review</h3>
                <div className='row'>
                    <div className="col-xl-6">
                        {
                            reviewDetails.map(review =>
                                <div className="row border border-1" key={review.id}>
                                    <div className="col-xl-4">
                                        <img className='w-100' src={review.picture} alt="" />
                                    </div>
                                    <div className="col-xl-8">
                                        <h6>Name: {review.name}</h6>
                                        <p>{review.about}</p>
                                    </div>
                                </div>)
                        }
                    </div>

                </div>
                <div className='py-4 text-center'>
                    <button className='py-2 px-5 rounded-3 border-0 my-4'>See all review</button>
                </div>
            </div>
        </div>
    );
};

export default Home;