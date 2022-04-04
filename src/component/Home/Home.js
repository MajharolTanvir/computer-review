import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import image from '../../img/gsmarena_000.jpg'
import Rating from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Home = () => {
    const [reviews] = useReview([])
    const reviewDetails = reviews.slice(0, 3)

    const navigate = useNavigate()

    const goToReview = () => {
        navigate(`review`)
    }

    return (
        <div className='container'>
            <div className='row my-5 py-5 justify-content-center align-items-center'>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h4>Apple MacBook Air M1 2020</h4>
                    <h4>Chose your first gaming laptop</h4>
                    <p>This is our go-to recommendation for those in search of a MacOS laptop for everyday basic use. The MacBook Air was updated in the first half of 2020 with new Intel processors and, most importantly, a new keyboard. However, in November, Apple announced its new homegrown M1 processors would be replacing Intel's CPUs in the Air. Using Apple's M1, the company promises an operating system with better performance and longer battery life -- up to 18 hours.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 border-3">
                    <img className='w-100 shadow-lg rounded-3' src={image} alt="" />
                </div>
            </div>
            <div>
                <h2 className='text-center py-4'>Review</h2>
                <div className='row'>
                        {
                        reviewDetails.map(review =>
                                <div className="col-xl-4">
                                <Card className='text-black shadow-lg' style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={review.picture} />
                                        <Card.Body>
                                            <Card.Title>{review.name}</Card.Title>
                                            <Card.Text>
                                                {review.about}
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                        <ListGroupItem>
                                                <Rating
                                                    initialRating={3.5}
                                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                                                    readonly
                                                ></Rating>
                                        </ListGroupItem>
                                        </ListGroup>
                                    </Card>
                                </div>)
                    }
                </div>
                <div className='py-4 text-center'>
                    <button onClick={goToReview} className='py-2 px-5 rounded-3 border-0 my-4'>See all review</button>
                </div>
            </div>
        </div>
    );
};

export default Home;