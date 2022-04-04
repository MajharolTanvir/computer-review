import React from 'react';
import image from '../../img/0.jpg'
import './About.css'

const About = () => {
    return (
        <div className='container about-part row py-5 align-items-center mx-auto'>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <img className='w-100 shadow-lg rounded-3' src={image} alt="" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <h3 className='my-2'>Apple MacBook Air M1 2020</h3>
                <p>In the post-pandemic world, laptops are a necessity. From students to remote workers, everyone has witnessed firsthand the importance of laptops in our daily life. If you are in the market for a new laptop, choosing a good one can get overwhelming fast -- the options are always growing. Here's a list of our picks for the best laptops in 2022. No matter your need, we've found something for everyone.

                    We're just getting started with 2022, so you're still going to see a lot of last year's models while hunting for your next laptop. At CNET, our laptop and computer experts have spent collective decades testing and reviewing laptops, covering everything from performance to price to battery life. This hand-curated list covers the best laptops across various sizes, styles and costs, including laptop computers running on Windows, MacOS and Chrome. (Microsoft released the full version of its Windows 11 operating system; all of the Windows laptops on this list should fully support that new OS.)</p>
            </div>
        </div>
    );
};

export default About;