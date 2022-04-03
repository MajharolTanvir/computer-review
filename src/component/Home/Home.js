import React from 'react';
import image from '../../img/gsmarena_000.jpg'

const Home = () => {
    return (
        <div className='container'>
            <div className='row my-5 justify-content-center align-items-center'>
                <div className="col-md-6 col-lg-6 col-xl-6">
                    <h4>Apple MacBook Air M1 2020</h4>
                    <h4>Chose your first gaming laptop</h4>
                    <p>This is our go-to recommendation for those in search of a MacOS laptop for everyday basic use. The MacBook Air was updated in the first half of 2020 with new Intel processors and, most importantly, a new keyboard. However, in November, Apple announced its new homegrown M1 processors would be replacing Intel's CPUs in the Air. Using Apple's M1, the company promises an operating system with better performance and longer battery life -- up to 18 hours.</p>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 border-3">
                    <img className='w-100' src={image} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Home;