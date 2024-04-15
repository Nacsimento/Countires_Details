import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <>
        <div className='container_nav'>
        <nav>
            <h1>Where in the World?</h1>
            <div className='toggle'>
                <i class="uil uil-moon"></i>
                <h2>Dark Mode </h2>
                
            </div>
        </nav>
        </div>
        </>
    );
}

export default Nav;
