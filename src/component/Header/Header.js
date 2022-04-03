import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-warning'>
            <div className='container d-flex justify-content-between align-items-center py-2'>
                <div>
                    <h4>Latest Laptop</h4>
                </div>
                <div className="d-flex">
                    <NavLink to="/" className={isActive => "nav-link" + (!isActive ? " unselected" : "")
                    }>Home</NavLink>
                    <NavLink to="/review" className={isActive => "nav-link" + (!isActive ? " unselected" : "")
                    }>Review</NavLink>
                    <NavLink to="/dashboard" className={isActive => "nav-link" + (!isActive ? " unselected" : "")
                    }>Dashboard</NavLink>
                    <NavLink to="/blogs" className={isActive => "nav-link" + (!isActive ? " unselected" : "")
                    }>Blogs</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;