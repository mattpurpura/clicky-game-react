import React from 'react';

const NavBar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-dark">
        <ul className="navbar-nav mr-auto">
            <li className='nav-item'>
                <span className="navbar-brand mb-0 h1">OverWatch Clicky Game</span>
            </li>
        </ul>
        <ul className="navbar-nav ml-auto scoreBoard">
            <li className='nav-item'>
                <span className='navbar-text my-sm-0'>Score: {props.score}</span>
            </li>
            <li className='nav-item'>
                <span className='navbar-text mr-sm-2'>High Score: {props.highScore}</span> 
            </li>

        </ul>
    </nav>
)

export default NavBar;