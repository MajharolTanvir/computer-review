import React from 'react';
import useReview from '../../hooks/useReview';

const Review = () => {
    const [reviews] = useReview([])
    return (
        <div className='container my-5 py-3'>
            <div className='row row-cols-xl-2 row-cols-1 row-cols-sm-2'>
                {
                    reviews.map(review => <div className="row align-items-center m-0 border border-2 py-2" key={review.id}>
                        <div className="col-xl-4">
                            <img className='w-100' src={review.picture} alt="" />
                        </div>
                        <div className="col-xl-8">
                            <h5>Name: {review.name}</h5>
                            <p>{review.about}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;