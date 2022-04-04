import React from 'react';
import useReview from '../../hooks/useReview';
import Rating from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Review = () => {
    const [reviews] = useReview([])
    return (
        <div className='container mx-auto row py-5'>
            <h3 className='text-center py-4'>Check our customer reviews</h3>
            {
                reviews.map(review => <div className='col-lg-4 col-sm-12 col-md-6 mx-auto my-3'>
                    <Card className='text-black shadow-lg'>
                        <Card.Img variant="top" src={review.picture} key={review.id} />
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
    );
};

export default Review;